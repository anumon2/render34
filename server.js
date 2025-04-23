const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/lighton', (req, res) => {
  console.log('Light ON command received');
  res.send('Light turned on');
});

app.get('/lightoff', (req, res) => {
  console.log('Light OFF command received');
  res.send('Light turned off');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




