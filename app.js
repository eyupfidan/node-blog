const express = require('express')
const app = express()
const { engine } = require('express-handlebars');
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');
const main = require('./routes/main')
const post = require('./routes/posts')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/nodeblog_db'); //Connection MongoDB

app.use(express.static('public')) // Static files default path

app.engine('handlebars', engine()); // Enable handlebars
app.set('view engine', 'handlebars'); // Enable handlebars engine
app.set('views', './views'); // Handlebars path

app.use('/', main) // Routes main
app.use('/posts',post)


app.listen(port, hostname, () => {
    console.log(`Server is Running http://${hostname}:${port}/`)
})