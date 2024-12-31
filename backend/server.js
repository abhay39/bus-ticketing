import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import dbConnect from './config/db.js'
import busRoute from './routes/busRoute.js';
import cron from 'node-cron';
import { resetAllBusSeats } from './controllers/BusController.js';


dotenv.config();
const PORT=process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

// Route to get all books
app.get("/",async(req,res)=>{
    try {
        res.status(200).json({
            message: 'Welcome to the Bus ticketing Booking API',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching books' });
    }
})


//connecting thr db here
dbConnect()

// route for user 
app.use("/api/user",userRoute)

// route for bus 
app.use("/api/bus",busRoute)

cron.schedule('*/30 * * * *',()=>{
    console.log('Running task to reset all bus seats every 30 mins...');
    resetAllBusSeats()
});

// cron.schedule('0 0 * * *',()=>{
//     console.log('Running task to reset all bus seats every 24 hours...');
//     resetAllBusSeats()
// })
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})