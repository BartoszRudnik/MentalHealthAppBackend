const database = require("..")

const getAllSongs = async () => {
    const result = await database.query('SELECT * FROM songs');

    return result.rows;
}

module.exports = {getAllSongs};