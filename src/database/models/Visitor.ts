import mongoose, { Schema } from "mongoose";

const modelName = "Visitor";

const schema = {
    browserInfo:{
        type:Object,
        required:true,
    },
    activity:{
        type:Object,
        default:null
    },
};


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))