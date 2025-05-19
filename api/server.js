const express = require('express');
const swaggerUi = require('swagger-ui-express');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const swaggerDocument = require('../doc.json');

app.get('/', (req, res) => res.redirect('/api/docs'));

app.post('/api/scooter/start', (req, res) => {
  if (!req.body.imei) {
    return res.status(400).json({ error: 'IMEI is required' });
  }
  res.json({ status: 'Scooter unlocked', imei: req.body.imei });
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
