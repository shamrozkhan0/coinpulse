import User from "../models/user.js";
import jwt from "jsonwebtoken";

const findByEmail = async (email) => User.findOne({ email });



/**
 * Register user send JWT token
 * This function port is localhost:8000:/signup
 * 
 * @param  req 
 * @param  res 
 * @returns 
 */
export const signUp = async (req, res) => {
    console.log("Body: ", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res
            .status(400)
            .json({ success: false, message: "Fillout the form completely" });
    }

    console.log(email);
    const isUserExist = await findByEmail(email);
    if (isUserExist)
        return res
            .status(409)
            .json({ success: false, message: " User already exist By Email " });
    try {
        // In "image" cloudinary cdn will be inserted
        const savedUser = await User.create({ name, email, password });
        const token = generateToken(savedUser); ``
        return res
            .status(201)
            .json({ success: true, message: name + " is created", token });
    } catch (error) {
        console.error(`Error: ${error}`);
        return res.status(500).json({ success: false, message: error.message });
    }
};



/**
 * Authenticate user and pass the JWT token
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res
            .status(409)
            .json({ success: false, message: "Fillout the form completely" });


    const user = await findByEmail(email);


    if (!user || !(await user.comparePassword(password))) {
        return res
            .status(401)
            .json({
                success: false,
                message: `Invalid credential`,
            })
    }


    const token = generateToken(user)
    return res.status(200).json({ success: true, message: "Login Completes", token })
};



/**
 * generate JWT token for the user who signup and login
 * 
 * @param  user 
 * @returns 
 */
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};



/**
 * It will fetch all the registered user from the database
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(201).json({ success: true, users });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};