'use strict';

var dataElementCache = require('../util/dataElementCache');
var cookie = require('@adobe/reactor-cookie');
var key = 'TTFB';

module.exports = function(settings) {
  var extensionSettings = turbine.getExtensionSettings();

  if(extensionSettings.preserve && settings.preserve) {
    var preservedMetrics = cookie.get(dataElementCache.freezeKey) || cookie.get(extensionSettings.metricsKey);
    var decodedPreservedMetrics = decodeURIComponent(preservedMetrics);

    try {
      var deserializedPreservedMetrics = JSON.parse(decodedPreservedMetrics);
      return deserializedPreservedMetrics[key];
    } catch(e) {
      return;
    }
  }

  return dataElementCache.getElement(key);
};
