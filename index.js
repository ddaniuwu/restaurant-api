var mongoose = require('mongoose')
var app = require('./app')
var config  = require('./config')

mongoose.connect(config.db, function(err,res){
    if(err) {
        return console.log('Error')
    }

console.log('Conexion a la base de datos establecida')
app.listen(config.port , () =>{
  console.log('API escuchando en el puerto ' + config.port)

})

})