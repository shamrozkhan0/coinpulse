import { getCryptoNewsByCoin } from "./cryptoNewsController.js";

export const getAiResponse = async (req, res) => {

  const { newsdata, coinname } = req.body;

  const aiContent = `Crypto coin: ${coinname}. News headlines: ${newsdata}`;
  console.log("TITLE: " + aiContent)

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
          {
            role: "system",
            content: process.env.AI_ROLE,
          },
          {
            role: "user",
            content: aiContent,
          }
        ] 
      })
    });

    const resetUnix = response.headers.get("x-ratelimit-reset");
    if (resetUnix) {
      const resetTime = new Date(parseInt(resetUnix) * 1000);
      console.log(`Rate limit will reset at: ${resetTime.toLocaleTimeString()}`);
    }


    if (response.status == 429) {
      return res.status(401).json({ message: "Our API is taking a short nap. Please try again in a few moments." });
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    return res.status(200).json({ news: newsdata, message: aiResponse })
  } catch (error) {
    console.error("Error", error.message)
  }


} 