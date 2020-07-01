/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1593497559889_1773';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'lioenix_db',
    host: '127.0.0.1',
    port: '3308',
    username: 'dev2020',
    password: 'dev2020',
    timezone: '+08:00', // 东八时区
  };

  return {
    ...config,
    ...userConfig,
  };
};
