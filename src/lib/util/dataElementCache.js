'use strict';

var assign = require('@adobe/reactor-object-assign');
var cookie = require('@adobe/reactor-cookie');
var extensionSettings = turbine.getExtensionSettings();

var dataElementCache = {
    CLS: null,
    FCP: null,
    FID: null,
    LCP: null,
    TTFB: null,
    initUpdate: !1,
    freezeKey: (extensionSettings.metricsKey + '|f' || null),

    _copy: function(value) {
        return assign({}, value);
    },

    _updateElement: function(element, value) {
        var newElementValue = this._copy(value);
        var currentElementValue = this.getElement(element);
        if(currentElementValue)
            newElementValue.value += newElementValue.delta;
        return newElementValue;
    },

    _freezeCookie: function() {
        var cookieValue = cookie.get(extensionSettings.metricsKey);
        if(cookieValue)
            cookie.set(this.freezeKey, cookieValue);
    },

    setElement: function(element, value) {
        if(Object.hasOwnProperty.call(this, element))
            this[element] = this._updateElement(element, value);
    },

    getElement: function(element) {
        return this[element];
    },

    preserveElements: function() {
        if(!this.initUpdate)
            this._freezeCookie();
            
        var elements = {};
        var that = this;
        ['CLS', 'FCP', 'FID', 'LCP', 'TTFB'].forEach(function(element) {
            var currentElementValue = that._copy(that.getElement(element));
            delete currentElementValue.entries;
            elements[element] = currentElementValue;
        });
        var extensionSettings = turbine.getExtensionSettings();
        if(extensionSettings && extensionSettings.metricsKey)
            cookie.set(extensionSettings.metricsKey, JSON.stringify(elements));
    },

    retrievePreservedElements: function() {
        var extensionSettings = turbine.getExtensionSettings();
        if(extensionSettings && extensionSettings.metricsKey) {
            try {
                return decodeURIComponent(cookie.get(extensionSettings.metricsKey));
            } catch(e) {}
        }
    }
}

module.exports = dataElementCache;
