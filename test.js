const mongoose = require('mongoose');

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db_test');

Post.create({
    title: "My first post title",
    content : 'Post content lorem ipsum lodor sit amet'
}, (error,post) => {
console.log(error,post)
})