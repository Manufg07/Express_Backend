const express = require('express');
const app = express();
app.use(express.json());


app.get('/users/:id', (req, res) => {
    const userId =req.params.id;
    res.send(`welcome user ,${userId}`)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });