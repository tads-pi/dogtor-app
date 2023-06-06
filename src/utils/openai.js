import { Configuration, OpenAIApi } from "openai";
import { OPEN_AI_API_KEY } from "@env"

export async function generateImage(prompt = "") {
    try {
        const configuration = new Configuration({
            apiKey: OPEN_AI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "256x256",
        });
        const url = response.data.data[0].url
        
        return url
    } catch (error) {
        console.error(error);
    }
}