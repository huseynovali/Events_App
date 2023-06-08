import mongoose from "mongoose";
const locationSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

export const Location = mongoose.model('Location', locationSchema);


