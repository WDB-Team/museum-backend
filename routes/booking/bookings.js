const express = require('express');

const response = require('../../networks/response.js');
const BookingService = require('../../services/booking/bookingService');

function bookingsApi(app) {
    const router = express.Router();
    app.use('/', router);

    const bookingService = new BookingService();

    router.get('/bookings',async function(req, res, next) {
        try {
            const filter = req.query || null;
            const data = await bookingService.getBookings(filter);
            console.log('Enviando informacion de las bookings');
            response.success(req, res, data, 200, true);
        } catch (error) {
            response.error(req, res, error.message, 500);
        }
    });

    router.post('/bookings', async function(req, res, next) {
        try {
            const data = await bookingService.addBooking(req.body);
            console.log('Agregado bug');
            response.success(req, res, data, 200, true);
        } catch (error) {
            console.log('error');
            response.error(req, res, error.message, 500);
            next();
        }
    });

    router.delete('bookings/:id'), async function(req, res, next) {
        try {
            console.log('Booking eliminada')
            //const data = await bookingService.removeBooking(req.params);
            response.success(req, res, req.body, 200, true);
        } catch (error) {
            console.log('error');
            response.error(req, res, err.message, 500);
            next();
        }
    }
}



module.exports = bookingsApi;