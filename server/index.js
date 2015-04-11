var argv = require('minimist')(process.argv.slice(2));
var bodyParser = require('body-parser');
var express = require('express');
var flash = require('connect-flash');
var glob = require('glob');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var path = require('path');
var session = require('express-session');

var assetsPublicPath = argv.publicPath || '/';

console.log('Starting rPiston server...');

var app = express();

app.set('views', path.join(__dirname, '../templates'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	cookie: { maxAge: 30*24*60*60*1000 },
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

function verifyAuthenticated(req, res, next) {
	if (!req.isAuthenticated()) {
		res.redirect('/sign-in');
	} else {
		next();
	}
}

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/sign-in', function (req, res) {
	res.render('sign-in', { error: req.flash('error') });
});

app.post('/sign-in', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/sign-in',
	failureFlash: true
}));

app.post('/sign-out', function (req, res) {
	req.logout();
	res.redirect('/sign-in');
});

app.get('/*', verifyAuthenticated, function (req, res) {
	res.render('app', {
		publicPath: assetsPublicPath
	});
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('rPiston server listening at http://%s:%s', host, port);
});

require('./socket')(server);
