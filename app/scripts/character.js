/* 
Author: Pedro Martins
email: pedro.martins@pixelkiller.net
Date: 07/2015
*/
define(['character'], function() {
    var mjFrameAnim = '{"andarcostas":{"frames": [{"filename": "backimage", "frame": {"x":120,"y":27,"w":25,"h":53} }, {"filename": "backimage", "frame": {"x":161,"y":26,"w":25,"h":54} }, {"filename": "backimage", "frame": {"x":192,"y":24,"w":23,"h":56} }, {"filename": "backimage", "frame": {"x":223,"y":24,"w":23,"h":56} }, {"filename": "backimage", "frame": {"x":254,"y":26,"w":23,"h":54} }, {"filename": "backimage", "frame": {"x":285,"y":24,"w":23,"h":56} }, {"filename": "backimage", "frame": {"x":316,"y":25,"w":23,"h":55} } ] }, "touchingknee":{"frames": [{"filename": "backimage", "frame": {"x":120,"y":402,"w":25,"h":54} }, {"filename": "backimage", "frame": {"x":153,"y":402,"w":37,"h":54} }, {"filename": "backimage", "frame": {"x":191,"y":402,"w":37,"h":54} }, {"filename": "backimage", "frame": {"x":236,"y":401,"w":36,"h":55} }, {"filename": "backimage", "frame": {"x":280,"y":402,"w":35,"h":54} }, {"filename": "backimage", "frame": {"x":323,"y":402,"w":39,"h":54} }, {"filename": "backimage", "frame": {"x":370,"y":402,"w":30,"h":54} }, {"filename": "backimage", "frame": {"x":408,"y":403,"w":25,"h":53} }, {"filename": "backimage", "frame": {"x":440,"y":402,"w":26,"h":54} }, {"filename": "backimage", "frame": {"x":474,"y":402,"w":25,"h":54} } ] } }';
     var mjAnimInfo = null;
    //Game Contructor
    var actualFrame = 0;
    var fps = 0;
    var danceMove = null;
    function Character(){
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

        mjAnimInfo = JSON.parse(mjFrameAnim);
        danceMove = mjAnimInfo.andarcostas;
        //console.log(mjAnimInfo)

         
    }

    Character.prototype.init = function(first_argument) {
        console.log('Build Character id:',this.id);
    };

    Character.prototype.destroy = function(first_argument) {
    	console.log('Destroy Character id:',this.id);
    };

    Character.prototype.update = function(canvasContext) {
        canvasContext.save(); 
        canvasContext.font='40px Arial';
        canvasContext.fillStyle='#FF0000';
        var txt='defaultText';
        //canvasContext.fillText(txt,300,200);
        
        var info = danceMove.frames[actualFrame];
        canvasContext.drawImage(mjallsprite, info.frame.x, info.frame.y,info.frame.w,info.frame.h,300,200,info.frame.w,info.frame.h) ;

        //canvasContext.translate( 500 * -0.5, canvasContext.measureText(txt).height * -0.5 );
        canvasContext.restore();
        if (fps===8) {
            fps = 0;
            actualFrame++;
            if (actualFrame>=danceMove.frames.length) {
                actualFrame = 0;
            };
        };        
        fps++;
    }



    //// CLASS DEFAULT
    Character.prototype.addEventListener = function(a,b){
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
    Character.prototype.removeEventListener = function(a,b){
        'use strict';
      this[a] = null;
      b = null;
    };
    Character.prototype.dispatchEvent = function(eventName,data){
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
    return Character;
});