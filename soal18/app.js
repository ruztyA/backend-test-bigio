require("dotenv").config();
const express = require("express");
const logger = require("morgan");

const server = express();
const port = process.env.PORT || 3000;
require("./database/config")();

const registrationRoute = require('./routes/userRoute');
const inputRoute = require("./routes/inputDataRoute");
const nilaiRoute = require("./routes/nilaiSiswaRoute")

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.send("Data Nilai Siswa");
});
  
server.use('/api', registrationRoute);
server.use('/api', inputRoute);
server.use('/api', nilaiRoute);

server.all("*", (req, res) => {
  res.status(404).json({
    statusText: "Not Found",
    message: "You Have Trying Reaching A Route That Doesn't Exist",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
