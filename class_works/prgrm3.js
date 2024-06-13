const express = require('express');
const app = express();
app.use(express.json());

app.post('/review', (req, res) => {
    const { book, review } = req.body;
    res.status(200).json({ message: 'Review submitted', review: { book, review } });
});


app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });