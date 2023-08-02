
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../seqCon";

console.log('----------->', sequelize);

class User extends Model { }

User.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    firstName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    profileImg: {
        type: DataTypes.BLOB
    },
    mobileNumber: {
        type: DataTypes.INTEGER
    },
    gender: {
        type: DataTypes.STRING
    },
    dateOfBirth: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    tableName: 'Users'
});
export default User;

let addfunction =(a:any,b:any)=>{
    console.log(a*b);
    
}