const express = require('express');
const app = express();
const router = express.Router();

const date = (req,res,next) => {
    console.log("Time:",Date.now())
    next()
}

router.use('/date', date)

router.get('/date', date, (req,res) => {
    res.send('Time displayed');
})

app.get('/', (req,res) => {
    res.send('Move to the date router')
})

app.use('/', router)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });