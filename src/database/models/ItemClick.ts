import mongoose, { Schema } from "mongoose";
import { Timestamp } from "../db";

const modelName = "ItemClick";

const schema = {
    ItemId:{
        type:mongoose.Types.ObjectId,
        ref:"bucketItem",
        required:true
    },
    clickerInfo:{
        type:Object,
        required:true
    }
};

export type ItemClickDocument = Timestamp & {
    itemId:mongoose.Types.ObjectId;
    clickerInfo:object
}

export default mongoose.models[modelName] as mongoose.Model<ItemClickDocument>?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))