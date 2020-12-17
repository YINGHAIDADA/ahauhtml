(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"公平_atlas_", frames: [[0,370,332,183],[0,185,336,183],[0,0,366,183]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["公平_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["公平_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["公平_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.公平 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(392,0,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(197,0,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.公平, new cjs.Rectangle(0,0,575,91.5), null);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.公平();
	this.instance.parent = this;
	this.instance.setTransform(869.9,228,1,1,0,0,0,287.4,45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:287.5,x:854.65},0).wait(1).to({x:831.7},0).wait(1).to({x:801.05},0).wait(1).to({x:762.75},0).wait(1).to({x:716.8},0).wait(1).to({x:663.2},0).wait(1).to({x:601.95},0).wait(1).to({x:540.7},0).wait(1).to({x:487.1},0).wait(1).to({x:441.15},0).wait(1).to({x:402.85},0).wait(1).to({x:372.2},0).wait(1).to({x:349.25},0).wait(1).to({x:333.95},0).wait(1).to({regY:45.9,y:228.1},0).wait(21).to({regX:287.4,regY:45.8,x:333.85,y:228},0).wait(1).to({regX:287.5,x:333.9,alpha:0.957},0).wait(1).to({x:333.7,alpha:0.9139},0).wait(1).to({x:333.25,alpha:0.8709},0).wait(1).to({x:332.3,alpha:0.8278},0).wait(1).to({x:330.75,alpha:0.7848},0).wait(1).to({x:328.5,alpha:0.7417},0).wait(1).to({x:325.3,alpha:0.6987},0).wait(1).to({x:321,alpha:0.6557},0).wait(1).to({x:315.55,alpha:0.6126},0).wait(1).to({x:308.7,alpha:0.5696},0).wait(1).to({x:300.35,alpha:0.5265},0).wait(1).to({x:290.35,alpha:0.4835},0).wait(1).to({x:278.55,alpha:0.4404},0).wait(1).to({x:264.75,alpha:0.3974},0).wait(1).to({x:248.85,alpha:0.3543},0).wait(1).to({x:230.65,alpha:0.3113},0).wait(1).to({x:210,alpha:0.2683},0).wait(1).to({x:186.85,alpha:0.2252},0).wait(1).to({x:160.9,alpha:0.1822},0).wait(1).to({x:132.15,alpha:0.1391},0).wait(1).to({x:100.3,alpha:0.0961},0).wait(1).to({x:65.3,alpha:0.053},0).wait(1).to({x:26.95,alpha:0.01},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.4,420.2,1306.1,-137);
// library properties:
lib.properties = {
	id: 'ABEDDEAADE10C24D8BD552AE5B79C47F',
	width: 640,
	height: 480,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"images/公平_atlas_.png", id:"公平_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ABEDDEAADE10C24D8BD552AE5B79C47F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;