const express = require('express')
const app = express()
const {
    engine
} = require('express-handlebars');
const port = 3000
const hostname = '127.0.0.1'
app.use(express.static('public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.status(200)
    res.render('site/index')
})

app.get('/about', (req, res) => {
    res.status(200)
    res.render('site/about')
})


app.get('/blog', (req, res) => {
    res.status(200)
    res.render('site/about')
})

app.get('/contact', (req, res) => {
    res.status(200)
    res.render('site/contact')
})
app.get('/login', (req, res) => {
    res.status(200)
    res.render('site/login')
})
app.get('/register', (req, res) => {
    res.status(200)
    res.render('site/register')
})
app.listen(port, hostname, () => {
    console.log(`Server is Running http://${hostname}:${port}/`)
})