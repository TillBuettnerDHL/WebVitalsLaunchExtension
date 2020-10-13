'use strict';

var window = require('@adobe/reactor-window');

function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
}

module.exports = typeof window.CustomEvent === "function" ? window.CustomEvent : CustomEvent;
