const express = require('express')
const router = express.Router();
const Post = require('../models/Post')


router.get('/', (req, res) => {
    res.status(200)
    console.log(req.session)
    res.render('site/index')
})

router.get('/about', (req, res) => {
    res.status(200)
    res.render('site/about')
})

router.get('/blog', (req, res) => {
    res.status(200)
    Post.find({}).lean().then(posts => {
        res.render('site/blog',{posts:posts})
    })
})

router.get('/contact', (req, res) => {
    res.status(200)
    res.render('site/contact')
})


module.exports = router