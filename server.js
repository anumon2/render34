const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 1880;

const esp8266_ip = '192.168.1.3'; // replace with your ESP8266 local IP

app.use(express.json());

app.get('/lighton', async (req, res) => {
  try {
    await axios.get(`${esp8266_ip}/lighton`);
    res.send('Light turned on');
  } catch (error) {
    res.status(500).send('Failed to turn on light');
  }
});

app.get('/lightoff', async (req, res) => {
  try {
    await axios.get(`${esp8266_ip}/lightoff`);
    res.send('Light turned off');
  } catch (error) {
    res.status(500).send('Failed to turn off light');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
