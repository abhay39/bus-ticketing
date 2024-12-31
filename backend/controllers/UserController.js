import User from "../models/User.js";
import Ticket from "../models/Ticket.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';

export const CreateNewAccount=async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check if user exits
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // create a new user and save to the database
        const user = new User({ name, email, password });
        await user.save();

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ message: 'User registered successfully',token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching users' });
    }
}

export const loginUser=async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({message:"User logged in successfully!",token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getAllTicketOfCurrentUser=async (req, res) => {
    const { userId } = req.params;
    try {
        const getAllTicketOfUser = await Ticket.find({ user:userId });
        console.log("Get all ticket of user: ",getAllTicketOfUser)
        if(getAllTicketOfUser.length===0){
            return res.status(404).json({ message: 'No ticket found for this user' });
        }
        res.status(200).json(getAllTicketOfUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getInfoOfCurrentUser=async (req, res) => {
    const { userId } = req.params;
    try {
        const getUserId=jwt.verify(userId,process.env.JWT_SECRET)
        const getInfo = await User.findById(getUserId.id).select('-password');
        
        res.status(200).json(getInfo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}