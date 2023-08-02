import { Request, Response } from "express";
import Address from "../db/models/address.model";


export const AddAddress = async(req:Request, res:Response)=>{
    try{
        const {tokenData, houseNo, streetName, area, landmark, city, state, zipcode, addressType } = req.body;
        let addressDetails = await Address.create({
            userId:tokenData.user_id,
            houseNo:houseNo,
            streetName:streetName,
            area:area,
            landmark:landmark,
            city:city,
            state:state,
            zipcode:zipcode,
            addressType:addressType
        })

        res.status(200).send(addressDetails);

    }catch(e){
        res.send(e);
    }
}

export const EditAddress = async(req:Request, res:Response)=>{
    let {tokenData} = req.body; 
    try{
        let update = await Address.update(
            req.body,
            {
              where:{user_id:tokenData.user_id} 
            }
          )
          res.status(200).send("succesfully updated")
    }catch(e){
        res.status(400).send(e);
    }
}