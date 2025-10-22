const UseCaseInterface = require("../interfaces/UseCaseInterface");
const Meditation = require("../../domain/entities/meditation");

class GetDailyQuotesUseCase extends UseCaseInterface{
    constructor(quotesRepository){
        super();
        this.quotesRepository = quotesRepository;
    }

    async execute() {
        const quotesData = await this.quotesRepository.getDailyQuotes();

        return new Meditation({text: quotesData});
    }
}

module.exports = GetDailyQuotesUseCase;