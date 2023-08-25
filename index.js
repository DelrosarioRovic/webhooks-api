const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  // const payload = req.body;
  console.log("payload");
  // if (payload && payload.topic === 'products/create') {
  //   const productData = payload.data; // Product data
  //   console.log('New product created:', productData);
  // }
  return res.status(200).json({message: "Success"});
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
