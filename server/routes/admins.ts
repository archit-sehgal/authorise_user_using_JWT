import express from "express";
import jwt from "jsonwebtoken";
import { authenticateJwt, secretKey } from "../middleware/mw";
import mongoose from "mongoose";
import { User, Admin, Product } from "../db/db";
const router = express.Router();

router.post("/signup", async (req, res) => {
    const { adminId, AdminPasw } = req.body;
    const existingAdmin = await Admin.findOne({ adminId: adminId })
    if (!existingAdmin) {
        const newAdmin = new Admin({
            adminId: adminId,
            password: AdminPasw
        })
        await newAdmin.save()
        const token = jwt.sign({ adminId, AdminPasw }, secretKey);
        res.json({ message: "Admin created successfully", token })
    } else {
        res.status(404).send("Admin already exist")
    }
})
router.post("/login",authenticateJwt,async(req,res)=>{
    const{adminId,AdminPasw}=req.body;
    const existingAdmin=await Admin.findOne({adminId:adminId})
    if(existingAdmin){
        const token=jwt.sign({adminId,AdminPasw},secretKey);
        res.json({message:"Admin logged in",token:token})
    }
    else{
        res.json("Admin Doesn't exist")
    }
})


export default router;