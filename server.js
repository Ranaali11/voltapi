const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // ← Critical for POST JSON bodies

// Load OpenAPI spec (use absolute path)
let swaggerDocument;
try {
  const apiSpecPath = path.join(__dirname, 'doc.json');
  swaggerDocument = JSON.parse(fs.readFileSync(apiSpecPath, 'utf8'));
} catch (err) {
  console.error("Failed to load OpenAPI spec:", err);
  swaggerDocument = {}; // Fallback
}

// Routes
app.get('/', (req, res) => res.send('API is alive!'));

// Scooter endpoints
app.post('/api/scooter/start', (req, res) => {
  if (!req.body.imei) { // ← Requires bodyParser.json()
    return res.status(400).json({ error: 'IMEI is required' });
  }
  res.json({ status: 'Scooter unlocked', imei: req.body.imei });
});

// Serve Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Docs: http://localhost:${PORT}/docs`);
});