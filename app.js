// this is a js comment
const express = require('express')
const app = express()

app.get('/' , (req,res) => {
           res.send({"status" : "ok"})
})

app.listen(3000 , ()=>{
   console.log("server running on the port 3000" )
})
