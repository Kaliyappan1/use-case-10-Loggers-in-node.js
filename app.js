const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Perform authentication logic (not implemented in this example)
  // Log authentication attempts
  logger.info(`Login attempt: username=${username}`);
  res.send('Login successful');
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
