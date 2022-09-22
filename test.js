const mongoose = require('mongoose');

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db_test');
/*
Post.find({
    title:'My Second post title'
}, (error,post) => {
    console.log(error,post)
})
*/
/*
Post.find({
}, (error,post) => {
    console.log(error,post)
})
*/

/*
Post.create({
    title: "My Second post title",
    content : 'Post content lorem ipsum lodor sit amet'
}, (error,post) => {
console.log(error,post)
})*/
/*
Post.findById('632c435af0262c0969a73d03',(error,post) => {
    console.log(error,post)
})
*/
/*
Post.findByIdAndUpdate('632c435af0262c0969a73d03',{
    title:"Lorem ipsum lodor",
    content:'Hello updated text'
},(error,post) => {
    console.log(error,post)
})
*/
/*
Post.findByIdAndRemove('632c435af0262c0969a73d03',(error,post) => {
    console.log(error,post)
})
*/