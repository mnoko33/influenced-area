const Router = require('koa-router');
const area =  new Router();
const {coord2address} = require('../../kakao');

const dummy = [
  { code: "cv", score: 90, cnt: 55 },
  { code: "cf", score: 40, cnt: 12 },
  { code: "rs", score: 74, cnt: 40 },
  { code: "hp", score: 10, cnt: 4 },
  { code: "sm", score: 60, cnt: 2 },
  { code: "pc", score: 90, cnt: 24 },
]

/* address로 세권 찾기
  GET /api/area/address
  { address, selectedList }
*/
area.get('/address', (ctx) => {
  const address = ctx.query.address;
  const selectedList = JSON.parse(ctx.query.selectedList)
  
  if (address && selectedList.length) {
    ctx.status = 200;
    ctx.body = { 
      address,
      data: dummy.filter(x => selectedList.includes(x.code))
    }
  } else {
    ctx.status = 400
  }
});

/* GPS정보로 세권 찾기
  GET /api/area/geo
  { geo, selectedList }
*/
area.get('/geo', async (ctx) => {
  const geoloc = JSON.parse(ctx.query.geoloc);
  const selectedList = JSON.parse(ctx.query.selectedList)

  const address = await coord2address(geoloc);

  if (geoloc && selectedList.length) {
    ctx.status = 200;
    ctx.body = { 
      address,
      data: dummy.filter(x => selectedList.includes(x.code))
    }
  } else {
    ctx.status = 400
  }
});

module.exports = area;