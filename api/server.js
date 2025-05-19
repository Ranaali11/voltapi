const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/scooter/stop', (req, res) => {
  // Your logic here
  res.status(200).json({ message: 'Scooter stopped' });
});

module.exports = app;
