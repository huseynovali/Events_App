import mongoose from "mongoose";



const seatSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reserved: {
        type: Boolean,
        default: false
    }
});

export const Seats = mongoose.model('Seats', seatSchema);
