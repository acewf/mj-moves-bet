/* 
Author: Pedro Martins
email: pedro.martins@pixelkiller.net
Date: 07/2015
*/
define(['moonhero','keyboard'], function(moonhero,keyboard) { 
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
            version: {
                value: "0.1"
            },
            bowserInfo: {
                value: function(){
                    return {
                        get_browser:function(){
                            var N=navigator.appName, ua=navigator.userAgent, tem;
                            var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                            if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
                            M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
                            return M[0];
                        },
                        get_browser_version:function(){
                            var N=navigator.appName, ua=navigator.userAgent, tem;
                            var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                            if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
                            M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
                            return M[1];
                        }
                    }
                },
                writable: true,
                enumerable: true
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
        this.canvasContext = null;

        this.createListeners();

        console.log('MoonHero Contructor');
    }

    //Application initializer  
    MoonHero.prototype.init = function(first_argument) {
    	// body...
        console.log('Init MoonHero Application');
        console.log('ID:',this.id);
        this.CanvasRender(null);
    };

    //Application destroy 
    MoonHero.prototype.destroy = function(first_argument) {
    	// body...
    };

    //Application Add Global Listeners
    MoonHero.prototype.createListeners = function() {
        var instance = this;
        console.log('-->',keyboard);
        keyboard.addEventListener('keydown',instance.keyboardEvent);
    	// body...
    };

    //Application Remove Global Listeners
    MoonHero.prototype.removeListeners = function(first_argument) {
    	// body...
    };

    //  KeyBoard Event Dispatch
    MoonHero.prototype.keyboardEvent = function(ev) {
        console.log('-KEYBOARD EVENT-',ev);
    };

    //Application Global Render to Canvas
    MoonHero.prototype.CanvasRender = function (argument) {
        var instance = this;
        //instance.canvasContext.clearRect(0, 0, instance.W, instance.H);

        console.log(instance);
        var browser=instance.bowserInfo().get_browser();
        var browser_version=instance.bowserInfo().get_browser_version();
        if (!((browser=='Firefox') ||  (browser=='MSIE') ||  (browser=='Safari'))) {
           canvas = document.getElementById("gamecanvas");
            W = window.innerWidth, H = window.innerHeight;
            instance.canvasContext  = canvas.getContext("2d");
            console.log(instance.canvasContext );
            //Make the canvas occupy the full page
            canvas.width = W;
            canvas.height = H;
            /*
            intVeral = setInterval(function(){
                instance.CanvasDraw(this);
            }, 2000);
            */
        }
    }
    MoonHero.prototype.CanvasDraw = function (argument) {
        var instance = this;
        console.log('---');
        console.log(instance.canvasContext)

        instance.canvasContext.fillStyle = "rgba(0, 0, 0, 1)";
        instance.canvasContext.fillRect(0, 0, W, H);
    }


    //Application Create Instance
    var moonhero = new MoonHero();

    return moonhero;
});