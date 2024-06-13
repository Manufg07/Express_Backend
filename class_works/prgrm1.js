const express = require('express');
const app = express();


function log(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); 
}

app.use(log);


app.get('/', (req, res) => {
    res.send('user order');
});




const port = 3000;
app.listen(port, () => {
    console.log(`Server is running `);
});
