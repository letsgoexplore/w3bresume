const express = require('express');
const passport = require('passport');
const http = require('http')
const WebSocket = require('ws')
const { Strategy } = require('@superfaceai/passport-twitter-oauth2');
const session = require('express-session');
require('dotenv').config();
require('https').globalAgent.options.rejectUnauthorized = false;

// <0> init
const port = 3111

// <1> Serialization and deserialization
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the Twitter OAuth2 strategy within Passport
passport.use(
  // <2> Strategy initialization
  new Strategy(
    {
      clientID: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      clientType: 'confidential',
      callbackURL: `${process.env.BASE_URL}/auth/twitter/callback`,
    },
    // <3> Verify callback
    // TODO 这些token很重要，但我先不管了
    (accessToken, refreshToken, profile, done) => {
      if (!accessToken) {
        return done(new Error('Failed to obtain access token'));
      }

      console.log('Success!', { accessToken, refreshToken });
      return done(null, profile);
    }
  )
);
const app = express();
let userData = null;

// <4> Passport and session middleware initialization
app.use(passport.initialize());
app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: true })
);

// <5> Start authentication flow
app.get(
  '/auth/twitter',
  passport.authenticate('twitter', {
    // <6> Scopes
    scope: ['tweet.read', 'users.read', 'offline.access'],
  }),
  function(){
    console.log('auth/twitter')
  }
);

// <7> Callback handler
app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter'),
  function (req, res) {
    console.log('auth/twitter/callback')
    if (req.error) {
      console.log('Error in OAuth callback:', req.error);
      return res.status(500).send('Error in OAuth callback');
    }
    userData = JSON.stringify(req.user, undefined, 2);
    console.log(`${userData}`)
    sendMessageToClients(userData)
    res.end(
      `<script type="text/javascript">
        setTimeout(function() {
          window.close();
        }, 2000);
      </script>`
    );
  }
);

const server = http.createServer(app)
server.listen(port, ()=> {
  console.log(`server listeing on :${port}`)
})

const wss = new WebSocket.Server({ server,
  verifyClient: function(info, done) {
  console.log('Request from origin: ' + info.origin);
  done(true); // 接受所有来源的请求
} });

let clients = []

wss.on('connection', function connection(ws) {
  console.log('New WebSocket connection');
  // ws.on('message', function incoming(message) {
  //   console.log('received: %s', message);
  //   ws.send(JSON.stringify({
  //     photos: userData,
  //     status: userData ? true : false
  //   }));
  //   ws.close()
  // });
  clients.push(ws)

  ws.on('close', function() {
    const index = clients.indexOf(ws);
    if (index > -1) {
      clients.splice(index, 1);
    }
  });

  ws.on('error', err => {
    console.log('Handled error: ' + err);
  });
});

console.log(`WebSocket server listening at ws://0.0.0.0:${port}`);

// 这个实现有些问题，应该是找到对应的client 发消息，这里我懒狗了
function sendMessageToClients(message) {
  clients.forEach(client => {
    if(client.readyState === WebSocket.OPEN){
      client.send(message);
      // TODO
      // client.close()
    }
  });
}