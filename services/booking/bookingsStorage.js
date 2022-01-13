const bookingModel = require('./bookingModel.js');

function addBooking(body) {
    const bug = new bookingModel(body);
    bug.save();
}

function getBookings(body, filter) {
    //Ah implementar
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