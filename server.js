const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('API is alive!'));
app.listen(process.env.PORT || 5000);