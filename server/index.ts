import express from "express";
const app = express();
import mongoose from "mongoose";
const cors = require("cors");
import adminRoutes from "./routes/admins";
require('dotenv').config(); 

const url=process.env.mongourl

app.use(express.json());
app.use(cors());

app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("ok");
});

// Connect to MongoDB
mongoose.connect(url)
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
