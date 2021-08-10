const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

require('./src/database');


//const adoptanteRoutes = require ('./routes/adoptante');
const Adoptante = require('./src/models/adoptante');
const Fundacion = require('./src/models/fundacion');


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

app.use('/api', require('./routes/adoptante'));
//app.use('/api', require('./routes/fundacion'));

app.post('/api/login', (req, res) => {

    //const {correo, password, tipo_usuario} = req.body;
    console.log(req.body.correo);
    
    Adoptante.findOne({correo: req.body.correo}).then(adoptante =>{
        if(!adoptante){
            return res.status(401).json({
                message: "Correo inválido"
            });
        }
        if(adoptante.password != req.body.password){
            return res.status(401).json({
                message: "Contraseña inválida"
            });
        }
        if(adoptante.tipo_usuario != req.body.tipo_usuario){
            return res.status(401).json({
                message: "El tipo de usuario no coincide"
            });
        }        

        const token = jwt.sign({correo: adoptante.correo, _id: adoptante._id}, 
        'adoptante_key', 
        { expiresIn: '1h'}
        );
        res.status(200).json({
            token: token
        });
    });
/*
    Fundacion.findOne({correo: req.body.correo}).then(fundacion =>{
        if(!fundacion){
            return res.status(401).json({
                message: "Correo inválido"
            });
        }
        if(fundacion.password != req.body.password){
            return res.status(401).json({
                message: "Contraseña inválida"
            });
        }
        if(fundacion.tipo_usuario != req.body.tipo_usuario){
            return res.status(401).json({
                message: "El tipo de usuario no coincide"
            });
        }        
    });*/


    
    
    /*const fundacion = Fundacion.findOne({correo: req.body.correo});

    if(!adoptante || !fundacion){
        return res.status(401).send('El correo no existe, por favor ingrese un correo válido');
    }
    if(adoptante.password != password || fundacion.contrasena != password){
        return res.status(401).send('Contraseña incorrecta');
    }
    if(adoptante.tipo_usuario !== tipo_usuario || fundacion.tipo_usuario != tipo_usuario){
        return res.status(401).send('El tipo de usuario no coincide');
    }

    const token = jwt.sign({_id: adoptante._id}, 'adoptantekey');
          token = jwt.sign({_id: fundacion._id}, 'fundacionkey');

    return res.status(200).json({token});*/

});

app.post("/api/crear-cuenta/crear-fundacion", (req, res, next) =>{
    //bcrypt.hash(req.body.password, 10)
    //.then(function(hash) {
        console.log("Creando fundacion");
        console.log(req.body);
        const fundacion = new Fundacion({
            nombreFund: req.body.nombreFund,
            nombreEncar: req.body.nombreEncar,
            apellidosEncar: req.body.apellidosEncar,
            fecha_creacion: req.body.fecha_creacion,
            localidad: req.body.localidad,
            correo: req.body.correo,
            num_celular: req.body.num_celular,
            contrasena: req.body.contrasena,
            tipo_usuario: 'Fundacion'
        });
        console.log(fundacion)
        fundacion.save()
        const token = jwt.sign({_id: fundacion._id}, 'fundacionkey')
        res.status(200).json({token});

        //.then(result => {
          //  res.status(201).json({
            //    message: 'Fundación creada',
              //  result: result
            //});
        //})
        //.catch(err => {
          //  res.status(500).json({
            //    error: err
            //});
        //});
    //});
});


app.post("/crear-cuenta/crear-adoptante",(req, res, next) =>{
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
        console.log(adoptante)
        adoptante.save()
        .then(result => {
            res.status(201).json({
                message: 'Adoptante creado',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    //});
});

module.exports = app;