const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingShema = new Schema({
    /*
    title: { type:String , required:true },
    description: { type:String , required:true },
    creatorId: { type:Schema.Types.ObjectId, ref:'User', required:true },
    date: { type: Date, default: Date.now },
    state: { type:String, default:'ToAssing'},
    priority: { type:String, default:'None'},
    revisorId: { type:Schema.Types.ObjectId, ref:'User' },
    followers: { type:[Schema.Types.ObjectId], ref:'User'}
*/
});

const bookingModel = mongoose.model('Booking',BookingShema);

module.exports = bookingModel;