import { getAiResponse } from "./geminiAIController.js";

export const getCryptoNewsByCoin = async (req, res) => {
    const coinName = req.params.coin;
    try {
     const coinNews = await fetch(`https://newsapi.org/v2/everything?q=${coinName}&sortBy=publishedAt&language=en&pageSize=10&apiKey=${process.env.CRYPTO_NEWS_API_KEY}`);

        const newsData = await coinNews.json();
        const filterNewsDataArr = newsData.articles.map((news, index) => `"${index + 1}. ${news.title}"`);
        // req.body= {
        //     newsdata: filterNewsDataArr,
        //     coinname: coinName,
        // }

    // await getAiResponse(req, res)
    return res.status(200).json({success: true, message: filterNewsDataArr})
    } catch (error) {
        return res.status(500).json({message:`Error In News Fetching: ${error.message}`})
    }
}