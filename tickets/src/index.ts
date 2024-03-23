import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import cookieSession from "cookie-session"; 
import {errorHandler,NotFoundError} from "@ayush-tickets/common";


const app = express();

app.set('trust proxy',true);
app.use(express.json());
app.use(cookieSession({
    signed:false,
    secure:true
}))

app.all('*',async()=>{
    throw new NotFoundError();
})

app.use(errorHandler);

const start = async()=>{

    if(!process.env.JWT_KEY){
        throw new Error("JWT_KEY must be defined");
    }

    if(!process.env.MONGO_URI){
        throw new Error("MONGO_URI must be defined");
    }
    
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    }catch(err){
        console.error(err);
    }
    app.listen(3000,()=>{
        console.log("Listening on port 3000!");
    });
}

start();