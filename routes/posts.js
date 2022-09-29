const express = require('express')
const router = express.Router();
const Post = require('../models/Post')
const path = require('path')

//POST PROCESS -> Add Blog Post
router.post('/add', (req, res) => {
  res.status(200)
  Post.create(req.body)
  let postImage = req.files.post_image;
  postImage.mv(path.resolve(__dirname, '../public/img/omur'), postImage.name)
  console.log(__dirname)
})

//GET PROCESS -> View General Blog Page
router.get('/new', (req, res) => {
    res.status(200)
    res.render('site/addpost')
})

//GET PROCESS -> View Single Blog Page
router.get("/:id", (req, res) => {
  res.status(200)
    Post.findById(req.params.id).then((post) => {
      res.render("site/post", { post: post.toJSON()});
    });
  });
  

module.exports = router