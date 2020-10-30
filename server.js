/**
 * js file responsible to serve web pages to application
 */

/**
 * @type {Object}
 */
const livereload = require('livereload');
/**
 * @type {Object}
 */
const connectLivereload = require('connect-livereload');
/**
 * @typeof {e}
 */
var express = require('express');
/**
 * @type {Express}
 */
var app = express();
/**
 * @type {number}
 */
const port = 3000;
/**
 * @type {string}
 */
var url = 'http://localhost:' + port;
/**
 * @type {Object}
 */
const opn = require('opn');

console.log('Connecting to local server : http://localhost:3000...');
/**
 * @type {string}
 */
const dirUrl = __dirname + '/public';
/**
 * @type {any}
 */
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);
liveReloadServer.server.once('connection', () => {
	setTimeout(() => {
		liveReloadServer.refresh('/');
	}, 1000);
});
// ligne 20 à activer pour relaunch sur autosave
app.use(connectLivereload());
app.use('/public', express.static('public'));
app.use('/static', express.static('static'));
app.use('/node_modules', express.static('node_modules'));
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
