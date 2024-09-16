import mongoose, { Schema } from "mongoose";
import { Timestamp } from "../db";

const modelName = "BucketItem";

export type IBucketItemDocument = Timestamp & {
    bucketId:mongoose.Types.ObjectId;
    tags:mongoose.Types.ObjectId[];
    url:string;
    title:string;
    description?:string;
}

const schema = {
    bucketId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"Bucket"
    },
    tags:[{
        type:mongoose.Types.ObjectId,
        ref:"Tag",
        required:true
    }],
    url:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:''
    }
};


export default mongoose.models[modelName] as mongoose.Model<IBucketItemDocument>?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))