const UseCaseInterface = require("../interfaces/UseCaseInterface");
const Song = require("../../domain/entities/song");

class GetSongsUseCase extends UseCaseInterface {
    async execute() {
        const songRows = await getAllSongs();

        return songRows.map(song => new Song({ id: song.id, title: song.title, author: song.author, songLink: song.songLink, }));
    }
}

module.exports = GetSongsUseCase;