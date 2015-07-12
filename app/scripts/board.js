define(['board'], function() {
    'use strict';

    var increment = 0;
    var textColor = '#FF0000';
    var fontsize = '24px Arial';
    var defaultText = 'Place Your Bet!';
    var timebarWidth = 600;
    var timebarStart = 0;
    var actualCredits = 0;
    var steps = [];
    var minSteps = 5;
	var midSteps = 10;
	var maxSteps = 20;
    var multiplier = {fail:-1,sucess:1,great:3};
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


    Board.prototype.init = function(value) {
    	var instance = this;
    	console.log('init board');
    	console.log('ID:',this.id);
    	instance.show(value);

    	goplay.addEventListener('click', function(ev){
    		if (mybet.value<=actualCredits) {
    			actualCredits -= mybet.value;
    		} else {
    			return false;
    		}
    		$(credits).text(actualCredits);
    		instance.dispatchEvent('updateCredits',{credits:actualCredits});
    		instance.stepGenerator(mybet.value);
    	});
    	
    	backMenu.addEventListener('click', function(ev){
    		instance.dispatchEvent('goHome',ev);
    	});
    };

    Board.prototype.show = function(value){
    	$(betView).removeClass('hide');
    	$(credits).text(value);
    	actualCredits = value;
    }

    Board.prototype.destroy = function(first_argument) {
    	console.log('---DESTROY---');
    	//backMenu.removeEventListener('click', backMenu['click']);
    };

    Board.prototype.update = function(canvasContext,data) {
    	increment++;
    	canvasContext.save();
    	this.createViewTime(canvasContext,data);
        /*
        canvasContext.font=fontsize;
        canvasContext.fillStyle=textColor;
        canvasContext.fillText(defaultText+increment,10,60,200);
        */
        canvasContext.restore();
    };

    Board.prototype.stepGenerator = function(betvalue) {
    	steps = [];
    	var keys = [79,80,81,87];
    	for (var i = maxSteps - 1; i >= 0; i--) {
    		var pos = Math.floor((Math.random() * keys.length) + 1);
    		steps.push(keys[pos]);
    	};
    };

    Board.prototype.stepManager = function(first_argument) {
    	// body...
    };

    Board.prototype.stepExecute = function(first_argument) {
    	// body...
    };


    Board.prototype.showView = function(first_argument) {
    	// body...
    };
    Board.prototype.hideView = function(first_argument) {
    	// body...
    };



    Board.prototype.createViewTime = function(canvasContext,data) {

    	canvasContext.rect(0,0,timebarWidth,10);
    	canvasContext.fillStyle="red";
		canvasContext.fill();
		canvasContext.stroke();
    };

    Board.prototype.removeView = function(first_argument) {
    	// body...
    };




    //*****************************//
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
        if (data) {
        	if(data.credits){
        		event.credits = data.credits;
        	} else if (event.keyCode) {
        		event.keyCode = data.keyCode;
		        event.shiftKey =  data.shiftKey;
		        event.ctrlKey =  data.ctrlKey;
        	};	       
	    }

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