const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/webhook', (req, res) => {
  const payload = req.body; // Received webhook data
  console.log('Webhook Payload:', payload); // Log the payload
  res.send('Webhook received');
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
