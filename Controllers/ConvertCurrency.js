
const axios = require('axios')
require('dotenv').config()

const ConvertCurrency = async (req, res) => {
  const { amount, symbol, convert } = req.body;
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion', {
      params: {
        amount,
        symbol,
        convert,
      },
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API, 
      },
    });

    console.log(amount, {symbol}, {convert}, response?.data?.data[0]?.quote[convert]?.price)
    const convertedAmount = response?.data?.data[0]?.quote[convert]?.price;
    res.json({ convertedAmount, convert, symbol });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


  module.exports = ConvertCurrency;