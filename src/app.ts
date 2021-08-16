import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

require('./database');

//Initilizations
const app = express();

// --------------------------------------------------------------------------
//Settings
// --------------------------------------------------------------------------


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



app.use(express.json());
app.use(express.urlencoded({extended: true}));

// --------------------------------------------------------------------------
//Routes
// --------------------------------------------------------------------------

app.use('/api', require('./routes/routePerro'));
app.use('/api', require('./routes/routeAdoptante'));
app.use('/api', require('./routes/routeFundacion'));
app.use('/api', require('./routes/routeGato'));
app.use('/api', require('./routes/routeLogin'));

//module.exports = app;
export default app;