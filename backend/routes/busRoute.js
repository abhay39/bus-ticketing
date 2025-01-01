import express from 'express';

import { BookTicket, CreateNewBus, getCurrentBus } from '../controllers/BusController.js';
import Bus from '../models/Bus.js';

const busRoute = express.Router();

busRoute.get("/", async (req, res) => {
    try {
        const getAllBus=await Bus.find({}).populate('addedBy').select('-password');
        res.status(200).json(getAllBus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching buses' });
    }
})

busRoute.post("/register-new-bus", CreateNewBus)

busRoute.post('/book-bus-ticket', BookTicket)

busRoute.post('/:id', getCurrentBus)

export default busRoute;