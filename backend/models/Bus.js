import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
    busName: { type: String, required: true },
    busImages:{
        type: [String],
        default: ["https://www.india.com/wp-content/uploads/2023/01/BMTC.png"],
        required: true
    },
    from: { type: String, required: true },
    end: { type: String, required: true },
    stoppage: {
        type: [String],
        default: [],
        required: true
    },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    seats: { type: Array, default: Array(40).fill(false) }, // False: unbooked, True: booked
    ticketPrice: { type: Number, required: true },
    availableSeats: { type: Number, default: 40 },
    busNumber: { type: String, required: true },
    busContactNumber: { type: String, required: true },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    },
}, { timestamps: true });

const Bus = mongoose.model('Bus', busSchema);

export default Bus;
