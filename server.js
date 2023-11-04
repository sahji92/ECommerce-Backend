const express=require('express')
const cors=require('cors')
const mongoConnection=require('./connection');
const routes = require('./routes/index')
require('dotenv').config()

const app=express();
app.use(cors())
mongoConnection(process.env.URI)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use(routes)

app.listen(process.env.PORT)