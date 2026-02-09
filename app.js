const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello! This is a GET endpoint',
    timestamp: new Date().toISOString()
  });
});

// POST endpoint
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.json({
    message: 'Data received successfully via POST',
    receivedData: receivedData,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`);
  console.log(`GET endpoint: http://localhost:${port}/`);
  console.log(`POST endpoint: http://localhost:${port}/data`);
});
