require('dotenv').config()
import express from 'express';
import cors from 'cors';
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(,{}, (err) =>{
    if {!err} return console.log('connected to DB')
    console.log{err}
})

const PORT = process.env.PORT ||3500

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

app.use('/auth', require('./Controller/Routes/auth'))

app.listen(PORT,{}=>{
    console.log{'listening on '+PORT}


})