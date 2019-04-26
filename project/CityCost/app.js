const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const deleteHistRoutes =require('./routes/deleteHist');
const authRoutes = require('./routes/auth-routes');
const applicationRoutes = require('./routes/application-routes');
var apiCallerRouter = require('./routes/apiCaller');
const historyRoutes =require('./routes/history');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');

const keys = require('./ignore/keys');
const app = express();
app.use(express.static(__dirname + '/public'));
// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session_cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb_dbURI, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/application', applicationRoutes);
app.use('/apiCaller', apiCallerRouter);
app.use('/history', historyRoutes);
app.use('/deleteHist', deleteHistRoutes);
//app.use(express.static(path.join(__dirname, 'public')));
// create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
