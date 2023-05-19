const express = require('express');
const passport = require('passport');
const { Strategy } = require('@superfaceai/passport-twitter-oauth2');
const session = require('express-session');
require('dotenv').config();
require('https').globalAgent.options.rejectUnauthorized = false;

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
    (accessToken, refreshToken, profile, done) => {
      if (!accessToken) {
        return done(new Error('Failed to obtain access token'));
      }
      //以下三行是测试代码，后续删除
      console.log('accessToken:', accessToken);
      console.log('refreshToken:', refreshToken);
      console.log('profile:', JSON.stringify(profile, null, 2));

      console.log('Success!', { accessToken, refreshToken });
      return done(null, profile);
    }
  )
);
const app = express();

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
    const userData = JSON.stringify(req.user, undefined, 2);
    res.end(
      `<h1>Authentication succeeded</h1> User data: <pre>${userData}</pre>`
    );
  }
);

app.listen(3111, () => {
  console.log(`Listening on ${process.env.BASE_URL}`);
});
