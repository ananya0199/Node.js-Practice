import { DataTypes, Model } from "sequelize";
import { sequelize } from "../seqCon";

class Address  extends Model{ }

Address.init(
    {
        addressId:{
            type:DataTypes.INTEGER
        },

        houseNo:{
            type:DataTypes.STRING
        },
        streetName:{
            type:DataTypes.STRING
        },
        area:{
            type:DataTypes.STRING
        },
        landmark:{
            type:DataTypes.STRING
        },
        city:{
            type:DataTypes.STRING
        },
        zipCode:{
            type:DataTypes.INTEGER
        },
        state:{
            type:DataTypes.STRING
        },
        addressType:{
            type:DataTypes.STRING
        },
        userId:{
            type:DataTypes.INTEGER
        }
    },
    {
        sequelize,
        tableName: 'Address'
    });
export default Address