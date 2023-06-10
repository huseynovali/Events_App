import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                eventId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Event",
                    required: true,
                },
                seatId: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
