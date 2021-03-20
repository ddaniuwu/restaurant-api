var mongoose = require('mongoose')
var app = require('./app')
var config  = require('./config')
//var express = require('express') //llamamos a Express

//archivos estaticos y estilos
//app.set('view engine', 'pug'); //renderiza al archivo index.pug en views
//app.use('/static', express.static('public')); //agrega archivos estaticos

//app.get('/', function (req, res) { //meotodo para renderizar a index.pug 
  //res.render('index', { Platillo: 'Carne asada', Bebida: 'Refresco!' , Postre: 'Helado'});
  //});


mongoose.connect('mongodb://localhost:27017/food', function(err,res){
    if(err) {
        return console.log('Error')
    }

console.log('Conexion a la base de datos establecida')
app.listen(config.port , () =>{
  console.log('API escuchando en el puerto ' + config.port)

})

})