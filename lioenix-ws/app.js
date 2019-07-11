const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const errorhandler = require('errorhandler');
const messages = require('./config/messages');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));
app.use(errorhandler());
mongoose.set('useCreateIndex', true);

// DB
const db = require('./config/keys').MongoURI;
// DB connect
mongoose.connect(db, {useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log(messages.DB_CONNECT))
    .catch(err => console.log(err) );

// Routes
app.use('/', require('./api'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Service started on port ${PORT}`));

