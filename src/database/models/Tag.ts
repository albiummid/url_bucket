import mongoose, { Schema } from "mongoose";

const modelName = "Tag";

const schema = {
    userId:{
        type:mongoose.Schema.ObjectId,
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


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))