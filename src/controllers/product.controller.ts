import { Request, Response } from "express";
import Product from "../db/models/products.model"
import { Op } from "sequelize";

export const AddProduct = async (req: Request, res: Response) => {

    try {

        const { tokenData } = req.body;
        const payload = {
            userId: tokenData.user_id,
            productName: req.body.productName,
            description: req.body.description,
            basePrice: req.body.basePrice,
            categoryId: req.body.categoryId,
            addressId: req.body.addressId,
            currentPrice:req.body.currentPrice
        }
        let productDetails = await Product.create(payload)

        res.send(productDetails);
    } catch (e) {

        res.send(e)
    }

}

export const ViewProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        let productDetails = await Product.findOne({
            where: {
                product_id: id
            }
        })
        res.status(200).send(productDetails)
    } catch (e) {
        res.status(404).send("NOT FOUND")
    }
}


export const ProductListing = async (req: Request, res: Response) => {

    try {
        const { category, subcategory, order } = req.query;

        let querryArray = [];
        let orderArray: any = []

        if (category) {
            querryArray.push({ category_id: category })
        }

        if (subcategory) {
            querryArray.push({ subcategory_id: subcategory })
        }

        if (order) {
            orderArray.push([order])
            let productListing = await Product.findAll({
                where: {
                    [Op.and]: querryArray
                },
                order: orderArray
            })
            res.send(productListing)
        } else {
            let productListing = await Product.findAll({
                where: {
                    [Op.and]: querryArray
                },
                order: orderArray
            })

            res.send(productListing)
        }

    } catch (e) {
        res.send(e);

    }
}

export const PlaceBid = async (req: Request, res: Response) => { 
    try {

        const { bidAmount, productId, tokenData } = req.body;

        await Product.increment(
            'currentPrice',
            {
                by: bidAmount,
                where: { id: productId }
            }
        )
        await Product.update(
            {
                bidderId: tokenData.user_id
            },
            {
                where: { id: productId }
            }
        )

        res.status(200).send("UPDATION SUCCESFULL")

    } catch (e) {
        res.status(400).send(e)
    }
}



export const RemoveProduct = async(req:Request, res:Response)=>{

    try{
        let {id} = req.params;
        await Product.destroy({
            where: {product_id: id}
        })
        res.send('succesfully deleted product')

    }catch(e){
        res.send('server ereror')
    }

}