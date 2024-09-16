import bucketItem, { IBucketItemDocument } from "../models/BucketItem";
import Vault from "../models/Vault";

export const getBucketItemById = async(id:string)=>{
    return await bucketItem.findById(id);
}

export const createBucketItem = async(data:IBucketItemDocument)=>{
    return await bucketItem.create(data);
}
export const updateBucketItem = async(id:string,data:Partial<IBucketItemDocument>)=>{
    const current = await getBucketItemById(id);
    const update =  await bucketItem.findByIdAndUpdate(current?._id,data,{new:true,runValidators:true});
    await Vault.create({
        model:"BucketItem",
        content:current,
        contentId:current?._id,
        status:"Updated",
        version:current?.__v
    });
    return update
}
export const deleteBucketItem = async(id:string)=>{
    const current = await getBucketItemById(id);
    const remove =  await bucketItem.findByIdAndDelete(current?._id);
    await Vault.create({
        model:"BucketItem",
        content:current,
        contentId:current?._id,
        status:"Deleted",
        version:current?.__v
    });
    return !!remove
}

