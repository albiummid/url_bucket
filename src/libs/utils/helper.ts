export const everyRequired = async (dataObject:Record<string,unknown>)=>{
    const errs:string[] = [];
    Object.entries(dataObject).forEach(([key,value])=>{
        if(!value){
            errs.push(key)
        }
    })
    if(errs.length){
        throw new Error(errs.join(',')+` ${errs.length>1?'are':'is'} required !`)
    }
}