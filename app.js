const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.get('/' , (req,res) => {
res.status(200)
res.end("Node.Js Blog App")

})

app.listen(port,hostname, () => {
    console.log(`Server is Running http://${hostname}:${port}/`)
})
