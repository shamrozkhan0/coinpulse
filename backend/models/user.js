import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    password: { type: String, required: true },
    hashPassword: { type: String, required: false},
});


// hashing password and assigned it to hashpassword
userSchema.pre("save", async function name() {
    if (!this.isModified("password")) return;
    this.hashPassword = await bcrypt.hash(this.password, 12)
})


// Compare entered password with hashed password
userSchema.methods.comparePassword = function (password){
    return bcrypt.compare(password, this.hashPassword)
}

export default mongoose.model("User", userSchema);