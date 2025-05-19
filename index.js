const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/api/scooter/start", (req, res) => {
  const { imei } = req.body;
  // logic to send R0 + L0 to scooter
  res.send("Scooter unlocked");
});

// add other routes...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
