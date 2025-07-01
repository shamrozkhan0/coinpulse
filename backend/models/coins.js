import mongoose from "mongoose";

 const coinSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    priceChange: { type: Number, required: true },
})

export default mongoose.model("Coin", coinSchema);