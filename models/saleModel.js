import sequelize from 'sequelize';
import database from "../repositories/database.js";
import client from './clientModel.js';
import product from './productModel.js';

const Sale = database.define('sales', {
    saleId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: sequelize.DOUBLE,
        allowNull: false,
    },
    date: {
        type: sequelize.DATE,
        allowNull: false,
    },
}, { underscored: true })

Sale.belongsTo(client, { foreignKey: 'clientId' })
Sale.belongsTo(product, { foreignKey: 'productId' })

export default Sale