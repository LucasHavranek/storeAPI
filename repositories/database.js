import pg from 'pg'

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://nzluumpk:adOTVg857x5UJ9H_U3Kdizt-rfPZy4wp@tuffi.db.elephantsql.com/nzluumpk"
    })
    global.connection = pool
    return pool.connect()
}

export {
    connect
}