const express = require('express');
const path = require('path');
// const module = require('module')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.set('view engine', 'pug')
app.set('./views', path.join(__dirname, './views'))


app.get('/new-visitor',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname + '/public/form.html'))

});

app.post("/thank-you",(req,res,next)=>{
    if(!req.body)
        throw new Error('request body cannot be empty')

    res.render("index", {
        name : req.body.name
    })
});

const server = app.listen(8080, ()=>{
    console.log(`server listening at 127.0.0.1:8080`)
})

module.exports = server;