const jwt = require("jsonwebtoken");
export const secretKey = "superS3cr3t1";
import { Request,Response,NextFunction } from 'express';

export const authenticateJwt = (req:Request, res:Response, next:NextFunction) => {
    const authHead = req.headers.authorization;
    if (authHead) {
        const token = authHead.split(" ")[1];
        jwt.verify(token, secretKey, (err: any, user: string | string[] | undefined) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized" });
            } 
            else {
                req.headers["user"] = user;
                next();
            }
        });
    } else {
        res.status(403).json({ message: "Forbidden" });
    }
};

export default{
    authenticateJwt,
    secretKey
}