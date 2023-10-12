const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoutes = require("./routes/admins");
const userRoutes=require("./routes/users");
require('dotenv').config(); 

const url=process.env.mongourl

app.use(express.json());
app.use(cors());

app.use("/admin", adminRoutes);
app.use("/",userRoutes);

app.get("/", (req, res) => {
  res.send("ok");
});

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const Port = 3000;

app.listen(Port, () => {
  console.log("Server started on port " + Port);
});
