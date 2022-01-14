const { bookingMock } = require('../../utils/mocks/bookingMock.js');
const bookingStorage = require('./bookingsStorage.js');
const config = require('../../configs/config.js');

class BookingService {
    constructor(){
    }

    async getBookings(filter){
        let bookings = null;
        console.log(filter)
        if(!filter.id) {
            if(config.api.useMocks == false) {
                bookings = await Promise.resolve(bookingMock);
            } else {
                
            }
        } else {
            if(config.api.useMocks == false) {
                bookings = await Promise.resolve(bookingMock[filter.id]);
            } else {

            }
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
            //bookingStorage.addBooking(body);
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