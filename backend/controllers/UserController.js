import User from "../models/user.js";
import jwt from "jsonwebtoken";

const findByEmail = async (email) => User.findOne({ email });




export const signUp = async (req, res) => {
    console.log(req)
    const { name, email, password, image } = req.body;

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
        // In image cloudinary cdn will be inserted
        const savedUser = await User.create({ name, email, password, image });
        const token = generateToken(savedUser);
        return res
            .status(201)
            .json({ success: true, message: name + " is created", token });
    } catch (error) {
        console.error(`Error: ${error}`);
        return res.status(500).json({ success: false, message: error.message });
    }
};




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



export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();
        console.log(`Cokkie: ${req.cookies}`);
        return res.status(201).json({ success: true, users });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};



const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};
