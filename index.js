require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json("Hello EIEI!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
