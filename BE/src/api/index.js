const Router = require('koa-router');
const area = require('./area');

const api = new Router();

api.use('/area', area.routes());

module.exports = api;