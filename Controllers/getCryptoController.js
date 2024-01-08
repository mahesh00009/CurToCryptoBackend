const axios = require('axios');
require('dotenv').config()


const getCryptoController = async (req, res) => {
    try {
        const apiKey = process.env.API; 
   
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          params: {
            start: 1,
            limit: 100,
            convert: 'USD',
          },
          headers: {
            'X-CMC_PRO_API_KEY': apiKey,
          },
        });
    
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
};

module.exports = getCryptoController;
