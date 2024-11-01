const express = require('express');
const catService = require('../services/catService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const catImage = await catService.getRandomCat();
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(catImage);
    } catch (error) {
        res.status(500).send('Error fetching cat image');
    }
});

module.exports = router;
