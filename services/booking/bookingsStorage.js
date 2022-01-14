const bookingModel = require('./bookingModel.js');


function addBooking(body) {
    return new Promise((resolve, reject) => {
        const bookingDocument = new bookingModel(body);
        bookingDocument.save((error, document) =>{
            if (error) {
                //%-> Aqui siempre se debe poner esto para evitar que de el error del overwrite model.
                bookingModel.db.deleteModel(bookingModel.modelName);
              reject({
                reason:
                  "Ha ocurrido un error a la hora de guardar la reserva...!" +
                  error,
              });
            } else {
                console.log("La reserva guardada fue:", document);
              //%-> Aqui siempre se debe poner esto para evitar que de el error del overwrite model.
              bookingModel.db.deleteModel(bookingModel.modelName);
              resolve({ successfully_transaction: true, bookingId: document._id });
            }
        });
    })
}

function getBookings(filterBooking) {
    return new Promise(async (resolve, reject) => {
        let filter = {};
        if (filterBooking != null) {
            filter = filterBooking;
        }
        const bookings = await bookingModel.find(filter);
        resolve(bookings);
    })
}

function updateBooking(id, body) {
    //Ah implementar
}

function deleteBooking(id, body) {
    //Ah implementar
}

module.exports = {
    addBooking,
    getBookings,
    updateBooking,
    deleteBooking
}