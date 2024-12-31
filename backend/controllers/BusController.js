
import Bus from "../models/Bus.js";
import Ticket from "../models/Ticket.js";
import { v4 as uuidv4 } from 'uuid';

export const CreateNewBus = async (req, res) => {
    try {
        const { busName, from, end, stoppage, departureTime, arrivalTime, ticketPrice, busNumber, busContactNumber, addedBy } = req.body;

        const findIfTheSameBusName = await Bus.findOne({ busName });

        if (findIfTheSameBusName) return res.status(400).json({ message: 'Bus with same name already exists' });

        const newBus = new Bus({ busName, from, end, stoppage, departureTime, arrivalTime, ticketPrice, busNumber, busContactNumber, addedBy });
        await newBus.save();
        res.status(201).json({ message: 'Bus registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding bus' });
    }
}


export const BookTicket = async (req, res) => {

    try {
        // Fetch the bus
        const { busId, userId, seatNumbers, pickupLocation, dropoffLocation, paymentMethod } = req.body;

        // Fetch the bus by ID
        const bus = await Bus.findById(busId);
        if (!bus) {
            return res.status(404).json({
                "message": "Bus not found"
            });
        }

        // Validate pickup and dropoff locations
        const pickupIndex = bus.stoppage.indexOf(pickupLocation);
        const dropoffIndex = bus.stoppage.indexOf(dropoffLocation);
        if (pickupIndex === -1 || dropoffIndex === -1) {
            return res.status(400).json({
                "message": "Invalid pickup or dropoff location"
            });
        }
        if (pickupIndex >= dropoffIndex) {
            return res.status(400).json({
                "message": "Pickup location must be before dropoff location"
            });
        }

        // Check seat availability
        for (const seat of seatNumbers) {
            if (seat < 0 || seat >= bus.seats.length) {
                return res.status(400).json({
                    "message": `Seat ${seat + 1} is out of range`
                });
            }
            if (bus.seats[seat]) {
                return res.status(400).json({
                    "message": `Seat ${seat + 1} is already booked`
                });
            }
        }

        // Mark seats as booked
        seatNumbers.forEach((seat) => {
            bus.seats[seat] = true;
        });

        // Update availableSeats
        bus.availableSeats -= seatNumbers.length;

        // Save the bus with updated seats
        await bus.save();

        // Generate a unique payment ID
        const paymentId = uuidv4();

        // Calculate the total amount
        const totalAmount = seatNumbers.length * bus.ticketPrice;

        // Create a new ticket
        const ticket = new Ticket({
            bus: busId,
            user: userId,
            seatNumbers,
            totalAmount,
            pickupLocation,
            dropoffLocation,
            paymentMethod,
            paymentId,
        });

        // Save the ticket
        await ticket.save();

        // Send a success response
        res.status(201).json({
            "message": "Ticket booked successfully!",
            ticket
        });
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }
}

export const resetAllBusSeats = async () => {
    try {
      // Find all buses
      const buses = await Bus.find();
  
      // Iterate through each bus and reset seats
      for (const bus of buses) {
        // Reset all seats to false (unbooked)
        bus.seats = Array(40).fill(false); // Assuming you have 40 seats per bus
        
        // Reset availableSeats
        bus.availableSeats = 40; // Assuming you start with 40 available seats per bus
  
        // Save the updated bus data (seats and availableSeats)
        await bus.save();
      }
  
      console.log('All bus seats have been reset successfully!');
    } catch (error) {
      console.error('Error resetting bus seats:', error);
    }
  };

