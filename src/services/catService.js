const axios = require('axios');

const getRandomCat = async () => {
    const response = await axios.get('https://cataas.com/cat', {
        responseType: 'arraybuffer'
    });
    return response.data;
};

module.exports = {
    getRandomCat
};
