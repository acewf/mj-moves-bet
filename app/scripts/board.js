define(['board'], function() {
    'use strict';
    //Board Contructor
    function Board(){
    	Object.defineProperties(this, {
            // rewritable at the moment of load, it holds the default type chosen for fallback purposes in the future
            defaultType: {
                value: "game-board",
                writable: false
            },
            id: {
                value: null,
                writable: true
            },
            createId: {
                value: function() {
                  function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                  }
                  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4();
                },
                writable: false,
                enumerable: false
            },
            load: {
                value: function(type) {
                    
                },
                enumerable: true
            }
        });
        this.id = this.createId();
    }

    Board.prototype.init = function(first_argument) {
    	// body...
    };

    Board.prototype.destroy = function(first_argument) {
    	// body...
    };

    Board.prototype.createListeners = function(first_argument) {
    	// body...
    };

    Board.prototype.removeListeners = function(first_argument) {
    	// body...
    };

    Board.prototype.showView = function(first_argument) {
    	// body...
    };
    Board.prototype.hideView = function(first_argument) {
    	// body...
    };

    Board.prototype.createView = function(first_argument) {
    	return {
    		instructions:function(){

    		},
    		gameplay:function(){

    		}
    	};
    	// body...
    };

    Board.prototype.removeView = function(first_argument) {
    	// body...
    };
    return Board;
});