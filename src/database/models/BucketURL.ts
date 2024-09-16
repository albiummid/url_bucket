import mongoose, { Schema } from "mongoose";

const modelName = "BucketURL";

const schema = {
    bucketId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"Bucket"
    },
    tags:[{
        type:mongoose.Schema.ObjectId,
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


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))