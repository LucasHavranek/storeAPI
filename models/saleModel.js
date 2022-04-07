import sequelize from 'sequelize';
import database from "../repositories/database.js";
import client from './clientModel.js';
import product from './productModel.js';

const sale = database.define('sales', {
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
}, { undescored: true })

sale.belongsTo(client, { foreignKey: 'clientId' })
sale.belongsTo(product, { foreignKey: 'productId' })

export default sale