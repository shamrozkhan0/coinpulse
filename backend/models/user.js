import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type:String ,
        required: false,
    }
})

const User = mongoose.model('User', userSchema);

export default User;