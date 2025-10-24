const GeminiService = require("../../infrastracture/gemini_service/geminiService")

class MeditationController{
    static async dailyQuote(req, res){
        try{
            const geminiApi = new GeminiService();

            const getDailyQuotes = new GetDailyQuotes(geminiApi);
            const quotes = await getDailyQuotes.execute();

            res.json(quotes);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

     static async myMood(req, res){
        try{
            const {mood} = req.params;

            const geminiApi = new GeminiService();

            const getAdviceByMood = new GetAdviceByMood(geminiApi);
            const quotes = await getAdviceByMood.execute();

            res.json(quotes);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = MeditationController;