import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);


export const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
    Acc_Id:{type:String,required:true},
    CreatedDate:{type:String,require:true},
    NoClicks:{type:Number}
});