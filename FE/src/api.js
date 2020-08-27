const axios = require('axios');

const BASE_URL = 'localhost:4000/api'

// const data = [
//   { code: "cv", score: 90, cnt: 55 },
//   { code: "cf", score: 40, cnt: 12 },
//   { code: "rs", score: 74, cnt: 40 },
//   { code: "hp", score: 10, cnt: 4 },
//   { code: "sm", score: 60, cnt: 2 },
//   { code: "pc", score: 90, cnt: 24 },
// ]

// const temp = (selectedList) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         address: '경기도 하남시 미사강변동로 177 1203동 1305호',
//         data: data.filter(d => selectedList.includes(d.code))
//       });
//     }, 1500);
//   }) 
// }

const api = {
  getResultByAddress: async (address, selectedList) => {
    const result = await axios({
      method: 'get',
      url: `${BASE_URL}/area/address`,
      params: {
        address,
        selectedList
      }
    })
    if (result.status === 200) {
      return result.data;
    }
  },
  // getResultByAddress: (address, selectedList) => {
  //   return temp(selectedList);
  // },
  getResultByCoord: async (geoloc, selectedList) => {
    const result = await axios({
      method: 'get',
      url: `${BASE_URL}/area/geo`,
      params: {
        geoloc,
        selectedList
      }
    })
    if (result.status === 200) {
      return result.data;
    }
  },
  // getResultByCoord: ({x, y}, selectedList) => {
  //   return temp(selectedList);
  // }
};

export default api;