'use strict';

var webVitals = require('../util/library');
var dataElementCache = require('../util/dataElementCache');

module.exports = function(settings, trigger) {
  webVitals.getCLS(function(metric) {
    var extensionSettings = turbine.getExtensionSettings();
    dataElementCache.setElement(metric.name, metric);
    
    if(extensionSettings.preserve)
      dataElementCache.preserveElements();
    
    trigger({
      $webVitals: metric
    });
  }, !!settings.reportAllChanges);
};
