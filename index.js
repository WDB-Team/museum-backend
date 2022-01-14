const express = require('express');

const config = require('./configs/');
const mongooseDBConnect = require('./libs/databases/mongoDB.js')

const bookingsApi = require('./routes/booking/bookings.js');

//Conexion con la base de datos
//mongooseDBConnect();

const app = express();
app.use(express.json());

//Router
bookingsApi(app);

app.listen(config.api.port, () => {
    console.log(`Api escuchando en, http://localhost:${config.api.port}`);
});