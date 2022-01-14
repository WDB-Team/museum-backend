require('dotenv').config();

module.exports = {
    api: {
        dev: process.env.NODE_ENV !== 'production',
        port: process.env.PORT || 3000,
        cors: process.env.CORS || '*',
        useMocks: process.env.USE_MOCKS || true,
    },
    database: {
        dbUser: process.env.DB_USER || '',
        dbPassword: process.env.DB_PASSWORD || '',
        dbHost: process.env.DB_HOST || '127.0.0.1',
        dbName: process.env.DB_NAME || '',
        isLocalDB: process.env.IS_LOCAL_DB || true,
    }
}