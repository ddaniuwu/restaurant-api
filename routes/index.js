'user strict'


var express = require('express') //llamamos a Express
const foodCtrl = require('../controllers/food')


const api = express.Router()

  api.get('/food', foodCtrl.getFoods ) //Peticion de todos las comidas existentes
  api.get('/food/:foodId', foodCtrl.getFood ) //Peticion por id
  api.post('/food' , foodCtrl.saveFood)//Termino de POST
  api.put('/food/:foodId' ,foodCtrl.updateFood)//Termino de PUT
  api.delete( '/food//delete/:foodId', foodCtrl.deleteFood)
 
  module.exports = api 