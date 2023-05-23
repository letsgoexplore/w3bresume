// run this in browser dev tools
const WebSocket = require('ws')
var ws = new WebSocket("ws://3.114.209.7:3111/");
ws.onopen = function() {
    console.log("WebSocket is connected");
};
ws.onerror = function(err) {
    console.log("WebSocket connection failed: ", err);
};
