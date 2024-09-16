import mongoose, { Schema } from "mongoose";
import { Timestamp } from "../db";

const modelName = "Bucket";

export type IBucketDocument  = Timestamp & {
    name:string;
    userId:mongoose.Types.ObjectId;
    color:string;
    urlCount:number;
}

const schema = {
    name:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"User"
    },
    color:{
        type:String,
        default:"violet"
    },
    urlCount:{
        type:Number,
        default:0
    }
};


export default mongoose.models[modelName] as mongoose.Model<IBucketDocument>?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))