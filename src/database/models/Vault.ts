import mongoose, { Schema } from "mongoose";
import { Timestamp } from "../db";

const modelName = "Vault";
export interface IVault {
    model:string;
    contentId:mongoose.Types.ObjectId;
    content:object;
    status:'Deleted'|'Updated';
    version:number;
}

export type IVaultDocument = IVault & Timestamp;

const schema = {
    model:{
        type:String,
        required:true
    },
    contentId:{
        type:mongoose.Types.ObjectId,
        required:true,
    },
    content:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        enums:["Deleted","Updated"],
        required:true
    },
    version:{
        type:Number,
        required:true
    }
};


export default  mongoose.models[modelName] as mongoose.Model<IVaultDocument> 
||
 mongoose.model(modelName,new Schema(schema,{timestamps:true}));


