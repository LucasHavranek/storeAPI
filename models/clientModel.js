import sequelize from 'sequelize';
import database from "../repositories/database.js";

const Client = database.define('clients', {
    clientId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    cpf: {
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
    }
}, { underscored: true })

export default Client