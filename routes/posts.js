const express = require('express')
const router = express.Router();
const Post = require('../models/Post')


router.get('/new', (req, res) => {
    res.status(200)
    res.render('site/addpost')
})

router.post('/add', (req, res) => {
    res.status(200)
   const addPost =  Post.create(req.body)
   if(addPost) {
    console.log('Success');
}
    res.redirect('/')
})

router.get("/:id", (req, res) => {
    Post.findById(req.params.id).then((post) => {
      res.render("site/post", { post: post.toJSON() });
    });
  });
  

module.exports = router