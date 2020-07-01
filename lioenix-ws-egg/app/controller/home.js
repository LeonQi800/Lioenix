'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let user = await ctx.service.user.findById(1);
    ctx.body = {user};
  }
}

module.exports = HomeController;
