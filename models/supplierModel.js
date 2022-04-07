import sequelize from 'sequelize';
import database from "../repositories/database.js";

const supplier = database.define('suppliers', {
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
}, { undescored: true })

export default supplier