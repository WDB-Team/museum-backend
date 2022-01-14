const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingShema = new Schema({
    full_name: { type:String , required:true },
    email: { type:String , required:true },
    description: { type:String, ref:'User', required:true },
    date: { type: Date , required:true },
    phone_number: { type:String, default:'ToAssing'},
});

const bookingModel = mongoose.model('Booking',BookingShema);

module.exports = bookingModel;