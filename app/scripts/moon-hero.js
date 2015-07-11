/* 
Author: Pedro Martins
email: pedro.martins@pixelkiller.net
Date: 07/2015
*/
define(['moonhero'], function() { 

    //Application Contructor  
    function MoonHero(){
        Object.defineProperties(this, {
            defaultType: {
                value: "game-application",
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

        // Instance of Module added to application
        this.moduleRunning = null;

        // Application UID
        this.id = this.createId();
    }

    //Application initializer  
    MoonHero.prototype.init = function(first_argument) {
    	// body...
        console.log('Init MoonHero Application');
        console.log('ID:',this.id);
    };

    //Application destroy 
    MoonHero.prototype.destroy = function(first_argument) {
    	// body...
    };

    //Application Add Global Listeners
    MoonHero.prototype.createListeners = function(first_argument) {
    	// body...
    };

    //Application Remove Global Listeners
    MoonHero.prototype.removeListeners = function(first_argument) {
    	// body...
    };


    //Application Create Instance
    var moonhero = new MoonHero();

    return moonhero;
});