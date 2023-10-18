import express from "express";
import mongoose from "mongoose";
const cors = require("cors");
import adminRoutes from "./routes/admins";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const mongoURL = process.env.mongourl;

app.use(express.json());
app.use(cors());

app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("OK");
});

if (!mongoURL) {
  console.error("MongoDB URL not defined in .env file.");
  process.exit(1);
}
// Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
