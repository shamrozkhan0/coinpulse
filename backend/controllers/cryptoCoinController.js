import Coin from "../models/coins.js";

 /**
  * Controller to handle crypto news requests.
  *
  * - Fetches a random cryptocurrency from CoinGecko API.
  *
  * @param req - Express request object
  * @param res - Express response object
  * @returns Returns coin data as JSON response if fetches successfuly.
  */
export const getCryptoCoins = async () => {
  console.log("crypto coin fucntion is called");

    const data = await fetchCoin();

    await Coin.deleteMany({}); // delete every coin from data base
    await Coin.insertMany(data); // insert all the fetched coin in database
}

setInterval(getCryptoCoins, 40000);  



/**
 * Fetches a random page of cryptocurrency market data from the CoinGecko API,
 * and returns a filtered list containing essential fields.
 *
 * @returns {Promise<Array<{ id: string, name: string, image: string, priceChange: number }>>}
 * @throws {Error} If the CoinGecko API request fails
 */

const fetchCoin = async () => {
  const pageIndex = Math.floor(Math.random() * 10) + 1;
  const url = process.env.GECKO_API + pageIndex;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Coingecko API Failed");

  const data = await res.json();

  const filterData = data.map((coin) => ({
    symbol: coin.id,
    name: coin.symbol,
    image: coin.image,
    priceChange: coin.price_change_percentage_24h,
  }));

  return filterData;
};


/**
 * Gets all coin from database
 * 
 * @param  req 
 * @param  res 
 * @returns 
 */
export const getAllCoins = async (req, res) => {
  try {
    const coinsData = await Coin.find();
    return res
      .status(200)
      .json({ message: "fetched coins from database", coinsData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
