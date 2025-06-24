import User from "../models/user.js";
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
    const user = req.body;

    if (!user.name || !user.email) {
        return res
            .status(400)
            .json({ success: false, message: "Fillout the form completely" });
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        return res
            .status(201)
            .json({ success: true, message: newUser.name + " is created" });
    } catch (error) {
        console.error(`Error: ${error}`);
        return res.status(500).json({ success: false, message: error.message });
    }
};











const generateToken = (userId, userName) =>{

}




export const getAllUser = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
        console.log(user)
        console.log(req.cookies)
        // return res
            // .status(201)
            // .json({ success: true, users });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false , message: error.message });
    }
}
