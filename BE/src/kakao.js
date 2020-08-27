const axios = require('axios')
const REST_API_KEY = '31c28900fa5e8b2254d6ded8b39540a5';

const kakao = {
  coord2address: async ({x, y}) => {
    const res = await axios({
      method: 'get',
      url: 'https://dapi.kakao.com/v2/local/geo/coord2address.json',
      headers: {
        'Authorization': `KakaoAK ${REST_API_KEY}`
      },
      params: {
        x: y, 
        y: x,
      }
    });

    if (res.status === 200) {
      const doc = res.data.documents[0];
      if (doc.road_address) {
        return doc.road_address.address_name;
      } else {
        return doc.address.address_name;
      }
    } else {
      return null;
    }
  }
}

module.exports = kakao;
