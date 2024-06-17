const express = require('express');
const app = express();
app.use(express.json());

let reviews=[]

app.post('/review', (req, res) => {
  const { book, review } = req.body;
  const Nreview = { book, review };
  reviews.push(Nreview ); 
  res.status(200).json(Nreview) ;
});

app.get('/review', (req, res) => {
  res.status(200).json(reviews);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
