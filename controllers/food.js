'use strict'

const Food = require('../models/food')
var mongoose = require('mongoose');


function getFoods(req, res){
    Food.find({}, (err, foods) => {
        if(err) return res.status(500).send({ message: ` Error: ${err}` })
        if(!foods) return res.status(404).send({message: 'No exsten los productos'})
        
          res.send(200,{ foods })
      })
}


function getFood(req , res){
    let foodId = req.params.foodId
    mongoose.Types.ObjectId.isValid(foodId);

    Food.findById(foodId, (err, food) => {
      if (err) return res.status(500).send({message: ` Error al realizar la peticion: ${err}` })
      if(!food) return res.status(404).send({ message: 'El producto no existe'})

      res.status(200).send({ food })
    })
}

function saveFood(req, res){
console.log('POST /api/food')
   console.log(req.body)
   let food = new Food()

   food.name = req.body.name
   food.picture = req.body.picture
   food.price = req.body.price
   food.category = req.body.category
   food.description = req.body.description

   food.save((err, foodStored) => {
     if(err) res.status(500).send({ message: ` Error: ${err}` })
      
     res.status(200).send({  food: foodStored })
    })

}

function updateFood(req , res){
    let foodId = req.params.foodId
    let update = req.body
  
    Food.findOneAndUpdate(foodId, update, (err , foodUpdated) => {
      if(err) res.status(500).send({message: `Error actuaizando: ${err}`})
    res.status(200).send({ food: foodUpdated })
    })
}


function deleteFood(req , res){
    let foodId = req.params.foodId
    //mongoose.Types.ObjectId.isValid(foodId);
    //ObjectId.body.req(foodId)
//window.JSON.body.req(foodId)
    Food.findById(foodId, (err, food) => {
      if(err) res.status(500).send({ message: `Error al eliminar el producto ${err}`})
      food.remove(err => {
        if (err) res.status(500).send({ message: `Error al borrar el producto ${err}`})
        res.status(200).send({
            message: 'Id eliminado eliminado',
        })
      })
    })
}

module.exports = {
    getFoods, 
    getFood, 
    updateFood,
    saveFood,
    deleteFood
}
