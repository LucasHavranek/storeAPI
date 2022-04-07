import sequelize from 'sequelize';
import database from "../repositories/database.js";
import supplier from './supplierModel.js';

const product = database.define('products', {
    productId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: sequelize.DOUBLE,
        allowNull: false,
    },
    stock: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
}, { undescored: true })

product.belongsTo(supplier, { foreignKey: 'supplierId' })

export default product