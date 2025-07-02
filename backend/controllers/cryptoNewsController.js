export const getCryptoNewsByCoin = async (req, res) => {
    const coinName = req.params.coin;

    try {
        const coinNews = await fetch(`https://newsapi.org/v2/everything?q=${coinName}&sortBy=publishedAt&apiKey=${process.env.CRYPTO_NEWS_API_KEY}`);
        const newsData = await coinNews.json();
        return res.json(newsData)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}