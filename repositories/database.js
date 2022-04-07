import sequelize from 'sequelize'

const sequelize = new sequelize(
    "postgres://nzluumpk:adOTVg857x5UJ9H_U3Kdizt-rfPZy4wp@tuffi.db.elephantsql.com/nzluumpk", {
        dialect: 'postgress',
        define: {
            timestamps: false
        }
    }
)


export default sequelize