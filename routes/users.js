const express = require('express');
const User = require('../models/User');
const router = express.Router();

//POST PROCESS -> Add Blog Post
router.post('/register', (req, res) => {
  res.status(200)
  User.create(req.body, (err,user) => {
    res.redirect('/')
  })
})

//POST PROCESS -> Add Blog Post
router.get('/register', (req, res) => {
    res.status(200)
    res.render('site/register')
  })

router.get('/login', (req, res) => {
    res.status(200)
    res.render('site/login')
})

router.post('/login', (req, res) => {
  res.status(200)
const {email,password} = req.body
User.findOne({email}, (err,user) => {
  if(user)
  {
    if(user.password == password) {
      //SESSION START
      req.session.userId = user._id
      res.redirect('/')
    }
    else {
      res.redirect('/users/login')
    }
  }
  else {
    res.redirect('/users/register')
  }
})
})

module.exports = router