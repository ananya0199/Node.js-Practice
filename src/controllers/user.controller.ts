import { Request, Response } from "express";
import Address from "../db/models/address.model";
import User from "../db/models/user.model";

import fs from "fs";


export const EditUserDetails = async(req:Request, res:Response)=>{
    try{
        let {tokenData} = req.body;
        await User.update(
            req.body,
            {
                where:{user_id:tokenData.user_id}
            }
        )
            res.send("SUCCESSFULLY data editted")
    }catch(e){
        res.send(e)
    }
}

// export const ProductImage = async(req:Request, res:Response)=>{

    // const {id} = req.params;

    // if(req.file){
    //     try{
    //         const fileData = fs.readFileSync(req.file.path);
            
    //         let productImage = await ProductImageModel.create({
    //             image_data:fileData,
    //             product_id: id,
    //         })

    //         res.send(productImage)
               
    //     }catch(e){

    //         res.send(e)
    //     }
    // }
// }