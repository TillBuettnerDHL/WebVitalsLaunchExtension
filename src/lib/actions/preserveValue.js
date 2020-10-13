'use strict';

var cookie = require('@adobe/reactor-cookie');

module.exports = function(settings) {
  cookie.set(settings.cookieKey, settings.value);
};
