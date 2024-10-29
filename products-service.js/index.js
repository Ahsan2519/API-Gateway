const express = require("express");
const app = express();
const port = 8002;

app.get("/", (req, res) =>
  res.json([
    { id: 1, productName: "product_1" },
    { id: 2, productName: "product_2" },
  ])
);

app.listen(port, () => {
  console.log(`User service running on http://localhost:${port}`);
});
