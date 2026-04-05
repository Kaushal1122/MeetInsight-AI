const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("Backend Running with DB");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});