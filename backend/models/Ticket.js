import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  seatNumbers: {
    type: [Number], // Array of seat indices
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
  pickupLocation:{
    type: String,
    required: true,
  },
  dropoffLocation:{
    type: String,
    required: true,
  },
  status:{
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "confirmed",
  },
  paymentMethod:{
    type: String,
    enum: ["cash", "online", "card"],
    required: true,
  },
  paymentStatus:{
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  paymentId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount:{
    type: Number,
    required: true,
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
