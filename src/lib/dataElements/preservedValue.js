'use strict';

var cookie = require('@adobe/reactor-cookie');

module.exports = function(settings) {
  return cookie.get(settings.cookieKey);
};
