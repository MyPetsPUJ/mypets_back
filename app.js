const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

require('./src/database');

//Initilizations
const app = express();

//Settings

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS");
    
    next();
});

app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./routes/perro'));
app.use('/api', require('./routes/adoptante'));
app.use('/api', require('./routes/fundacion'));
app.use('/api', require('./routes/gato'));
app.use('/api', require('./routes/login'));

module.exports = app;