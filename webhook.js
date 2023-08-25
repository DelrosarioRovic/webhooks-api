const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON requests

app.get('/api/webhook', (req, res) => {
  // const payload = req.body; 
  console.log("hit!");
  // if (payload && payload.topic === 'products/create') {
  //   const productData = payload.data; // Product data
  //   console.log('New product created:', productData);
  // }
  // res.send('Webhook received');
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});