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

const locationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seats: [seatSchema],
    lat: {
        type: String
    },
    lng: {
        type: String,

    },

});

export const Location = mongoose.model('Location', locationSchema);


