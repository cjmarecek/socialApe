const functions = require('firebase-functions');

const express = require('express');
const app = express();
const FBAuth = require('./util/fbAuth')

const { getAllScreams, postOneScream } = require('./handlers/screams')
const { signup, login, uploadImage } = require('./handlers/users')
 
// Screams routes:
app.get('/screams', getAllScreams);
app.post('/screams', FBAuth, postOneScream);

//Users routes: 
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image',FBAuth, uploadImage)
exports.api = functions.region('europe-west3').https.onRequest(app);
