import Address from './models/address.model';
import Category from './models/categories.model';
import Product from './models/products.model';
import { SessionModel } from './models/session.model';
import User from './models/user.model';

class Database {
    async connectToDatabase(sequelize: any) {
        try {
            await sequelize.authenticate();
            // console.log("All models synced");
            // Category.sync({ force: true });
            Product.sync({ alter: true });
            // SessionModel.sync({ force: true });
            // Address.sync({ force: true });
            // User.sync({ alter:true});
        } catch (error) {
        }
    }
}

export const myDatabase = new Database();
