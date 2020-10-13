'use strict';

var webVitals = require('../util/library');
var dataElementCache = require('../util/dataElementCache');

module.exports = function(settings, trigger) {
  webVitals.getLCP(function(metric) {
    dataElementCache.setElement(metric.name, metric);
    
    trigger({
      $webVitals: metric
    });
  }, !!settings.reportAllChanges);
};
