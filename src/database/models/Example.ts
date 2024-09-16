import mongoose, { Schema } from "mongoose";
import { Timestamp } from "../db";

const modelName = "Example";

export interface IExample {
    text:string;
}
export type IExampleDocument = IExample & Timestamp;

const schema = {
    text:{
        type:String
    }
};


export default  mongoose.models[modelName] as mongoose.Model<IExampleDocument> || mongoose.model(modelName,new Schema<IExampleDocument>(schema,{timestamps:true}));
