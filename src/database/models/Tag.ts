import mongoose, { Schema } from "mongoose";
import { Timestamp } from "../db";

const modelName = "Tag";

const schema = {
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    value:{
        type:String,
        required:true
    },
    usedCont:{
        type:Number,
        default:0
    }
};

export type ITagDocument = Timestamp & {
    userId:mongoose.Types.ObjectId;
    value:string;
    usedCount:number
}

export default mongoose.models[modelName] as mongoose.Model<ITagDocument> || mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))