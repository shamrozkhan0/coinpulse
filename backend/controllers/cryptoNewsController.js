import { response } from "express";

/**
 * This will check: if user is logged in , send random coin from gekco api
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const cryptoNews = async (req, res) => {
    try {
        const data = await fetchCoin();
        return res
            .status(200)
            .json({ success: true, message: "Successfully Fetches the coin", data: data, });
    } catch (error) {
        console.error(`Fetching Coin Error: ${error}`);
        return res
            .status(500)
            .json({ success: true, message: error.message }, data);
    }
};


const fetchCoin = async () => {
    const pageIndex = Math.floor(Math.random() * 10) + 1;
        const num = "1";
    const url = process.env.GECKO_API + num ;

    const res = await fetch(url);
    const data = await res.json();

    const filterData = data.map((coin) => ({
        id: coin.id,
        name: coin.symbol,
        image: coin.image,

    }))

    return filterData;
}
