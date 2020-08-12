'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_BASE_API:'"/corpormbank-web"',
  VUE_APP_ENV:'"dev"',
  POST_DOMAIN:'"http://10.230.164.184:8090/corpormbank-web/"'
})