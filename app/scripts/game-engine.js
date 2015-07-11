/* 
Author: Pedro Martins
email: pedro.martins@pixelkiller.net
Date: 07/2015
*/
define(['game'], function() {

    //Game Contructor
    function Game(){
        Object.defineProperties(this, {
            // rewritable at the moment of load, it holds the default type chosen for fallback purposes in the future
            defaultType: {
                value: "game-engine",
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

    Game.prototype.init = function(first_argument) {
    	// body...
        console.log('Init Game');
        console.log('ID:',this.id)
    };

    Game.prototype.destroy = function(first_argument) {
    	// body...
    };

    Game.prototype.createListeners = function(first_argument) {
    	// body...
    };

    Game.prototype.removeListeners = function(first_argument) {
    	// body...
    };

    var game = new Game();
    console.log('file run game:',game);

    return game;
});