import sequelize from 'sequelize';
import database from "../repositories/database.js";

const Supplier = database.define('suppliers', {
    supplierId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    cnpj: {
        type: sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize.STRING,
        allowNull: false,
    },
}, { underscored: true })

export default Supplier