const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const { engine } = require('express-handlebars');
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');
const main = require('./routes/main')
const post = require('./routes/posts')
const users = require('./routes/users')

const bodyParser = require('body-parser')
const generateDate = require('./helpers/generateDate').generateDate

app.use(fileUpload()); //Use fileupload package s


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Use Body Parser


mongoose.connect('mongodb+srv://eyupfidan:F8JITjopoQOiqW7G@cluster0.okkhldo.mongodb.net/?retryWrites=true&w=majority'); //Connection MongoDB (Cloud)

app.use(express.static('public')) // Static files default path

app.engine('handlebars', engine({helpers:{generateDate:generateDate}})); // Enable handlebars
app.set('view engine', 'handlebars'); // Enable handlebars engine
app.set('views', './views'); // Handlebars path

app.use('/', main) // Routes main (Menu Page Home - About Contact etc.)
app.use('/posts',post) // Routes Post (Add View Update)
app.use('/users',users) // Routes Post (Add View Update)



app.listen(port, hostname, () => {
    console.log(`Server is Running http://${hostname}:${port}/`)
})