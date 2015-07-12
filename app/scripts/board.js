define(['board'], function() {
    'use strict';

    var increment = 0;
    var textColor = '#FF0000';
    var fontsize = '24px Arial';
    var defaultText = 'Place Your Bet!';
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
    	console.log('init board');
    	console.log('ID:',this.id)
    };

    Board.prototype.destroy = function(first_argument) {
    	// body...
    };

    Board.prototype.update = function(canvasContext) {
    	increment++;
    	canvasContext.save(); 
        canvasContext.font=fontsize;
        canvasContext.fillStyle=textColor;
        canvasContext.fillText(defaultText+increment,10,60,200);
        canvasContext.restore();
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


    Board.prototype.addEventListener = function(a,b){
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
    Board.prototype.removeEventListener = function(a,b){
        'use strict';
      this[a] = null;
      b = null;
    };
    Board.prototype.dispatchEvent = function(eventName,data){
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
        event.keyCode = data.keyCode;
        event.shiftKey =  data.shiftKey;
        event.ctrlKey =  data.ctrlKey;
        console.log(this);
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
    return Board;
});