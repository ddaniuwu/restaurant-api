'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodSchema = Schema({
    name: String,
    picture:String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['Postres', 'Bebidas', 'Platillos'] },
    description: String
})

module.exports = mongoose.model('Food', FoodSchema )