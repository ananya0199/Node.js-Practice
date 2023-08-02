import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('test_db', 'postgres', 'newpassword', {
    host: 'localhost',
    dialect: 'postgres'
});
