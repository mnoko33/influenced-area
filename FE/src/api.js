const axios = require('axios');

const BASE_URL = 'http://localhost:4000/api'

const api = {
  getResultByAddress: async (address, selectedList) => {
    const result = await axios({
      method: 'get',
      url: `${BASE_URL}/area/address`,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      timeout: 2000,
      params: {
        address,
        selectedList: JSON.stringify(selectedList)
      }
    })
    if (result.status === 200) {
      return result.data;
    }
  },
  getResultByCoord: async (geoloc, selectedList) => {
    const result = await axios({
      method: 'get',
      url: `${BASE_URL}/area/geo`,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      timeout: 2000,
      params: {
        geoloc,
        selectedList
      }
    })
    if (result.status === 200) {
      return result.data;
    }
  },
};

export default api;