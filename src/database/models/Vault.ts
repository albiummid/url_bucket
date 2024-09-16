import mongoose, { Schema } from "mongoose";

const modelName = "Vault";

const schema = {
    model:{
        type:String,
        required:true
    },
    contentId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    content:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        enums:["Deleted","Changed"]
    },
    changedVersion:{
        type:Number,
        required:true,
    }
};


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))