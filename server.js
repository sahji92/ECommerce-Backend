const express=require('express')
const cors=require('cors')
const mongoConnection=require('./connection');
const routes = require('./routes/index');
const { initializePassport } = require('./passport');
const passport=require('passport')
require('dotenv').config()


const app=express();
app.use(cors())
mongoConnection(process.env.URI)
//12-13--> defining stretegy of passport then initialize it in our App.
//we are configuring(defining stretegy, etcc) in passport .js so we dont have to write
//tedious code here in server.js

app.use('/files',express.static('uploads'))

initializePassport(passport);
app.use(passport.initialize())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use(routes)

app.listen(process.env.PORT)