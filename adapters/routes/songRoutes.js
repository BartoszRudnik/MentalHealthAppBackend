const express = require('express');
const SongController = require('../controllers/song_controller');

const router = express.Router();

router.get('/all', SongController.all);

module.exports = router;