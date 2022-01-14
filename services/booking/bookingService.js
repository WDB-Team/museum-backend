const { bookingMock } = require('../../utils/mocks/bookingMock.js');
const bookingStorage = require('./bookingsStorage.js');
const config = require('../../configs/config.js');

class BookingService {
    constructor(){
    }

    async getBookings(filter){
        let bookings = null;
        console.log(filter)
        if(!filter) {
            if(config.api.useMocks == true) {
                bookings = await Promise.resolve(bookingMock);
            } else {
                try {
                    bookings = await bookingStorage.getBookings();
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            if(config.api.useMocks == true) {
                bookings = await Promise.resolve(bookingMock[filter.id]);
            } else {
                try {
                    bookings = await bookingStorage.getBookings(filter);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        return bookings;
    }

    async addBooking(body) {
        return new Promise(async (resolve, reject) => {
            if (!body) {
                reject({
                    reason:
                      "El cuerpo de la peticion es nulo"
                  });
                return false;
           }
           let transaction;
           try {
               transaction = await bookingStorage.addBooking(body);
               if (transaction.successfully_transaction) {
                   resolve(transaction.bookingId);
               }
           } catch (error) {
               console.error(error);
           }
           return false;
        })
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