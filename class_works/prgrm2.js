const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON bodies

// Middleware to validate user input using arrow function
const validateUserInput = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  next(); // Pass control to the next middleware
};

// Middleware to process registration using arrow function
const processRegistration = (req, res, next) => {
  const { email, password } = req.body;

  // Simulate saving the user to the database
  const newUser = { id: Date.now(), email, password };

  // In a real application, you would interact with your database here
  console.log('User registered:', newUser);

  // Respond with success
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Route to handle user registration with chained middleware
app.post('/register', validateUserInput, processRegistration);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
