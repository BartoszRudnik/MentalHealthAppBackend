const { GoogleGenerativeAI } = require("@google/generative-ai");
const QuotesRepository = require("../../application/interfaces/QuotesRepositoryInterface");

const geminiAi = new GoogleGenerativeAI("API_KEY");
const model = geminiAi.getGenerativeModel({model: "gemini-1.5-pro"});

class GeminiService extends QuotesRepository{
    async getAdviceByMood(mood){
        const prompt = `${mood}`;

        const result = await model.generateContent(prompt);

        const response = await result.response;
        const text = response.text();

        return text;
    }

    async getDailyQuotes(){
        const prompt = '';

        const result = await model.generateContent(prompt);

        const response = await result.response;
        const text = response.text();

        return text;
    }
}

module.exports = GeminiService;