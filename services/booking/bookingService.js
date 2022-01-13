const { bookingMock } = require('../../utils/mocks/bookingMock.js');
const bookingStorage = require('./bookingsStorage.js');

class BookingService {
    constructor(){
    }

    async getBookings(filter){
        let bookings = null;
        console.log(filter)
        if(!filter.id){
            bookings = await Promise.resolve(bookingMock);
        } else {
            bookings = await Promise.resolve(bookingMock[filter.id]);
        }

        return bookings;
    }

    async addBooking(body){
        return new Promise((resolve, reject) => {
            if (!body) {
                reject('Cuerpo nulo');
                return false;
            }
            console.log(body);
            //bugStorage.addBug(body);
            resolve(body)
        });
    }

    async removeBooking(params){
        if(params.id){
            //Buscar y actualizar
        } else {
            //Lanzar error
        }
    }
}

module.exports = BookingService;