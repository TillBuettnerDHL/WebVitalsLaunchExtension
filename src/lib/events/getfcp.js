'use strict';

var webVitals = require('../util/library');
var dataElementCache = require('../util/dataElementCache');

module.exports = function(settings, trigger) {
  webVitals.getFCP(function(metric) {
    dataElementCache.setElement(metric.name, metric);
    
    trigger({
      $webVitals: metric
    });
  });
};
