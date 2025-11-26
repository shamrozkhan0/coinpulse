import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.GPT_API_KEY,    
});

export async function askGPT({ coinName }) {
  console.log(coinName)
// return coinName;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: " You are a confident crypto expert.  Analyze the provided coin name and give a clear investment verdict. Your response must: Start with either \“YES — this coin is good to buy\” or \“NO — this coin is not recommended”.Then write a short paragraph explaining your reasoning. Do not ask the user questions. Do not depend on user preferences. Speak confidently, as if giving a strong professional opinion.Keep the explanation simple, friendly, and easy to understand."
      },
      {
        role: "user",
        content: `Coin name: ${coinName}`
      }
    ]
  });

  return completion.choices[0].message.content;
}
