import mongoose, { Schema } from "mongoose";

const modelName = "Bucket";

const schema = {
    name:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
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


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))