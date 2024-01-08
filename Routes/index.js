
const express = require('express');
const getCryptoController = require('../Controllers/getCryptoController');
const ConvertCurrency = require('../Controllers/ConvertCurrency');

const router = express.Router()



router.get("/", (req,res) => {
    res.end("hello from the other side")
})


router.get('/topCryptos', getCryptoController);
router.post('/convertCurrency', ConvertCurrency);


module.exports = router

