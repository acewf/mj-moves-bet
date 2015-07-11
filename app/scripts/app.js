/*global define */
define(function (require) {
    'use strict';

    // load dependencies
    var $ = require('jquery'),
        components = {},
        self = {};

    // API methods
    $.extend(self, {

       /**
        * App initialization
	     */
        init: function init() {
            console.log('Prepare Modules for APP');
            for (var key in components) {
                try {
                    components[key].init();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    });

    return self;
});