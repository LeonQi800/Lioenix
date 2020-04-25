const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const errorhandler = require('errorhandler');
const messages = require('./config/messages');
const path = require('path');
const http = require('http');
const methods = require('methods');

require('./models/User');
require('./config/passport');


const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(express.static(path.join(__dirname , 'lioenix-ws/public')));
// app.use(express.static(__dirname + '/public'));
app.use(errorhandler());
app.use(require('morgan')('dev'));

app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

// DB

mongoose.set('useCreateIndex', true);
const db = require('./config/keys').MongoURI;
// DB connect
mongoose.connect(db, {dbName:'webapp', useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log(messages.DB_CONNECT))
    .catch(err => console.log(err) );

if (!isProduction) {
    app.use(errorhandler());
}

// Routes
app.use('/', require('./api'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Service started on port ${PORT}`));

