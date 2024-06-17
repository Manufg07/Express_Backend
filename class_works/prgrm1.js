const express = require('express');
const app = express();


function log(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); 
}

app.use(log);


app.get('/orders', (req, res) => {
    res.send('Orderes by user');
});
app.get('/products', (req, res) => {
    res.send('List of products');
  });




const port = 3000;
app.listen(port, () => {
    console.log(`Server is running `);
});
