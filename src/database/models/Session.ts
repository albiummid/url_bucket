import mongoose, { Schema } from "mongoose";

const modelName = "Session";

const schema = {
    browser_info:{
        type:Object,
        required:true
    },
};


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))