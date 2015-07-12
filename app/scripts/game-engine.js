/* 
Author: Pedro Martins
email: pedro.martins@pixelkiller.net
Date: 07/2015
*/
define(['game','board'], function(game,Board) {
    var boardresults = null;
    var credits = 1000;
    var canvasContext = null;
    
    var itemsToRender = [];

    //Game Contructor
    function Game(){
        var instance = this;
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
        this.renderByFrame = false;
        this.addEventListener('keyboardEvent',function(ev){
            console.log(ev);
            if (ev.keyCode===27) {
                instance.renderByFrame = false;
            };
        });
    }
    
    Game.prototype.init = function(ctx) {
    	// body...
        canvasContext = ctx;
        console.log('Init Game');
        console.log('ID:',this.id,ctx)
        //this.loop();

        //itemsToRender.push();

        boardresults = new Board();
        this.renderByFrame = true;
        this.loop(window);

    };



    Game.prototype.destroy = function(first_argument) {
    	// body...
        this.renderByFrame = false;
    };


    Game.prototype.loop = function(ev){
        var instance = this;
        canvasContext.clearRect( 0, 0, W, H );
        boardresults.update(canvasContext);
        this.dispatchEvent('render');
        window.requestAnimationFrame(function(){
            if(instance.renderByFrame){
                instance.loop(window);
            }
        });
    }


    Game.prototype.addEventListener = function(a,b){
      'use strict';
        if(this.addEventListener){
            this[a] = b;
            //this.addEventListener(type,handler,false);
        }else if(this.attachEvent && htmlEvents['on'+a]){// IE < 9
            this.attachEvent('on'+a,b);
        }else{
            this['on'+a]=b;
        }
        //this[a] = b;
    };
    Game.prototype.removeEventListener = function(a,b){
        'use strict';
      this[a] = null;
      b = null;
    };
    Game.prototype.dispatchEvent = function(eventName,data){
        'use strict';
        var event;
        if(document.createEvent){
            event = document.createEvent('HTMLEvents');
            event.initEvent(eventName,true,true);
        }else if(document.createEventObject){// IE < 9
            event = document.createEventObject();
            event.eventType = eventName;
        } else {
            //console.log('c');
        }
        event.eventName = eventName;
        if (data) {
            event.eventName = eventName;
            event.keyCode = data.keyCode;
            event.shiftKey =  data.shiftKey;
            event.ctrlKey =  data.ctrlKey;
        };
        if(this.dispatchEvent){
            var callFunctionOn = this[event.eventName];
            try{
              callFunctionOn(event);
            }
            catch(err){
              console.log('Error:',err);
            }
            //this.dispatchEvent(event);
        }else if(this.fireEvent && htmlEvents['on'+eventName]){// IE < 9
            this.fireEvent('on'+event.eventType,event);// can trigger only real event (e.g. 'click')
        }else if(this[eventName]){
            this[eventName]();
        }else if(el['on'+eventName]){
            this['on'+eventName]();
        }    
    };
    return Game;
    
});