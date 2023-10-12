const express = require("express");
const jwt = require("jsonwebtoken");
const {authenticateJwt,secretKey}=require("../middleware/mw")
const mongoose = require("mongoose");
const { User, Admin, Product } = require("../db/db");
const router= express.Router();






module.exports = router;