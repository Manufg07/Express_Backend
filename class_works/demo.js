const express = require('express');
const app = express();

// Middleware to log every request
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`Incoming request: ${method} ${url}`);
  next(); // Pass control to the next handler
});

// Example routes
app.get('/', (req, res) => {
  res.send('Welcome to the online store!');
});

app.get('/products', (req, res) => {
  res.send('List of products');
});

app.post('/checkout', (req, res) => {
  res.send('Checkout');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
