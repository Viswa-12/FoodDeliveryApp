import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const mongoUrl=process.env.MONGOURL

export const connectDB=async()=>{
    mongoose.connect(mongoUrl).then(()=>{console.log("connected to database!")}).catch(()=>{console.log("Error occured while connecting to database!")})
}