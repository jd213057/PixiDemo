const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
var express = require('express');
var app = express();
const port = 3000;
var url = 'http://localhost:' + port;
const opn = require('opn');

console.log('Connecting to local server : http://localhost:3000...');

const dirUrl = __dirname + '/public';
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);
liveReloadServer.server.once('connection', () => {
	setTimeout(() => {
		liveReloadServer.refresh('/');
	}, 100);
});
// ligne 17 à activer pour relaunch sur autosave
app.use(connectLivereload());
app.use('/static', express.static('static'));
app.get('/', function (req, res) {
	res.sendFile(dirUrl + '/index.html');
});

app.get('/', function (req, res) {
	res.redirect('index.html');
});

app.listen(port);
console.log('Connection successful !');
console.log('Opening this link ' + url + ' in you Web Browser...');
opn(url);

