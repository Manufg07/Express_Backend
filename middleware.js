const express = require('express')

const app = express()

const loged = (req,res,next) => {
    console.log("Successfully logged in");
    next()
}

const log = (req,res,next) => {
    console.log("Its a success")
    next()
}

app.use(loged)

app.get('/', (req,res) => {
    res.send('Hello World')
   
})

app.use(log)
app.get('/hi', (req,res) =>{
    res.send('middleware')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});