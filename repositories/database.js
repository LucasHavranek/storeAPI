import sequelize from 'sequelize'
const sequelizeConnection = new sequelize(
    "postgres://nzluumpk:oePqx9Si9RKyPQGt0D2a9ZOUuceEA0yX@tuffi.db.elephantsql.com/nzluumpk", {
        dialect: 'postgress',
        define: {
            timestamps: false
        }
    }
)


export default sequelizeConnection