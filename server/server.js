//==================
//DEPENDENCIES
//===================
const express = require('express');
const session = require('express-session')
require('dotenv').config()
const app = express();
//====================
//PORT
//====================

const PORT = process.env.PORT || 3000;

//===================
//DATABASE
//===================

//==================
// MIDDLEWARE
//==================

//==================
// CONTROLLERS
//==================

// const usersController = require('./controllers/users.js')
// app.use('/users', usersController)

// const sessionsController = require('./controllers/sessions.js')
// app.use('/sessions', sessionsController)

//==================
// LISTENER
//==================

app.listen(PORT, () => console.log( 'Listening on port:', PORT));