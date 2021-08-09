const express = require('express');
const mongoose = require('mongoose');


const adoptanteRoutes = require ("./routes/adoptante");
const Adoptante = require('./models/adoptante');
const Fundacion = require('./models/fundacion');


//Initilizations
const app = express();
const url = "mongodb+srv://gabokid:bg1CbQvQEvqavI4w@cluster0.igejl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


app.use('/api',require('./routes/adoptante'));
app.use('/api',require('./routes/fundacion'));


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Conectado a la BD");
})
.catch(()=>{
    console.log("Conexión fallida");
});



//Settings
app.use(express.json());
app.use(express.urlencoded({extended: true}));


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

app.post("/crear-cuenta/crear-adoptante", (req, res, next) =>{
    //bcrypt.hash(req.body.password, 10)
    //.then(function(hash) {
        console.log("Creando adoptante");
        console.log(req.body);
        const adoptante = new Adoptante({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fecha_nacimiento: req.body.fecha_nacimiento,
            genero: req.body.genero,
            localidad: req.body.localidad,
            correo: req.body.correo,
            num_celular: req.body.num_celular,
            password: req.body.password,
            tipo_usuario: 'Adoptante'
        });
        console.log(adoptante);
        adoptante.save()
        .then(result => {
            res.status(201).json({
                message: 'Adoptante creado',
                result: result
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
        });
});

app.get('/login', (req, res) => {
    res.send([1,2,3]);
    console.log("Dentro de login")
    //next();
});              


module.exports = app;