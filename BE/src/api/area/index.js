const Router = require('koa-router');
const area =  new Router();

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
  ctx.body = { ctx }
  // console.log(ctx.query);
  console.log(ctx.params)
  // console.log(ctx.res)
  // console.log(ctx.res)
  // console.log(ctx.req)
  // console.log(ctx.request)
  // console.log(ctx.params)
  // const { address, selectedList } = ctx.params;
  // console.log(address, selectedList);
  // const data = dummy.filter(data => selectedList.includes(data.code));
  // ctx.status = 200;
  // ctx.body = {
  //   address,
  //   data: data
  // }
});

/* GPS정보로 세권 찾기
  GET /api/area/geo
  { geo, selectedList }
*/
area.get('/geo', (ctx) => {
  const [{x, y}, selectedList] = ctx.params;
});

module.exports = area;