const express = require("express");
const app = express();
const port = 8001;

app.get('/', (req, res) =>
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ])
);

app.listen(port, () => {
    console.log(`User service running on http://localhost:${port}`);
});
