const mongoose = require('mongoose');
const config = require('../../configs/config.js');

function connect() {
    const USER = encodeURIComponent(config.database.dbUser);
    const PASSWORD = encodeURIComponent(config.database.dbPassword);
    const DB_NAME = config.database.dbName;
    const DB_HOST = config.database.dbHost;
    const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`; 
    const localUrl = `mongodb://${DB_HOST}/${DB_NAME}`

    mongoose.connect(config.database.isLocalDB == true ? localUrl : MONGO_URI, { useNewUrlParser : true, useUnifiedTopology: true}).then(() => {
        console.log('Conexion con mongo exitosa');
    }).catch(err => {
        console.error('Error en la conexion con mongodb');
        console.error(err);
    })
}

const db = mongoose.connection;

db.on('error', (err) => {
    console.error(err);
})

db.once('open', () => {
    console.log('Conexion con mongo establecida')
})

module.exports = connect;