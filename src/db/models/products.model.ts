import { DataTypes, Model } from "sequelize";
import { sequelize } from "../seqCon";

class Product extends Model { }

Product.init(
    {
       
        productName: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        basePrice: {
            type: DataTypes.INTEGER
        },
        currentPrice:{
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
        },
        bidderId:{
            type:DataTypes.INTEGER
        },
        categoryId: {
            type: DataTypes.INTEGER
        },
        addressId: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        tableName: 'Product'
    });
export default Product