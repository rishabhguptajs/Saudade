import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

export const emailSignup = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(user){
            res.status(400)
            throw new Error('User already exists')
        }

        const newUser = new User({
            email,
            password
        })

        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'User created successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error while signing up user'
        })
    }
}

export const emailLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user){
            res.status(400)
            throw new Error('User does not exist')
        }

        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            res.status(400)
            throw new Error('Invalid credentials')
        }

        const payload = {
            user: {
                id: user._id,
            }
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.status(200).json({
            success: true,
            token,
            message: 'User logged in successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error while logging in user'
        })
    }
}