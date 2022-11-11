
// version: 1

// ザガタ。六 /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function zScrll(za,a,n) {
	/* Zagata.Scrolling */

	this.za = (typeof(za)=='undefined')?false:za; // core
	var a = (typeof(a)=='undefined')?false:a; // attr
	this.n = (typeof(n)=='undefined')?'zScrll':n; // name

	this.chck = function(e) {
		var e = e || window.event;
		var xy = this.scrll.wxy();
		var tmp = document.getElementsByTagName('body')[0];
		if(xy.y > 100) {
			if(tmp.className.indexOf('sticky')===-1) {
				tmp.className += ' sticky';
			} else {}
		} else {
			tmp.className = tmp.className.replace(' sticky','');
		}
		
		var wh = this.scrll.wwh();
		if( (xy.y + wh.h) > this.scrll.totophh ) {
			this.scrll.totop.style.bottom = (((xy.y + wh.h) - this.scrll.totophh) + this.scrll.totoph2)+'px';
		} else {
			if( this.scrll.totoph2 ) { 
				this.scrll.totop.style.bottom = this.scrll.totoph2+'px';
			} else {}
		}
	};
	
	this.totopff = function(e) {
		e = e || window.event;
		window.scrollTo({top: 0, behavior: 'smooth'});
		e.preventDefault();
	return false; 
	};
	this.totophhset = function() {
		this.totophh = this.ttphh();
	};
	///////////////////////////////
	// funcs
	this.wwh = function() {
		var w = 0; var h = 0; if(!window.innerWidth) { if(!(this.d.documentElement.clientWidth == 0)) { w = this.d.documentElement.clientWidth; h = this.d.documentElement.clientHeight; } else { w = this.b.clientWidth; h = this.b.clientHeight; } } else { w = window.innerWidth; h = window.innerHeight; }
	return {w:w,h:h};
	};
	this.wxy = function() {
		var x = 0, y = 0; if(typeof( window.pageYOffset )=='number') { y = window.pageYOffset; x = window.pageXOffset; } else if( this.b && ( this.b.scrollLeft || this.b.scrollTop ) ) { y = this.b.scrollTop; x = this.b.scrollLeft; } else if( this.d.documentElement && ( this.d.documentElement.scrollLeft || this.d.documentElement.scrollTop ) ) { y = this.d.documentElement.scrollTop; x = this.d.documentElement.scrollLeft; }
	return {x:x, y:y}; 
	};
	
	this.ttphh = function() {
		var tmp = this.d.getElementsByTagName('footer')
	return this.b.offsetHeight - ((tmp.length>0)?tmp[0].offsetHeight:0);
	};
	
	///////////////////////////////
	// ini
	// this.za.msg('dbg','zScrll','i am '+this.n+'(zScrll)');
	// console.log('i am '+this.n);
	this.d = document;
	this.b = this.d.getElementsByTagName('body')[0];
	
	window.scrll = this;
	this.scrll = this; // loop 'cos too lazy
	this.chck();
	zlo.ee(window,'scroll',this.chck);
	
	this.totop = false;
	this.totoph2 = 0; 
	if(this.totop = document.getElementById('totop')) {
		this.totop.onclick=this.totopff;
		this.totoph2 = this.totop.offsetHeight;
		this.totop = this.totop.parentNode.parentNode;
	} else {}
	
	this.totophhset();
	this.za.ee('upd',new Array(this,'totophhset'));
	// console.log(this.totophh);
	
};

////////////////////////////////////////////////////////////////
if(typeof(zlo)=='object') {
	zlo.da('zScrll');
} else {
	console.log('zScrll');
}
