const express = require('express');
const app = express();
// Use the dynamic port provided by the hosting environment
const port = process.env.PORT || 1880;

app.use(express.json());

// Endpoint to turn on the light
app.get('/lighton', (req, res) => {
  console.log('Light ON command received');
  res.send('Light turned on');
});

// Endpoint to turn off the light
app.get('/lightoff', (req, res) => {
  console.log('Light OFF command received');
  res.send('Light turned off');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
