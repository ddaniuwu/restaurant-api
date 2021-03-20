'user strict'

var express = require('express') //llamamos a Express
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var path = require('path')
var app = express()  
const api = require('./routes')
const morgan = require('morgan')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));// Servicio para usar archivos estaticos (hojas de estilo)
app.set('views', path.join(__dirname, 'views'));


app.engine('hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))


app.set('view engine', '.hbs')
app.use('/api', api)


app.get('/index',(req, res)=>{
  res.render('food')
})

app.get('/postfood', (req, res) => {
  res.render('postfood')//Render para POST
})

app.get('/verpor', (req, res) => {
  res.render('getby')//Render para POST
})



app.use(morgan('dev'));
app.use(methodOverride('_method'))


app.use('/api', api)
  
module.exports = app