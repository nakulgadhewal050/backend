const express = require("express")

const app = express()

const port = 3000;

require('dotenv').config()

app.get("/", (req,res) => {
    res.send("hellow")
})

app.listen(process.env.port ,  () => {
    console.log(`${port}`)
})



