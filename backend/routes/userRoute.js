import express from 'express';

import { CreateNewAccount, getAllTicketOfCurrentUser, getInfoOfCurrentUser, loginUser } from '../controllers/UserController.js';

const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
    try {
        res.status(200).json({
            message: 'Welcome to the User API',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
})

userRoute.post("/register-new-account", CreateNewAccount)

userRoute.post('/login', loginUser)
userRoute.get('/get-details-of-current-user/:userId', getInfoOfCurrentUser)
userRoute.get('/get-all-user-booking/:userId', getAllTicketOfCurrentUser)


export default userRoute;