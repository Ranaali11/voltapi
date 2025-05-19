const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load your OpenAPI specification
const apiSpecPath = path.join(__dirname, 'doc.json');
const swaggerDocument = JSON.parse(fs.readFileSync(apiSpecPath, 'utf8'));

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Mock API endpoints based on your OpenAPI spec
app.post('/api/scooter/start', (req, res) => {
  if (!req.body.imei) {
    return res.status(400).json({ error: 'IMEI is required' });
  }
  res.json({ status: 'Scooter unlocked', imei: req.body.imei });
});

app.post('/api/scooter/stop', (req, res) => {
  res.json({ status: 'Scooter locked' });
});

// Add other endpoints similarly...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs`);
});