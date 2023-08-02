import { DataTypes, Model } from "sequelize";
import { sequelize } from "../seqCon";

class Category  extends Model{ }

Category.init(
    {
        categoryId:{
            type:DataTypes.INTEGER
        },
        categoryName:{
            type:DataTypes.STRING
        }
    
    },
    {
        sequelize,
        tableName: 'Category'
    });
export default Category