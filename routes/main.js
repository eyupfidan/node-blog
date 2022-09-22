const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200)
    res.render('site/index')
})

router.get('/about', (req, res) => {
    res.status(200)
    res.render('site/about')
})

router.get('/blog', (req, res) => {
    res.status(200)
    res.render('site/about')
})

router.get('/contact', (req, res) => {
    res.status(200)
    res.render('site/contact')
})
router.get('/login', (req, res) => {
    res.status(200)
    res.render('site/login')
})
router.get('/register', (req, res) => {
    res.status(200)
    res.render('site/register')
})

router.get('/posts/new', (req, res) => {
    res.status(200)
    res.render('site/addpost')
})
router.post('/posts/test', (req, res) => {
    res.status(200)
    res.send('OK!')
})

module.exports = router