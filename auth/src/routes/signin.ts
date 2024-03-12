import express, { Request, Response } from "express";
import { body} from "express-validator";
import { ValidateRequest } from "../middlewares/validateRequest";

const router=express.Router();

router.post('/api/users/signin',
[
    body('email')
        .isEmail()
        .withMessage("Email must be valid!"),
    body('password')
        .trim()
        .notEmpty()
        .withMessage("You must be supply a password!")
],
ValidateRequest,
(req:Request,res:Response)=>{
});

export {router as signinRouter};