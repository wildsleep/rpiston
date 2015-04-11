var path = require('path');
var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');
var glob = require('glob');
var session = require('express-session');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local').Strategy;

console.log('Starting rPiston server...');

var app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	cookie: { maxAge: 60000 },
	resave: false,
	saveUninitialized: false,
	secret: 'super secret key'
}));

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

var superSecureSecret = require('./super-secret.json');
passport.use(new LocalStrategy(function (username, password, done) {
	// yeah, so bulletproof security isn't exactly the point here
	if (superSecureSecret[username] == null) {
		return done(null, false, { message: 'Invalid username.' });
	}
	if (superSecureSecret[username] !== password) {
		return done(null, false, { message: 'Invalid password.' });
	}
	return done(null, { user: username });
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get('/scripts/chroma.min.js', function (req, res) {
	var file = require.resolve('chroma-js');
	var minFile = file.replace(/\.js$/, '.min.js');
	res.sendFile(minFile);
});
app.use('/scripts', express.static(path.join(__dirname, '../public/scripts')));
app.use('/styles', express.static(path.join(__dirname, '../public/styles')));

function verifyAuthenticated(req, res, next) {
	if (!req.isAuthenticated()) {
		res.redirect('/');
	} else {
		next();
	}
}

app.get('/', function (req, res) {
	res.render('auth', { error: req.flash('error') });
});

app.post('/login', passport.authenticate('local', {
	successRedirect: '/control',
	failureRedirect: '/',
	failureFlash: true
}));

app.post('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.get('/control', verifyAuthenticated, function (req, res) { res.render('control'); });

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('rPiston server listening at http://%s:%s', host, port);
});

require('./socket')(server);
