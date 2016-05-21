(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 979,
	height: 652,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.RFUL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A652").s().p("AgLAIQAFgGAGgDQACgDACgEIACgBIAIgCQgOALgNAMIACgEg");
	this.shape.setTransform(19.8,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006739").s().p("AB+KeQCRgYA+hRIABgDIABgGQABgGALgWQAUgmAHg4QADgVAEhQQAEh2AbhyQAIgkAKgkIAkhyQAWhGAIgwQAbiNgyhiIgIgNIgGgKQgKgQgPgTIgTgXQgMgOACgJQABgEAEgCQAIgHAQANIACABQBDA/AaBhQAYBdgTBkQgGAjgXBMQgmB+gSBMQgaBygEBgIgFB1QgGAvgMAkIgFAGQgQAagVAUIgFAAIgXAXQgeAVgpAPQgkAOgvAJQgeAFg5AHQgyAGgcABIgfACQBdgGA5gKgAneGEIgZgoQgUglgHghQgCgSgBgXIgBgOQgYkCA2kUQAMg9AMgpQARg2AWgrQAdg1AqgsIALgLQAOgNAPgLIAUgPQAQgMASgKIACgCQALgFAFACIAEACQADADAAAEQADAHgDAGQgFAHgPAKQgSAJgPANQgGACgEAFQgRANgPARIAAABIgCABIAAABQgIAOgNALIgBAAIAAABIAAAAQgfAogYA0QgnBZgTCQQgaC1AFC9IACAhQABAaADAZQAEA1AJAvIAFAYQAGAfAJAcIACAFIABAMIgQgig");
	this.shape_1.setTransform(54.3,77);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#018647").s().p("AhELTQgJgBgFABIhGgLQg+gJglgSQgRgHgkgYQgvgegZgVIgTgUQgLgOgKgRQgOgZgXgsIgJgTIgBgMIgCgFQgJgcgGgfIgFgYQgJgvgEg1QgDgZgBgaIgCghQgFi9Aai1QATiQAnhZQAYg0AfgoIAAAAIAAgBIABAAQANgLAIgOIAAgBIACgBIAAgBQAPgRARgNQAEgFAGgCQAPgNASgJQAPgKAFgHQADgGgDgHQAAgEgDgDIgEgCQgFgCgLAFIgCACQgSAKgQAMIABgDQAIgOAbgWIAYgSQAbgSAXgMQAOgHANgEQApgOA4ABQAhAAA/AIQBBAIAvAIQAlAHAaAHQAaAIAXAIQA/AZAtAoQApAkArBEIgCgBQgQgNgIAHQgEACgBAEQgCAJAMAOIATAXQAPATAKAQIAGAKIAIANQAyBigbCNQgIAwgWBGIgkByQgKAkgIAkQgbBygEB2QgEBQgDAVQgHA4gUAmQgLAWgBAGIgBAGIgBADQg+BRiRAYQg5AKhdAGQgYgCgUgDg");
	this.shape_2.setTransform(54.3,72.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.6,145.6);


(lib.RFLL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01A652").s().p("AgGgGIgBgGIAHgBIAAAAIAIgEQgCARgEAGQgCAHgDAFIgDgYg");
	this.shape.setTransform(101.7,78.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#018647").s().p("AiMIbQgjgFgcgPQgYgNgOgTIABABQAEgKgDgOQgCgHgDgJQAAgDgNgVIgHgLQgIgQgLgjIgYg5IgCgHIgSgsIgDgOIgDgDIgDgQQgEgJgCgJIgBgGIgCgIQgVg+gNg9QgFgZgDgYQgFgWgEgXIgBgDQgFgTgGgZIgGgeIgDgMIgQhSIgCgRQgCgEABgFIgEgUIgLg+IgBgWIgDgWIgBgQQgFgwgBgsIAAgpIAAgHIABgDIgDgIIgHgUQAKgDAPACQAJABAeAOQAXAKAnAMQAPALAWALIA1AZIAfATIAhAVQAsAbA+AQQAmAKBKAMQA0AIAaADQArAEAkgDQAhgCATgMIALgHQAIgDASgDQAPgEAVgMIAjgTIApgPIAAALIAHABQALADAIAHIAFAlIACAWQAQBGAEAsQADAWAFBHIACAcIAAAKIADA2IACAWIAAAKIACAwIACBeIAAAQQAAAqAPARIgEAEQgEAGgCASIgHAiQgKAqgTAmIgSAfIAAARQgYAqgZAUQglAfhBASQhBAShGACQgVABgrgBIhAAAQgtAEgWABIgiABQgSAAgPgCg");
	this.shape_1.setTransform(50.8,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006739").s().p("AGUH+IABhEIAAgLIgBgRIASgfQAUgmAKgqIAHgiQACgSAEgGIAEgEQgPgRAAgqIAAgQIgCheIgCgyIgBgKIgBgUIgDg2IAAgKIgCgcQgFhHgDgWQgFgsgQhGIgCgWIgEglIgFg9IAFgBQAQgEAOAJQAJAIAHARQAIAUAEAUIAGA4IAAATIAAABQAUBkANBoIAGBxQgBAcgDAiIgKB2QgCATAFAIIAGAHIgCABIgHABIABAGIADAaQADAtgPAtQgRA6gmAuQgSAWgUATIAIgIgAj0ICQgDgCgDgEIgFgIIgHgHQgPgVgPgaIgZgwQgBgEgEgGQgMgXgQgoIgUg2QgKgagIgbIgFgSIgCgEIgMgnIgEgOIgGgXIgBgKIgMhBIgEgQQgIgWgGgbQg5jhgFjrQAAggARgEQAHgCAGAFIACABIACgDIACAEIAHAUIADAIIgCADIAAAHIABApQABAsAEAwIACAQIACAWIACAWIALA+IADAUQAAAFACAEIACARIAPBSIAEAMIAGAeQAFAZAGATIABADQADAVAGAYQADAYAFAZQAMA9AWA+IACAIIABAGQACAJADAJIAEAQIACADIAEAOIASAsIACAHIAXA5QALAjAJAQIAGALQANAVABADQADAJACAHQADAOgEAKIgBgBg");
	this.shape_2.setTransform(51.1,51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,108.6);


(lib.RFFOOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#998642").s().p("AgDDCQgYgEgPgJQgJgFgQgNIgJgJQgJgJgFgIIgDgLIAAgEQgCgMACgQQADgZAHgYIADgMIACgFIAKgcQAJgUAIgRQAKgWAJgOQAOgVATgZIAEgFQAbggAXgPQARgNARgFQAPgFAOAAQAKAAADAEQAFAEABAIQACATgIAZQgEANgNAdQgJAXgJAqIgCAKQgIAlgGAnQgCAKgBAKQgIAzgGAzIgGAEIgFADQgRAHgVAAIgRgBgAiDBIQgJggAFgeQAEgRAIgWQAJgWAJgRQASgdA0gwQAbgZAQgLQAMgIAMgEQgOAJgOAQIgaAfIgNAQQgRAWgNAZQgQAcgNAgQgVA1gHA5QgGgMgDgMg");
	this.shape.setTransform(17.1,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#018647").s().p("AobFAIg/gSIADgEQADgIACgTQAGg5AMhQQAKg+AMgiQAQgmAFgSQAMgigEgaIAAgBQgDgWgMgKIgFgFQgNgHgVACQBQh3Bmg4QAqgXA4gSQAqgNAGgKQCkgGCkgCIBFgBQAxgBAKAEIgCACIgBABQAMAEBFAGIBkAIQALALAVAIIAdAKQAQAHAWAUQAQARANARIANgFQAuB/AQBNQARBYAACOIgBBIIggASQgFADheAfQheAlioATQiPARiiAAQjuAAjNgzg");
	this.shape_1.setTransform(86.4,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006739").s().p("Ak8FuQiagYhOgfIgHABQgXADgYgDQgZgEgRgIQgRgJgcgcQgPgPgEgLQgDgFAAgGQgagPgMgiQgKgbACgpQABgXACgKQAKg4ApgyQAdgkA4gwQASgOAKgGQAXgOAmgHIANgBIAggtQBEhcBog4QBVgtA6AAQAMAAAGAFIAFAJQgHAKgpANQg4ASgqAXQhmA4hQB3QAVgCAMAHIAGAEQAMALADAVIAAACQADAagLAhQgGAUgPAkQgMAigKA+QgMBRgGA5QgCASgEAIIgCAFIA/ARQDNAzDsAAQCjAACQgQQCngTBfglQBeggAFgDIAggSIABhIQAAiNgShYQgPhOgvh+IAFgMQAGgMgBgHIAOgfQAMAGAKAjQAPA3AGAPQAqBkAOCFQAHBHAABsQAABXgMANQgJAIghABQiKAvhzAWQi6AkjjAAQiqAAi4gdgAnwhrQgRAGgSAMQgXAQgaAfIgFAFQgVAZgNAUQgJAOgKAVQgJASgIAVIgLAcIgBAFIgDANQgHAXgDAZQgDARACALIABAEIADAMQAEAHAJAKIAKAIQAQAOAIAFQAPAJAZADQAhAEAXgKIAGgCIAGgEQAFg0AJgzQAAgKACgJQAGgnAIgnIADgKQAIgqAKgWQAMgcAEgOQAIgYgCgTQgBgJgEgEQgEgDgJAAQgPAAgOAEgApChiQgRALgbAZQg0AvgSAcQgJAQgJAWQgJAWgDAUQgFAeAIAfQAEANAFALQAHg5AWg3QAMgfARgdQANgWARgXIAMgQIAdgeQAOgQANgKQgMAFgMAIg");
	this.shape_2.setTransform(75.9,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.7,79.2);


(lib.RBUL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01A652").s().p("Ai7JrIADAAIBIgLQAwgJAlgOQAngPAegVIAZgYIABAAQgKAMgKALQgsAqhHASQgsALhLAFgAC3pCIADAEIABABIgEgFgACHpvIACACIAEAEIgGgGg");
	this.shape.setTransform(93.9,82.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006739").s().p("AAjKzQBCgFAugFIAZgEQCVgZA+hTIACgCIABgHQABgGALgWQAVgnAHg5QACgVAEhRQAFh4AbhzQAIglALglIAlh1IANgqQALgsAGgiQAJgvABgrQAAhKgZg8IgMgaIgIgOIgGgJQgLgSgOgSIgUgYIgHgJIAAgGQABgDADgCIAIAFIAGAGIAQAQIAFACIAUAVIAFAFIABABIAGAHQAbAeALAPQAHAIAGALQAKAYAGAaQARBbgLBGQgMBIgeBoQgeBmgUBlQgUBjgBBDQgBBEgEA7QgFA6gQASQgRARgCADQgQAbgWAUIgEAAIgBAAIgYAYQgfAVgoAPQglAOgxAJIhIALIgCAAIgOACQgzAGgcABIgNABIAAAAIgWAAIASgBgAnWGjIgcgVQgVgNgXgGIACAFQgQgegIgXQglhigDkBQgDkCBcjKQBOiqBpgeIAPgFQALgCALAAIAAABQgkAJgkAlQgSATgRAZIgdArQgeAsgIAZQgUA6gOA3QgPA7gIA5IgEAdIgBAQIgBADQgHBPgDBYIgCA9IgBA2QAACaATA/IAJAcIAsBgIAGAMg");
	this.shape_1.setTransform(60.5,76.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#018647").s().p("ABCLiQg1gDgXgDQgsgFgigKQglgKg3gZIgLgFQgSgGgOgGIgSgKIgfgNIgQgGQgBgFgGgJQABAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgQgWgVgSQgrgkglgpQgggjgkgfIgshgIgJgcQgTg+AAiaIABg2IACg9QADhYAHhPIABgEIABgPIAEgeQAIg4APg8QAOg3AUg5QAIgZAegtIAdgqQARgaASgSQAkglAkgKIAAAAQgLAAgLACIgPAEQAvgdA3gNQBKgSBNgGIB0gJIAfgBQAygDAsARQAbACAeAMQAVAJAiATQBUAvA5AtIAOARIATAVIAHAHQADADADgBQgDADgBADIAAAGIAHAJIAUAYQAOASALARIAGAKIAIAOIAMAaQAZA8AABKQgBArgJAvQgGAigLArIgNArIglB1QgLAkgIAlQgbB0gFB4QgEBRgCAVQgHA5gVAnQgLAWgBAGIgBAHIgCACQg+BTiVAZIgZAEQguAFhCAFIgSABIAWgBIAAAAIANAAQAcgBAzgHIAOgBIABAFQgDAIgHAGQgIAIgLADQgKADgQAAIgSgBgAnRFmIgIgeIgIgCgAnFjgIAAABIABgDIgBACg");
	this.shape_2.setTransform(61.2,73.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.1,147.9);


(lib.RBLL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AAHFXIAAAAIgBALgAAGlEIgGgKIAAgGIgHgMIAOAcIgBAAg");
	this.shape.setTransform(64,55.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#018647").s().p("Ag3IgQgTAAgogKQgrgKgOgKQgegVABgLQADgWgEgJQAbAfABgEQgQgvg9iNQhHimgkhdQiLlhgJjeQAaAZCEAmQC7A1AwASQAzATBsAWQBfASAQAAQA9AADyh0IAcDoQARCZAABQQAACsgUCAQgKBBgMApIgwA8QgTAXgTALQggASiKAUQg4AIhqABIhlgBgABXFlIACgLIAAAAgABPlRIADAHIAFAJIABAAIgPgcIAGAMg");
	this.shape_1.setTransform(55.8,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006739").s().p("AHIICIABhRQANgpAKhBQAUh/AAiuQAAhOgSiaIgbjnIACgCQADgCAJAAQAkAEALA5QAIAkAMBxQAPBmAIBWQAGA3AAAVIgIByIgHBMQAAAMAKAOIgJACIAEAgQAABIgWA1QgZA8g8A2gAjPHhQiSjAh3mkQgniGgdiLQgYhsABgJIAzAHQAKDdCKFhQAkBdBICmQA8CNAQAvIAAABQgEAAgXgbg");
	this.shape_2.setTransform(56.5,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,109.8);


(lib.RBFOOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#018647").s().p("AmVFhQhvgPhigcIADgFQACgGACgMIABgIQAGg5AMhRIAEgXQAJgtAJgcQAQgmAGgSQALghgEgaIAAgCQgCgVgMgLIgGgEQgNgHgYACIgGACQA6hWBMg9QBthVA6gLQAHgCAWgBQAJAAAGgIQAYgCAigBIBsgDQCTgDA5ABIAzACQATgDAXAAIBIgBQA2gCANABQALAAASAEIABAAIAIADQA5AMAtAjQAAAGAGACIADAAIAIAHQAMAMAFAHQAEAHAGAQIAGAJIABADIAKAZIAGAQQAkBiAMBYQANBVAACpQAAAXgZAQQgSALgpALQimAqg3ALQizAjifAAQjRAAiogYg");
	this.shape.setTransform(86.1,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006739").s().p("AjoF/QhlgPjXg1IgTAEQgXACgYgCQgZgEgRgJQgOgGgUgUIgLgLQgPgPgEgKQgDgFAAgHQgagPgMghQgKgbACgpQABgYACgKQAKg3ApgyQALgNAOgPIAYgYIAkggQASgPAKgFQAXgOAmgHIADgBQAthGA2gwQBShJBSgjQA8gaApAAQANAAAFAFQADADACAHQgFAIgKAAQgVABgIABQg6AMhsBVQhNA8g6BWIAHgBQAXgDANAHIAGAFQAMAKADAWIAAABQADAagLAiQgGAUgPAkQgKAbgIAuIgEAXQgMBQgGA5IgBAIQgCANgDAGIgCAFQBhAbBvAQQCoAYDQAAQCgAACzgjQA4gLClgrQApgKATgMQAYgPAAgYQAAipgMhUQgNhYgkhjIgGgPIgKgaIgBgDIgFgJQgGgQgFgHQgFgHgMgMIgHgGQAEgBACgDIACgFQADgHAGgHIACgDIADgJQAIgEAKABIAEAFIAIAIIAIAHQAEAEAEAGQAMATAJAVIAEAHIABAEIAmBnQAVA3AIB+QAJB7gBBFQAABNgIAPQgDAFggAKQh+AohfAVQjlAyjZAAQiqAAh6gTgAn2hmQgJACgIAEQgMAFgMAJIgKAHQgTAPgUAZIgRAUQgNAPgJAOQgJAOgKAWQgJARgIAWIgLAcIgBAFIgDAMQgFAQgDAQIgCARQgDAQACAMIABAEIACAKIABABQADAHAHAHIANAMQAQANAIAFQAPAJAZAEQAgAEAWgKIAIgDIAGgEQAFgzAJgzQAAgKACgKQAGgnAIgnIACgHIABgDQAIgqAKgVIAEgJIAMghQAIgZgCgTQgBgIgEgEQgEgEgJAAQgMAAgLADgApOhcQgKAGgNALIgVATQgkAhgUAXQgJAKgFAJQgJARgJAWQgJAWgDATQgFAeAIAgQAEAMAFAMQAHg5AWg3IADgJQAMgbAOgYQANgXARgWIAMgQIAZgbIAEgEQAOgQANgJQgMAEgMAIg");
	this.shape_1.setTransform(75.7,40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#998642").s().p("AgDDCQgYgEgPgJQgJgFgQgNIgMgMQgHgHgEgHIAAgBIgDgKIAAgEQgCgMACgQIADgRQADgQAEgQIADgMIACgFIAKgcQAJgUAIgRQAKgWAJgOQAKgPAMgQIAPgUQAVgZATgPIAKgHQAMgJALgFQAJgEAIgCQAMgDALAAQAKAAADAEQAFAEABAIQACATgIAZIgNAhIgEAJQgJAXgJAqIgBADIgBAHQgIAlgGAnQgCAKgBAKQgIAzgGAzIgGAEIgHADQgQAHgUAAIgRgBgAiDBIQgJggAFgeQAEgRAIgWQAJgWAJgRQAGgJAJgLQATgYAkghIAWgTQANgLAIgGQAMgIAMgEQgOAJgOAQIgDAEIgXAbIgNAQQgRAWgNAZQgOAYgLAbIgEAJQgVA1gHA5QgGgMgDgMg");
	this.shape_2.setTransform(15.7,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,0,154.2,80.5);


(lib.plates = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E4C57").s().p("AgJgdQAhAQAlALQgPAGguAGQgpAFgUAPQAMgmAogVg");
	this.shape.setTransform(578.4,317.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E4C57").s().p("AACgYIAXAOQgfAQgSATIAagxg");
	this.shape_1.setTransform(570.7,313.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E4C57").s().p("AgDgsQAJALAQAOQgjAngIAZQAAgoASgxg");
	this.shape_2.setTransform(565.1,310.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#10512D").s().p("AhHCmQAqgXBfgrQBUgmArgcIAbAFQgwAihVAnQhzA1gXAMgAjbAGQAnhmBHhQIAIAQQg+BKgvBwQgFgJgEgLg");
	this.shape_3.setTransform(569,314.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#23844F").s().p("AiQBiQglglgUglQAvhxA+hKQAaAqAhAhQgSAyAAAmQAJgWAkgqQAMAMAWAPIgcAxQASgRAhgSQARAKAYALQgoATgMAoQAUgPAqgFQAugGAQgIQARAFAVAEQgrAchUAlQhfAsgqAXQgtgdglglg");
	this.shape_4.setTransform(568.1,314.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E4C57").s().p("AgIAWQgjgCgQAAQgHAAASgOQAUgOAcgQQAbAYAjAYIgRABIg1gDg");
	this.shape_5.setTransform(523.2,265.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E4C57").s().p("AgGgwQANAXALAOQgYAjgLAZQAHhIAEgZg");
	this.shape_6.setTransform(512.4,254.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4E4C57").s().p("AAKgZIANAMIgtAoQAQgYAQgcg");
	this.shape_7.setTransform(517.8,261.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#10512D").s().p("AgcC+QCGglBVgnIATAMQhcAsiCAkgAjRAGQArhzBGhgIAHAQQhBBYguB0g");
	this.shape_8.setTransform(516.5,260.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23844F").s().p("AjDAPQAuh0BAhYQARApAaAoQgEAZgHBKQALgZAaglQATAcAYAZQgRAdgOAXIAsgnQARAPANALQgdAQgTAPQgTAPAHAAQAQAAAjACIA3ACIARgBIA/AsQhVAniGAlQhNhPhfhgg");
	this.shape_9.setTransform(516,260.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E4C57").s().p("AgRgsIAjALQgPApgJAlQgIgtgDgsg");
	this.shape_10.setTransform(370.2,137.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4E4C57").s().p("AgnhcQAlAVAqASQgLBVAJA9Qg3hygWhHg");
	this.shape_11.setTransform(352.6,134.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E4C57").s().p("AgSg3IAwAHIgHAJQgXAdgLAOQgRAaAAAaQgCg4AMg3g");
	this.shape_12.setTransform(385.4,142.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#10512D").s().p("ACJDxQCciQBXiCIAigBQhUCGijCVgAluhMQgihZgMhTQARAOAOALQAYB9BLCrIgLAGQgrhMgehPg");
	this.shape_13.setTransform(378.1,141.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#23844F").s().p("AkDBnIghghIALgFQhLirgYh9QApAeAuAaQAXBHA5ByQgKg7ALhXQA4AYA9ASQADArAIAvQALglAPgrQA6AOA3AKQgMA3ABA4QAAgaASgZQAKgPAZgeIAHgJQBrAOByAAIA4gBQhXCCicCPQjphHikg6g");
	this.shape_14.setTransform(378,142.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4E4C57").s().p("AgugiIAxgFQAVAnAXAoQgxglgsglg");
	this.shape_15.setTransform(238.3,136.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4E4C57").s().p("AgegtIA+gNQgvBLAAAqg");
	this.shape_16.setTransform(274.6,131.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4E4C57").s().p("AgTgjIAfgGIAIBTQgWgqgRgjg");
	this.shape_17.setTransform(258,133.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#10512D").s().p("AnAhDQAYAIASAFQAdAuAsA8IBNBrIgZAEQhviMg4hagAFkgoQANggAnhPIApgLIg2BzQgcA+gJAzIgkAHQAHg0Abg9g");
	this.shape_18.setTransform(254.7,136.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#23844F").s().p("AlNAxQgsg9gegtQBMAVBcAAIAcgBQAsAlAzAlQgXgmgVgoQBIgKBjgRQARAkAYApIgIhTIB6gZIAPBoQAAgoAxhNQBngXBKgUQgnBQgNAfQgaA9gHA0QiKAXm5BAIhMhrg");
	this.shape_19.setTransform(254.8,136.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4E4C57").s().p("AhngFQAhgVAbgWQBMA5BHAoQhygVhdghg");
	this.shape_20.setTransform(70.7,262.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4E4C57").s().p("Ag5gSIAVgXQAvAuAvAlQg8geg3geg");
	this.shape_21.setTransform(78.6,253.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E4C57").s().p("AgngdIAQgWQAbBCAkAlQg0g0gbgdg");
	this.shape_22.setTransform(81.9,248.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#10512D").s().p("AAEDfIgEAAIAAgGIAAgBIgCACQgDACAAADQifgKh1gwQAWgDAVgGQA3ATBJAPQAoAJBVAPIAAADIgLAIgADJhEQgUgsgfhRIAPgfQAoBoAQAkQAgBMAeAwIgBABIgVAMQgeg1gehEg");
	this.shape_23.setTransform(70.8,251.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#23844F").s().p("AgbDQQABgDADgBIADgCIgBABIAAAFgAgEDHQhXgPgogIQhJgPg4gTQBGgSBBgoQBdAjByAVQhHgohMg7QAggaAgggQA1AeA/AdQgvgkgyguIAfgmQAaAeA2A0QgkgkgchEQAjgyAdg5QAfBQATAtQAeBGAfAzIAVgNIkJCxg");
	this.shape_24.setTransform(72.9,253.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E4C57").s().p("AgQAJQALgMAQgRIAOAQQgZAGgRAQQgEADgCAAQgDAAAKgMg");
	this.shape_25.setTransform(467,203.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4E4C57").s().p("AgKhKQAVAjAUAcQgvA+gOAYQAGhUAOhBg");
	this.shape_26.setTransform(454.9,189.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4E4C57").s().p("AAPghIAFAIQgUAZgTAiIAihDg");
	this.shape_27.setTransform(461.5,198.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#10512D").s().p("AhkEkQA2gTBogUQCHgaAmgKIAYASQgrALiDAZQhrAVg4AUgAj+gkQAQiRBEiCIAHAPQg7B0gXCRg");
	this.shape_28.setTransform(461,194.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#23844F").s().p("AhcEgIiWlCIAJACQAXiRA7h1QAjBSA5BcQgOBBgGBTQAOgYAwg9QAUAfAdAiIgiBFQARgiAWgbQAYAdAVAZQgRAQgLAOQgKANADAAQACAAADgEQAUgPAZgIQBIBPBKA3QgmAKiHAZQhoAUg2AUg");
	this.shape_29.setTransform(459.8,194.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4E4C57").s().p("AhWgPQAZgMAigSQA2A3A8AkQhXgOhWgvg");
	this.shape_30.setTransform(132.4,194.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4E4C57").s().p("AglgdIAmgfQAMBFAZA0Qgqgrghgvg");
	this.shape_31.setTransform(154.3,180.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4E4C57").s().p("AgwgWIAkgXQAfAxAeAqQgxgcgwgog");
	this.shape_32.setTransform(145.5,186.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#10512D").s().p("AjHD8QhOgbhLgxQAZgJAWgJQB+BMCOAdIgEAYQhXgLhHgYgAEgjwIAmguQARCEAKCGIgqAEQgNiEgKhcg");
	this.shape_33.setTransform(142.3,182.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#23844F").s().p("Ag0D1QiNgdh+hMQBCgbA1gZQBYAxBYAOQg8gkg4g5QA0gbA5ghQAwAoAyAcQgfgqgggxQAkgYAagUQAhAxAsAqQgZgzgMhHQBghMBHhSQAKBcANCEIAYgCIl2Eng");
	this.shape_34.setTransform(143.8,184.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7F56A3").s().p("AASgjQAdgFARAHQARAHgLAOQgTAWgyAHQg3AHgUAOQASg7BKgOg");
	this.shape_35.setTransform(579.7,316.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7F56A3").s().p("AgkgIQBDhdA4AAQAJAAAFANQADAJAAALQAAAzhTArQgtAXgWAMQgnAVgSAUQAqhNAZghg");
	this.shape_36.setTransform(578.6,305.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7F56A3").s().p("AgWgQQAVg7AVAAQAIAAAHAHQAHAIAAAJQAAARgkAnQgnAvgIAYQAAgqATgyg");
	this.shape_37.setTransform(567.2,307.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7F56A3").s().p("AhFAtQgkgDgQAAQgHAAASgOQATgPAegOQBPgtA5AAQAcAAALAGQAJAEAAAMQAAAWgfAUQgoAdhDAAIg2gCg");
	this.shape_38.setTransform(529.3,263.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7F56A3").s().p("AgxgeQAdheA+AAQAjAAgEAZQgEATgeArIg8BPQgmAzgOAgQAKhuAOgtg");
	this.shape_39.setTransform(518,247.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7F56A3").s().p("Ah0A9QAohDAcgmQBWh1BlgBQAZAAAGAFQAJAFAAAXQAAAcgSARQgLALgwAcQiMBSiMB+QAQgYAuhOg");
	this.shape_40.setTransform(533.4,247.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7F56A3").s().p("AiYA7QATgYAfgbQBhhQBWAAQAbAAAbAKQAbAJAAAJQAAAKgOAPQgOAOgNAFQgnAShmAJQhcAJgpAgQgGAFgCAAQgCAAALgOg");
	this.shape_41.setTransform(480.6,198.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7F56A3").s().p("AAciKQAPAAANAIQASALAAAUQAAAjg7BPIhYB8QAWkVBPAAg");
	this.shape_42.setTransform(459.2,183.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7F56A3").s().p("Agwg6QB3iRB3AAQAJAAAHAJQAHAIAAALQAAAWgdAXQgoAghEAtIhsBHQiABag0BgQBRijBThjg");
	this.shape_43.setTransform(480.8,181.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7F56A3").s().p("AhIiaQAohQAxg1QAtgtAagBQAdABAQATQAPATAAAcQAAAegTAgQhpCxgqBTQhNCUglCBQgxkPBtjYg");
	this.shape_44.setTransform(382.9,108.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7F56A3").s().p("AgeBdQgjhfAAhJQAAhJAkg5QAdguASAAQATAAAPAtQAOArAAAwQAAAvgVCIQgSBzAKBFQguhkgVg7g");
	this.shape_45.setTransform(352.7,118.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7F56A3").s().p("AhvgLQAqhTBEg2QA6gxAzgDQAygEAAAtQAABPhnBDQg5AigdASQgxAhgYAgQgZAdgKAQQgSAaAAAaQgDhzAxhhg");
	this.shape_46.setTransform(398.3,127.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7F56A3").s().p("AguBOQhfhyAAhwQAAgoAIgbQALglAaAAQAbAAAMAYQAHAMAUBFQA1C7B3DVQh6hbhChUg");
	this.shape_47.setTransform(228.7,115);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7F56A3").s().p("AhRB8QgJhEAAgyQAAhsAxhKQAog7AiAAQAeAAAQAkQAMAdAAAlQAABMhPB9QgqBHgKAUQgZAuAAAgIgQhxg");
	this.shape_48.setTransform(279.6,113.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7F56A3").s().p("AgkCeQgwimAAiZQAAhbAUhkQAUhlATAAQAhAAARBBQAOA2AICBQAFBPAIDOQAKDQAPCmQhPiSgqiWg");
	this.shape_49.setTransform(251.4,92.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7F56A3").s().p("AhFBMQiEh0AAiMQAAgNACgFQAEgKANAAQAIAAAFAFQApAsAyBCIBRBuQBlCEBiA8QiXgah4hrg");
	this.shape_50.setTransform(120.9,178.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7F56A3").s().p("AgdBOQgyhcAAhVQAAglALgnQANgyAWABQAFAAALAJQAMAKACAHQAUA9APCXQAOCMAiBHQhEhBgphSg");
	this.shape_51.setTransform(150.1,164);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7F56A3").s().p("Ah6gZQguhlgbhoQgXhUAAgsQABgHAHgGQAKgIAJAAQAMAAALAKQALAJAEALQA8B/BsD3QBmDWBmCMQjWh7h/kZg");
	this.shape_52.setTransform(128.6,153.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7F56A3").s().p("AjHgtQgmgzACgnQABgQAHgHQAIgGALAHQBEAsCaB4QCIBqBWAxQlCg6hxiVg");
	this.shape_53.setTransform(57.5,251.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7F56A3").s().p("AjmiDQgkhOAJgwQAEgUAKgEQALgEALAOQBQBkCSDBQCECkB7BhQl9i5htjlg");
	this.shape_54.setTransform(58.4,229.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7F56A3").s().p("AgiAjQhJhmABhdQgBgVADgGQAEgKAPAAQAbAAAUAsQANAcAXBQQAxC1A9A+QhkhigqhBg");
	this.shape_55.setTransform(75.2,234.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#355E2E").s().p("ADHIHIAAgEQkXACikiQQiqiVgUkfQgCgqgVhJIgih5QgiiPBAgxQBCgzBzAsIBWAmQAvATAYABQCbAKBpBMQBYBABCB6QAlBEBCCoQA/ChAvBPIgrAZQgvhRg9idQhBinggg+Qg9h1hRg+QhhhIiOgJQgpgChcgsQhTgng2AJQgyAGgLArQgJAjAQBEIAjCAQAWBPADAtQAUE1DGCCQBNAzBuAeQA/ARCIAXQAAANgCAEQgDAIgKAAIgBAAgADAH3IAGAIIAAgLIgGADg");
	this.shape_56.setTransform(50.4,222.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#67A371").s().p("ADLHzQmhgTiIkgQgrhbgOh1QgGhpgEgQIgihrQgYhJgFgtQgPiJB/AAQAvAABSAnQBTAnAnAAQCMAABlBOQBUBABDB/QAlBGBDCpQA+CeApBHIkWC5IgBgCg");
	this.shape_57.setTransform(50.8,224.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#006739").s().p("AiOKHQiFhHhehzQjXkGBGloQAJgvgChfQgDh9ACglQAJjDB5g9QAdgMANACQAaAAAbASQASALAuAoQCCBwCLBZQBZA5B/BJQBbA5AqA9QAyBJAdCMQAdCIAZEcIgxAEQgXj1gUh4QgWiCgihGQgfhCg7guQgggahxhCQjviNiaiJQg2gwgMgHQgXgNgaALQhUArgSCIQgFAqAECUQAEBZgKA5QgFAggLA1QgpETC+DnQC2DcEeA7IgFAcQiMgQiChGg");
	this.shape_58.setTransform(125.1,138.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#67A371").s().p("AhfKAQh1g7hbhcQjPjRAAkSQAAhIAPhEQAPhEAAhDQAAgdgDg6QgCg6AAgcQAAiSBHhRQAfgkAjgHQAlgHAeAbQC+CmDCB3ICBBMQA9AlAiAdQBQBFAlCJQAlCGAeFWIl5EpQh1gPhwg7g");
	this.shape_59.setTransform(124.8,138.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#006739").s().p("AjJEdQA/grB+g4QBygzA0gpQBmhPAeiWQAMg7gGgqQgFgqgSAAQgLACgQAKIggARQgLAFhVANQhVAMg7AeQjJBghaFBIgKgBQAUjjCRiHQCHiADGgLQASgBAggUQAigUAUgBIABABIABAAQAmACAOA0QAOAwgNBJQgNBLgkBDQgpBNg7AuQg3Ash2A0Qh8A4g6Aog");
	this.shape_60.setTransform(576.1,306.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#67A371").s().p("Ak+DiQAdjJCCiHQCLiTDDAAQATAAAkgUQAkgWAMAAQAWAAALAXQAIAQAAAWQABCQgzBdQgqBMhVA3QgvAfhyA0QhuAxg1Amg");
	this.shape_61.setTransform(575.3,306.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#006739").s().p("AlOExQCaglBVgdQBvgoBRg2QCvh1CFkSIAAgBQgEg2hEAFQhTASggABQgJAAgTgFIgmgKQhQgVg/AJQhhAMhdBPQhxBfhKCbQgmBRgbBbIgLgDQAFhPA7h9QBJiWBohaQB/huCNAFQAsABAzANIA1AOQANAAAwgKQA+gNAhAFQA0AHASAyQAHASgCAOQgBAKgFAKQiPEbivB2QhTA4hwApQhaAgigAmg");
	this.shape_62.setTransform(536.1,251.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#67A371").s().p("AmvDRQArjJB9iZQCSizCygBQAyAAAxAPQAyAOAOAAQAVAAArgKQArgKAVAAQAlAAAXAWQAUAUAAAdQAAAOhaCLQhbCJgaAbQhjBliZBAQhqAsi9Atg");
	this.shape_63.setTransform(535.5,251.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#006739").s().p("Ak3G6QA4gTB7gYQCEgZA4gRQDVg+ALiaQAVjLBPiUQAqhQAEgJQARgqgGgqQgFgbgQgRQgkglhEAWIg6AVQgiANgWABIgEAAIgXgFQkCg+iuCqQiZCUgqENIgTgCQAZjdB4ieQCLi4DSgOQBpgGBHAeQAWgBA5gYQA2gWAfACQA1ACAeAfQAgAhACA8IAAADQgDAngVAxQgEAJgqBWQhECKgMB/QgMCBg8BKQgyA+hfAiQg2ASiJAbQiJAbhLAbg");
	this.shape_64.setTransform(482.2,179.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#67A371").s().p("AnNByQAZjbCCiiQCRi0DJAAQAqAAA+ANIA4AMQAYAAA1gWQA2gXAeAAQAtAAAcAdQAcAdAAAzQAAAigWAxQgNAdgkBEQhKCWgKCaQgHBphCBAQg2A0hmAgQg3AQiJAbQh9AYg7AWg");
	this.shape_65.setTransform(481.7,179.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#006739").s().p("Ag1KyQHGlyAnkrQAMhfgehxIgYhTQgNgtgCgcQgBgSALhFQAKhGgBgnQgGiGiFgGQgkABgaAVQgrAngtAkQhKA7i8BwQiXBag7BDQhVBhAACNQABCgBvD/IgVAMQgmg4gRggQgrhTgYhoQg2jtBuiZQAsg8BMg5QAwgjBgg5QDAhzBzhkQAkggAOgHQAVgKAmgBQA5gBA0AkQBTA3gCBxQAAAhgKA7QgJA8AAAVQABAgAZBFQAaBJAGA6IAEBJIgBAjIgEAiQgIBDgYBDQg6CdiPCfQhmBwiwCRg");
	this.shape_66.setTransform(383.1,109.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#67A371").s().p("AlWGSQg4highhnQgmh1AAhjQAAh/A/hdQAyhJBthIQBAgrCShVQCDhSBUhSQAdgdAsgEQApgEApATQBfAtAABuQAAAggKA9QgKA9AAAcQAAAcAfBaQAfBZAABeQAADSilDXQh0CXjiC3g");
	this.shape_67.setTransform(383,109.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#355E2E").s().p("Ak3KPQh7iThEiPQg7iIgIhIQgJhQAohgQAZg/BqjIQCIj/BmjUQA2huBoAlQBZAfB2CJQBmB3BkCpQBdCeAxCBQAtB6gUB6QgNBSg4B5Qg/CIgNAwQgbBmAhBaIg7AZQgshoAYhsQAPg/A+h8QA+h8APhIQAah0grh0QhLjMigjxQi5kYhpgGQgqABgUASQgVATgjBJQg3B3gwBmQhbC+h0DYQhmC6CQEAQAsBPBkCLQBtCZAmA+IgLAJQhrhtg5hFg");
	this.shape_68.setTransform(252.4,83.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#67A371").s().p("AmRHlQiLjTgBinQAAhAAKgjQAKgfAnhIQCzlMCUk9QA3h3B2BHQBnA8CCC3QB0CiBYC4QBWC2ABBNQAABegmBmQgMAjg/CFQgtBhgKA+QgPBXAjBSIobBIQiwjXhQh4g");
	this.shape_69.setTransform(253,85.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,609.5,338);


(lib.LFUL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AgEKzQBTgGA0gIQCVgZA+hSIACgDIABgHQABgGALgVQAVgnAHg6QACgUAEhSQAFh4Abh0QAIgkALglIAlh0QAWhIAIgwQAJgwABgrQAAhKgZg7IgMgbIgIgOIgGgKQgLgRgOgSIgUgXIgHgJIAAgGQABgEAEgDIAAAAIABABQAWAVALAEQALAPAVAXQAbAdALAPIANATQAKAZAGAaQARBagLBHQgMBHgeBpQgeBngUBjQgUBkgBBEQgBBDgEA7QgFA7gQAQQgRARgCAFQgQAZgWAWIgEAAIgBgBIgYAYQgfAVgoAPQglAOgxAJQgfAGg5AGQgzAHgcABIgLAAIAAAAIgWABIASgBgAn6FmQgGgJgCgLQgDgKgFgFQgBgHgEgGIgCgDQgBgFgDgEIgCgHQgahngCjTQgEkEBdjJQBTi3BzgVQAKgCALgBIAAAAQgjAKgkAmQgSARgSAaIgdAqQgdAtgJAZQgTA5gOA3QgWBWgHBPQgNCCAACYQgBBuAKA/IAFAcQgIAWADAbQAEAeABAeIAAAAQgJgLgHgMg");
	this.shape.setTransform(56.5,75.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AgGLSIAKAAQAdgBAygHQA6gHAfgFQAwgJAlgOQApgPAfgVIAYgYIABAAQgJAMgLAKQgrArhKASQgxAMhYAFIg6ADIgRABIgLgBgAgfLKIgBAAQgYgBgUgDQgKgBgFABIgVgDIgGgHQADgbglgVIjPhzQgegRgZgWIgTgqQgIAQgKgSQgDgGgCgHQgDAFgHABQgHAAgEgGIgDgIIgCAAIgJgOIgGgHQAAgegEgeQgEgbAJgWIgGgcQgJg/AAhuQABiYAMiCQAIhPAVhWQAOg3AUg5QAIgZAegtIAdgqQARgaASgSQAkglAkgKIAAAAIgBgJQgMABgMACQA2gcBFgOQBZgSCBAFQAYABAQAEIASAAQAbABAgANQAVAJAiATQB5BEA/A+IAAAAQgEADgBAEQgBAGAFAIIAGAJIAUAYQAPASALARIAGAKIAHAOIAMAaQAXA7gBBIIADADQAAArgJAvQgJAxgWBHIglB1QgKAkgJAlQgaB0gGB4QgDBRgDAVQgHA5gVAnQgLAWgBAGIAAAHIgCACQg/BTiUAZQg0AIhTAGQgNgCgIgGgAkHKgIgNgGIAaAMIgNgGg");
	this.shape_1.setTransform(57.1,72.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,144.7);


(lib.LFLL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AAHFXIAAAAIgBALgAAGlEIgGgKIAAgGIgHgNIAOAdIgBAAg");
	this.shape.setTransform(56.8,56.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AgHgMIAHgCIAIgDQgCAQgEAIQgCAGgDAGg");
	this.shape_1.setTransform(105.3,79.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01A652").s().p("AiHIkQgkgFgdgQQgYgNgOgTQABgFgCgSQgCgQgBgDQgXgugHgdQgBgFgDgCQADgIgMgmQgPgzgPgpQgOgogdhsQgchrgJgUQgKgUgqjcIgIhJIgHhBQgFgtACgqIABgXIAAgBIAAgBIAAgGIACgDIAAgCIABgEIAAAAIAEgBQAEgBAFABQAKABAfAOQAXALAnAMQAQALAWAKIA2AaIAhAUIAgAVQAtAbBAARQAnAKBLAMQA1AJAbACIADABQBxgiBVgoQAhgPANgEIAQgEIAPgFIAQgIIAMgGQAMBuAHBPQAGBPAEAdIAMBeQAIA/gHBiQgHBkABAIQABAJgBATQgCATABALQABAMgQBEQgRBEAAAEQgaArgZAVQglAfhCASQhDAThHACQgWABgsgBIhCAAIhDAFIgfABQgVAAgQgCgAAvFrIACgKIAAAAgAAnlKIADAGIAFAKIABAAIgPgdIAGANg");
	this.shape_2.setTransform(52.6,55.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006739").s().p("AGkIjIABhQQAAgFARhEQARhEgBgLQgBgMABgTQABgTgBgIQgBgJAHhjQAHhkgHg+IgMhdQgFgegGhOQgGhPgMhvIAAgDIAOgBQAfAAAOA1QAHAZgBANQAAAUAGAnQAMBDAOCDQANBwAAANQAAATgEArQgLB4AAAKQAAAOAKALIgJACIAEAgQACBGgeBAQgcA9gzAtgAlFGhQguhcgtiXQguiWgeilQghi5gChNQgBgcAEgfQACgXADgMQABgEAOACIADgYQACgPAMAAIABgDQABgFAFAAIAHgBQABgEADgEIABAOIAAAEIAFgJQAMADgHANIgDAKIgEAPIABACIgBALQgBAFABADIgCADIAAAFIAAACIAAABIAAAXQgDApAGAtIAHBCIAIBIQAqDcAJATQAJAUAdBsQAcBsAPApQAOAoAQAzQALAmgCAIQACADABAFQAHAcAXAuQACADACARQACASgCAFQgmgsguhbg");
	this.shape_3.setTransform(52.9,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.5,106.1,116.3);


(lib.LFFOOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AASEVQgpgKgLgIQgSgOgVgBQgTACgIgCIgdgDQgWgDgzgXQgkgQgOgMQgGgKgEgBIgKgHQgDgGgJgHQgSgNgggJQgpgLgOgSQgGgHAAgLQAAhuBhiFQBfiABGAAQAVAAALAIQAIAFARAQQAVgQAagKQAZgJAUAAQAVAAARAIQAWAJABATIADgDIAXgOQAdgNApAAQBsAABBCMQAyBsAABjQAAA5gIA5QgHAzgGAKQgNAWgZAKQgyAVh5AAQhUAAhAgOgAAGgwQghB0AABXQAAAnAGAKQAEAFARAGQBBAVBkAAIA8gCIBDgEQAfgEAFgDIAIgOIAIh/QAAiVhAhaQg2hLg9AAQhoAAg3C4gAhHjfQgmAagkBDQgnBLgXAwQgZAvgGATQgEAJgCARQgBAMAAARQAAAsA9AdQAuAVAiAAQAUAAAIgHQAIgIgCgUQASihAehRQAJgYA+iCQgNgIgRgFQgSgGgKAAQgjAAgbATgAkjhpIgIARQgYAwgKAaQgQAogCAkIAAAEIgBAFQAAAFADABIADAGIABABQAEAGAdAMIAbAJQALACADgQQALgwAPgsIAXgvQANgbAQgeQAwhaAmgnQgCgCgPgEQgOgDgIAAQgVAAgvAtIgLALIgWAZIAFgHQgfAbgSAfg");
	this.shape.setTransform(39.7,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFA857").s().p("AAEDaQgRgGgDgFQgGgKAAgmQAAhYAhh0QA3i3BnAAQA+AAA1BKQBABbAACUIgICAIgHANQgFADgfAEIhEAEIg8ADQhkAAhBgWgAi0C+Qg8gcAAgtQAAgRABgMQABgRAEgJQAHgTAZgvQAXgwAnhKQAjhEAmgaQAcgSAjgBQAJAAASAGQASAFANAIQg/CDgJAYQgeBQgSChQADAUgJAJQgHAGgVABQgigBgugVgAiTBtIABgBIgEgCIADADgAkZBzIgbgKQgdgMgDgFIgBgCIgEgGQgDgBABgFIABgFIAAgEQACgkAQgoQAKgaAYgvIAIgRQARggAggbIgGAIIAXgaIAKgLQAvgtAWABQAIgBANADQAPAEACACQgmAngwBaQgQAegNAbIgWAvQgQAsgKAwQgDAPgKAAIgCAAg");
	this.shape_1.setTransform(39.2,54.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01A652").s().p("AlbFhQixgZiRg3QgEgaAAgKQABhPA3iEQBNi0CFhoQBthVA5gLQAIgCAVgBQAKAAAGgIQAYgCAhgBIBtgDQCTgDA5ABIAzACQASgDAYAAIBIgBQA2gCAMABQAMAAASAEIAAAAIAJADQA5AMAtAjQAAAGAGACIADAAIAHAHQAMAMAFAHQAFAHAGAQIAFAJIABADIAKAZIAGAQQAlBiAMBYQANBVAACpQgBAXgYAQQgTALgpALQilAqg3ALQizAjihAAQjPAAipgYg");
	this.shape_2.setTransform(81.4,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006739").s().p("AkWF/QhtgRj1g8Qg7gOgTgRQgOgLAAgUQAAgKAYhiQAYheAGgTQAdhQAvhMQAyhRA8g1QBShJBSgjQA7gaApAAQANAAAGAFQACADADAHQgGAIgJAAQgWABgHABQg6AMhtBVQiEBohNCzQg4CFAABPQAAAKAEAaQCQA2CyAaQCoAYDPAAQChAACzgjQA3gLCmgrQApgKASgMQAZgPAAgYQAAipgNhUQgMhYgkhjIgGgPIgKgaIgBgDIgGgJQgGgQgEgHQgFgHgMgMIgIgGQAEgBADgDIACgFQADgHAFgHIACgDIAEgJQAIgEAJABIAFAFIAIAIIAIAHQAEAEADAGQAMATAJAVIAEAHIACAEIAmBnQAUA3AJB+QAIB7AABFQAABNgJAPQgDAFggAKQh+AoheAVQjmAyjYAAQiqAAh7gTg");
	this.shape_3.setTransform(81.3,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.9,83.6);


(lib.LBUL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AAjKzQBCgEAugGIAZgEQCVgZA+hTIACgCIABgHQABgGALgWQAVgnAHg5QACgUAEhSQAFh4Abh0QAIglALgkIAlh0QAWhHAIgyIADgMQAGgoABgmQAAhKgZg7IgMgbIgIgOIgGgJQgLgRgOgTIgUgYIgHgJIAAgFQABgFAEgCIAAAAIABABQAWAVALAEQALAPAUAVIABACQAbAeALAOQAHAJAGAKQAKAZAGAaQARBbgLBHQgMBGgeBpQgeBngUBjQgUBkgBBEQgBBDgEA7QgFA6gQARQgRARgCAEQgQAagWAWIgEAAIgBgBIgYAYQgfAVgoAPQglAOgxAJIhIALIgQABQgzAHgcABIgNAAIAAAAIgWABIASgBgAo1FIQgkhigDj+QgDkCBcjKQBCiPBUgsQAMgHANgEQALgEAMgDQALgBALgBIAAAAQgZAHgYAUQgLAJgMALQgSATgRAZIgdAqQgeAtgIAaIAAAAIgKAfQgOAogKAoQgVBWgIBPQgHBPgDBYIgCBMIgBAnQAACaATA+IACAIIgBAIIAAAKQADAeAJAcQACAFAAAHIAAACIg2g5g");
	this.shape.setTransform(60.5,77.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("ABCLmIgWgCQAAgFgIgCIgUgGIgRgEIgagNIhegpIhfgrQgvgVgugYQgUgKgWgGIAAAAIgDgEQgJgNgNgLIgpgiIgnghIgHgFIgBACQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgCQgDADgDAAIgKgNIgDgEQgBgIgGgHQgKgNgLgJIAAAFIAAgIIAAgDQAAgGgCgGQgJgcgDgeIAAgKIABgIIgCgHQgTg/AAiaIABgnIAChMQADhYAHhPQAIhPAVhVQAKgoAOgpIAKgfIAAAAQAIgaAegsIAdgrQARgZASgSQAMgMALgJQAYgUAZgGIAAgBQgLABgLACQgMACgLAEQgNAEgMAHQAOgLAPgIQAMgSAcgJQCIgrCOgGQBhgLBYAfQAZACAbAMQAVAIAiATQBsA9A+A4QA2AcAdA5QgUgWgLgOQgLgFgWgVIgBgBIAAAAQgEADgBAEIAAAGIAHAJIAUAXQAOATALARIAGAJIAIAOIAMAbQAZA7AABKQgBAmgGAoIgDANQgIAxgWBHIglB0QgLAlgIAlQgbBzgFB4QgEBSgCAUQgHA6gVAnQgLAVgBAGIgBAHIgCADQg+BSiVAZIgZAEQguAGhCAEIgSABIAWAAIAAAAIANgBQAcgBAzgGIAQgCIBIgLQAxgJAlgOQAogPAfgVIAYgYIABABQgJALgKALQgsAqhKASQgrALhLAFQgDAIgHAHQgIAHgLAEQgKADgQAAIgSgBgAkZKDIAAgBIACABIAEACIgGgCg");
	this.shape_1.setTransform(61.2,74.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.1,148.6);


(lib.LBLL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AAHFXIAAAAIgBALgAAGlEIgGgKIAAgGIgHgMIAOAcIgBAAg");
	this.shape.setTransform(64,55.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("Ag9IbQgTAAgogJQgrgLgOgJQgegVABgMQADgWgEgIQAbAeAAgEQgPgvg9iNQhIimgjhdQhZjggjirIgBgLIgGglQADgMgEgPIgBgJQABgjgDgiQAAgJgBgIQAlAWBtAfQC6A2AxASQAzATBsAVQBeATAQAAQA+AADyh0IAcDnQARCaAABQQAACsgUB/QgKBBgNApIgvA8QgTAYgTAKQghASiJAUQg4AIhqABIhlgBgABRFgIACgKIgBAAgABJlVIADAGIAFAKIABAAIgPgdIAGANg");
	this.shape_1.setTransform(56.5,55.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006739").s().p("AHGJJIABhQQAMgpAKhBQAUiAAAiuQAAhQgRiXIgcjoIACgBQAEgCAJgBQAjAEAMA5QAHAlAMBwQAQBnAIBTQAFA5AAAWIgIByIgGBMQAAAMAKANIgJACIAEAgQAABIgXA2QgZA8g8A2gAjSIoQiRi/h4mkQgmiHgeiKIgShXIABgJIABgXIAAAGIABgBIAIgUQgCgEABgFIAAgGIAggmIAFgGQAAAXAFAWIACAOIAAABQACAFAAAGQAEARgBASIABADQADAiAAAjIABAJQADAOgDANIAGAkIABAMQAkCrBYDgQAkBdBHCmQA9CNAQAvIgBAAQgDAAgYgbgAoGpRIAAAAIABABIgBgBg");
	this.shape_2.setTransform(56.7,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-14.3,112.5,124.1);


(lib.LBFOOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AASEVQgpgKgLgIQgSgOgVgBQgTACgIgCIgdgDQgWgDgzgXQgkgQgOgMQgGgKgEgBIgKgHQgDgGgJgHQgSgNgggJQgpgLgOgSQgGgHAAgLQAAhuBhiFQBfiABGAAQAVAAALAIQAIAFARAQQAVgQAagKQAZgJAUAAQAVAAARAIQAWAJABATIADgDIAXgOQAdgNApAAQBsAABBCMQAyBsAABjQAAA5gIA5QgHAzgGAKQgNAWgZAKQgyAVh5AAQhUAAhAgOgAAGgwQghB0AABXQAAAnAGAKQAEAFARAGQBBAVBkAAIA8gCIBDgEQAfgEAFgDIAIgOIAIh/QAAiVhAhaQg2hLg9AAQhoAAg3C4gAhHjfQgmAagkBDQgnBLgXAwQgZAvgGATQgEAJgCARQgBAMAAARQAAAsA9AdQAuAVAiAAQAUAAAIgHQAIgIgCgUQASihAehRQAJgYA+iCQgNgIgRgFQgSgGgKAAQgjAAgbATgAkjhpIgIARQgYAwgKAaQgQAogCAkIAAAEIgBAFQAAAFADABIADAGIABABQAEAGAdAMIAbAJQALACADgQQALgwAPgsIAXgvQANgbAQgeQAwhaAmgnQgCgCgPgEQgOgDgIAAQgVAAgvAtIgLALIgWAZIAFgHQgfAbgSAfg");
	this.shape.setTransform(39.7,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFA857").s().p("AAEDaQgRgGgDgFQgGgKAAgmQAAhYAhh0QA3i3BnAAQA+AAA1BKQBABbAACUIgICAIgHANQgFADgfAEIhEAEIg8ADQhkAAhBgWgAi0C+Qg8gcAAgtQAAgRABgMQABgRAEgJQAHgTAZgvQAXgwAnhKQAjhEAmgaQAcgSAjgBQAJAAASAGQASAFANAIQg/CDgJAYQgeBQgSChQADAUgJAJQgHAGgVABQgigBgugVgAiTBtIABgBIgEgCIADADgAkZBzIgbgKQgdgMgDgFIgBgCIgEgGQgDgBABgFIABgFIAAgEQACgkAQgoQAKgaAYgvIAIgRQARggAggbIgGAIIAXgaIAKgLQAvgtAWABQAIgBANADQAPAEACACQgmAngwBaQgQAegNAbIgWAvQgQAsgKAwQgDAPgKAAIgCAAg");
	this.shape_1.setTransform(39.2,54.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01A652").s().p("AlbFhQixgZiRg3QgEgaAAgKQABhPA3iEQBNi0CFhoQBthVA5gLQAIgCAVgBQAKAAAGgIQAYgCAhgBIBtgDQCTgDA5ABIAzACQASgDAYAAIBIgBQA2gCAMABQAMAAASAEIAAAAIAJADQA5AMAtAjQAAAGAGACIADAAIAHAHQAMAMAFAHQAFAHAGAQIAFAJIABADIAKAZIAGAQQAlBiAMBYQANBVAACpQgBAXgYAQQgTALgpALQilAqg3ALQizAjihAAQjPAAipgYg");
	this.shape_2.setTransform(81.4,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006739").s().p("AkWF/QhtgRj1g8Qg7gOgTgRQgOgLAAgUQAAgKAYhiQAYheAGgTQAdhQAvhMQAyhRA8g1QBShJBSgjQA7gaApAAQANAAAGAFQACADADAHQgGAIgJAAQgWABgHABQg6AMhtBVQiEBohNCzQg4CFAABPQAAAKAEAaQCQA2CyAaQCoAYDPAAQChAACzgjQA3gLCmgrQApgKASgMQAZgPAAgYQAAipgNhUQgMhYgkhjIgGgPIgKgaIgBgDIgGgJQgGgQgEgHQgFgHgMgMIgIgGQAEgBADgDIACgFQADgHAFgHIACgDIAEgJQAIgEAJABIAFAFIAIAIIAIAHQAEAEADAGQAMATAJAVIAEAHIACAEIAmBnQAUA3AJB+QAIB7AABFQAABNgJAPQgDAFggAKQh+AoheAVQjmAyjYAAQiqAAh7gTg");
	this.shape_3.setTransform(81.3,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.9,83.6);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#674684").s().p("AgnBCQgjgaAphSQANgbAVgCQAVgDARASQARASAAAaQAAAdgaAdQgQATgTAFQgHACgHAAQgLAAgJgGgAgJgeQgKAVgFASQgIAdAKAEQALAJASgYQAVgZgDgcQgEgJgGgFQgEgDgFAAQgHAAgIANg");
	this.shape.setTransform(44.5,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9474B3").s().p("AgnAlQgFgbAYgtQAPgeAXALQAXALAAAUQAAAhgTAZQgSAWgSABIgDAAQgTAAgDgVg");
	this.shape_1.setTransform(44.4,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006739").s().p("AgwB9IAAgBIgBgBIgBgEIAAgCIAAgBIAAgBIgBgCIAAgCIgBAAIAAgCQAyg6AOg1QALgqAAheIAAgGQAGgBACACIAAABIAAABQAcAtgIBJQgKBZhEBQg");
	this.shape_2.setTransform(94,78.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006739").s().p("AhVFGQCIi8gWjJQgHg5gYhjQgahggEgqIAQgGQAkA0AmCdQAvC7geBvQgdBqhOByg");
	this.shape_3.setTransform(87.4,105.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006739").s().p("AACOqQhkgbhEhvQgthLhGi4Qg/iog2hLIgMgSIgLinQgHm4AQi8QATjcBAhaQA8hTCLgVQA/gJEngEIA8gDIAWAQQAVARAEAIImHAUQhpAGgxASQgvARgeArQgQAXgqBbQgnBbgLFmQgKFAARCEQAAgCAAABIABACIAIAQQALATAMARQAyBDAyB2QAdBDA0CFQAvBtAtA0QA6BEBJAEIASAAQAdgEAegLQBmgmBDhmQBIhtgJiFQgFhVg0idQg3iogKhMQgTiHA5hwIAaAMQgcBiAMBmQAJBKAkBoIA+CuQAfBlADBRIAAADQgHCLhDBxQg+BphgAyQhAAihAAAQgfAAgfgIg");
	this.shape_4.setTransform(42.5,94.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006739").s().p("AAgAQIgRgBIgBAAIgRAAIhFAAIgTgCIgBgCQADgGAKACIAJABIA2ABIgGgBIgBgBQASgCASADIABABIAEAAIAIAAIgBgBIgCAAIgCAAIgCgBIAAgBIAAAAIABgBIANgBIANgCQAEgBADACIAAABIgBABIABABIACgBIAEABIACAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIADAAIABAAIACgBIgEgCQgFgBADgEQgIgCgGgFQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAHgDAHADQARAFAKAKQACAEgBAEQgGAEgIABIgRABIgDAAIgUABIgHAAg");
	this.shape_5.setTransform(67.6,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#674684").s().p("AhHBNQhGgZAQiBQCQADBugIQgNAtgLAVQgbAygrAZQgjAYgjAAQgSAAgSgGgAhcAOQANAkAjADIABAAQBdgFArhmQhPAHhxAAQgCAlAJAYg");
	this.shape_6.setTransform(58.6,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9474B3").s().p("AhcAqQgbgkAJhDQCHABBYgIQgQA7gqAlQgmAkgpAEIgMABQgjAAgVgbg");
	this.shape_7.setTransform(58.4,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#674684").s().p("AgqBfQgegMgQgeQgPgdAFgcQAFghAbgRIA3ghQAZgPASABQAiACASAaQARAXgBAjQAAAggSAeQgTAgggAOQgWAJgSAAQgRAAgQgHgAAChAQgfAVgWALIgKAHIgDADQgRAdAOAcQANAaAeAJQAcAJAagQQAegTAJgsQAFgagHgUQgHgRgMgGQgHgDgJAAQgOAAgQAIg");
	this.shape_8.setTransform(23.7,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9474B3").s().p("AhRAfQgRg2AogUIAugcQAagQASAAQAeAAAPAbQAOAagGAiQgGAkgYAYQgbAcgnAAQg1AAgRg5g");
	this.shape_9.setTransform(23.7,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01A652").s().p("Ah/N4QiNiGg7i8QgJgdADgdQgqglgag9QglhXgphRQgKgWAAgQQgKgPgGgTIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABAAIgBgGIABAAIAAgGIAAgCIAAgEIAAgDIAAgBIAAgBQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIgBgBQgDgTAAghIAAi+IgBgDIgBgBIgBgCQADgGgCgMIABgIIACgEIAAgIIgDgxIABgVIAEhDQAAgEgBgBIgBgBIAAgDIgBgKQAAg7ADgeIAEgpQABgEgCgCIAAgBIAFgrQABgIgBgDIgCgCIAAAAIAAgCIAAgCIABgCIABAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgBIAAgBIAAgCIABgEIAAAAIABgEIgDgDQAQhfAohZQBbjJDlgMQAcgCAZgEQBxAVBxAWQAEgFAHgFQAXgSAcgCIAJADIgBABQAAAAgBABQAAABAAAAQAAABAAAAQgBABABAAIAAAEIABABQADAFAFAAIACAAIABAAIACABIABAAIACABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIABAEIAAAAIABAAIABABIADABIABAAIACABIADAAIABAAIAKADIAAAAIAFABQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAAABIAGABIAMADIABAAIADACIADAAIAKAFIAEABIABAAIADACIABABIACABQC6B7AHD/QAFChg8CFQgBAsgVAzQgSAtgegKIACAFQAJARgCAUQgBAPgDANIgBALQAwBCgUBaQgNA5gIA6QgOBohSgCQAGAqgHAyQgKBRACBLQABAlgTAhQhpCyjAAdQgKACgKAAQgwAAglgkg");
	this.shape_10.setTransform(51.3,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.7,189.4);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("Ageg9QAaADARATQASATAAAWQAAAUgMAQQgKAQgRAIQgQhSgGgpg");
	this.shape.setTransform(11.2,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006739").s().p("AANDQQgNgggKgpQgShBgEhAQgEhPAUhFQAQg1AYgoIAKAEQgVA/gFBDQgHBKANByQAEAlANBbIACAOQAAAEgDADQgEgBgNgbg");
	this.shape_1.setTransform(26.8,35.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006739").s().p("AAAD8IAAgCQgOiigWhVQgchwgDgPQgBgIAAgJQgFhHApgxQAigtA0gGIAQArQgyAggOBAQgLBAAaCXQAdCbgKA5QgHAkgTAXQgIgUgGgpg");
	this.shape_2.setTransform(7,31.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9ED39").s().p("AhEADQgaiHAHg8QA2gFAjAMQAtAPAkArQgbBxAiCDQgaAjgkAUQgiAVgqABQAGg2gaiJg");
	this.shape_3.setTransform(16.2,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#447F62").s().p("AhPAEQgdiZAHhFQA/gFApANQA0ARAqAxQggCAAnCVQgeAngpAXQgpAYgwACQAHg+geibg");
	this.shape_4.setTransform(15.8,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.3,62.7);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#674684").s().p("AhVD4Qh7gjgshkQgzhxBbiMQAng7BAgfQA9gdBNgCIDyEUQgRCXh0A+Qg+AihGAAQgrAAgwgOgAhZisQgtAbgZAoQhEBwAnBWQAjBLBgAYQBcAZBRgoQBagtAPhlIjYjpQgyAFgsAZg");
	this.shape.setTransform(566.5,105.7,0.997,0.997,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9474B3").s().p("AilC4QhHg6AAhrQAAhxBNhGQBFhBBggCQBQBVCXCpQgHBdhLA7QhGA2hbADIgMAAQhXAAg8gwg");
	this.shape_1.setTransform(567.5,105.6,0.997,0.997,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#674684").s().p("AhABkQgegQgFgnQgHgxAhgrQAdgmAsgPQAsgQAeASQAhAUgGA0QgGAzgeAkQgbAhgmAKQgOAFgNAAQgUAAgRgJgAAPhLQg/ATgUA8QgJAgAKAVQAKAXAhACIABAAQAngDAdgnQAYgiAEgjQADgfgRgMQgKgGgNAAQgJAAgMADg");
	this.shape_2.setTransform(588.6,213.8,0.997,0.997,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9474B3").s().p("AhPBBQgOgbALgmQAMglAfgbQAkgdAuAAQAgAAAJAdQAJAcgNAkQgMAmgbAbQgfAdghAAQgoAAgQgdg");
	this.shape_3.setTransform(588.6,213.9,0.997,0.997,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#674684").s().p("AhMCBQglgbgChFQgBg+Asg7QAwg/A3AJQArAJAXAnQAWAkgDAwQgDAvgbAoQgeArgzARQgTAHgRAAQgaAAgTgPgAgcheQg4AugFBQQADBEAmAOQAiAMAogfQAqggAPgxQARg0gfgsQgXghgcAAQgVAAgZAVg");
	this.shape_4.setTransform(422.8,241,0.997,0.997,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9474B3").s().p("AhFB1QgggYgBg9QAAg8Aqg0QAngyAkAAQAhAAAaAdQAdAggBAzQAAAxgfAqQgeAmgpAOQgPAGgPAAQgWAAgRgOg");
	this.shape_5.setTransform(422.7,241,0.997,0.997,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#674684").s().p("AhFBrQgagUAEgxQAEgvAdgrQAggvAtgNQAQgEAMAAQAZAAAMAbQAMAagFAmQgKBbhEAjQgcAQgXAAQgSAAgNgKgAgVg0QgbAfgLAmQgLAoAOASQAQAVAogWQAjgRASguQAQgmgGgjQgCgSgHgGIgHgDIgFAAQgjADgcAig");
	this.shape_6.setTransform(232.6,186.4,0.997,0.997,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9474B3").s().p("AhMBGQgGgeAPgoQAQgpAdgcQAfgfAnAAQAVAAAHAfQAHAfgKAmQgbBlhVAAQgeAAgHgfg");
	this.shape_7.setTransform(232.6,186.1,0.997,0.997,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#674684").s().p("AgqBXQgXgOgEgfQgFgiAXgrQAeg3AsgDQAmgDAIA2QAIAygaAsQgRAegdAJQgIADgKAAQgPAAgOgHgAgjAAQgJAaAFATQAFAUAUACQArgDALg+QAEgWgEgUQgEgVgKgDQgoADgVA9g");
	this.shape_8.setTransform(349.9,45.1,0.997,0.997,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9474B3").s().p("AgzA3QgIgWAJghQAJgfAVgXQAUgZAaAAQARAAAJAZQAHAYgFAeQgMBQg3AAQgdAAgJgZg");
	this.shape_9.setTransform(350,45.1,0.997,0.997,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#674684").s().p("AhPBUQgSgbADgqQADgnAYgjQAZglAogMQA1gNAaAfQAXAcgGAxQgHAugeAlQghAogqADIgEAAQglAAgUgdgAgUhDQgqAegEA6QgFA9AzAFQAZgCAXgYQATgVALgeQAahAgmgVQgOgHgOAAQgSAAgUAPg");
	this.shape_10.setTransform(323.5,55.9,0.997,0.997,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9474B3").s().p("AhIBDQgOgbAIgoQAIgnAZgbQAcgfAjAAQAqAAAPAfQANAbgMAnQgLAngbAcQgdAfgdAAQglAAgPgfg");
	this.shape_11.setTransform(323.5,56.1,0.997,0.997,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#674684").s().p("AgjBnQgvgTgDhDQgBgfAXglQAXglAigQQAcgJAYASQAXASAKAgQAYBOg4AyQgcAZgbAAQgNAAgOgFgAgGhHQgTAMgPAZQgQAagBAYIAAABQABAlAUAQQARAOAWgIQAYgIAPgYQAQgbgDgiQgKg9geAAQgKAAgLAHg");
	this.shape_12.setTransform(498.5,75,0.997,0.997,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9474B3").s().p("AgwBPQgWgUAAgpQAAgfAXgiQAWghAZgKQAZgKAYAdQAWAbAAAkQAAApgWAdQgUAagdAFIgKABQgWAAgQgPg");
	this.shape_13.setTransform(498.4,74.9,0.997,0.997,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#674684").s().p("AgeCGQgfAAgTgVQgkgmAWhJQAJgdAlhFQAQgaAbgIQAYgIAZAKQA9AZgCBUQgCBchIAsQgdARgcAAIgCAAgAgchWQgdA7gHAVQgZBHAdAcQAdAeAxgiQA2glAEhKQgDhIgpgNQgKgDgIAAQgXAAgTAYg");
	this.shape_14.setTransform(568.9,175.2,0.997,0.997,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9474B3").s().p("Ag9BwQgcgSAAgvQAAggASgnIAhhCQAJgRAVgJQATgIAWAGQA5APAABSQAAAxgcAnQgaAjgkANQgOAGgOAAQgSAAgPgJg");
	this.shape_15.setTransform(568.9,175.1,0.997,0.997,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#674684").s().p("AhTBdQgcgLgJgUQgDgEAAgEQgEgpAlgoQAignAygVQAygWAkALQApANADA1IAAACQgEAqguArQgrAogkAFQgPADgOAAQgbAAgWgKgAgDg5QgnARgbAcQgeAegCAhIAAACQASAeAnAAQAhAAAlgXQAkgVAUgdQAWgdgKgXQgDgbgfgDIgHAAQgZAAgfAPg");
	this.shape_16.setTransform(670.7,227.5,0.997,0.997,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9474B3").s().p("AhZBLQgWgNAAgNQABgmAigjQAggiAsgSQAtgTAfAJQAkAKgBArQABAhgrApQgwAxg2AAQghAAgXgPg");
	this.shape_17.setTransform(670.5,227.7,0.997,0.997,-0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#674684").s().p("AhmD5QhDgRgog5Qgpg3gChLQgChNAqhLQAthTBbg+QBoBwA2A1QBKBJBhBPQhIBkhUAvQhIAphMAAQgZAAgagEgAiihJQgeA+ADA/QADA/AiAoQAkApA4gBQA9gCA0gWQA6gYA2g0QASgSgBgDQAAgGgbgUQhrhSiDiLQgzAqgcA6g");
	this.shape_18.setTransform(636.4,170.8,0.997,0.997,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9474B3").s().p("AiwCpQgngvgEhLQgDhIAihHQAlhMBHguQChCuCLBsQgzBFhGApQhNAthSAAQhIAAgsgyg");
	this.shape_19.setTransform(636.3,171.3,0.997,0.997,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#674684").s().p("AhOCUQhdgUg9gxQhCgzgbhIQgMgfgMhQQDOgHCcAQQCqARCnAvQgcBggvAyQg+BBh6AWQglAHgnAAQgtAAgwgKgAkOhbQASA5ArApQAzAzBOAWQBKAVBNgLQBQgLA9gqQAhgXAYgiQALgRACgHQiGgdimgMQhhgHhfAAIg8ABg");
	this.shape_20.setTransform(428.2,17.4,0.997,0.997,-0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9474B3").s().p("AgLB9Qh1gIhTg9QhbhDgLhwQCbgFCeAOQCxAPCJAkQgXBfhiA0QhPAqhhAAIgcgBg");
	this.shape_21.setTransform(428.5,17.4,0.997,0.997,-0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#674684").s().p("AhxCWQgOgKgeglQCLh+CfiTQAuCqhQBfQg+BMhdAAQgpgEgYgRgAhNBpQASALAXAAQAigBAggYQBPg3AEhaIAAgBIgBgWIi9C2g");
	this.shape_22.setTransform(218,94.7,0.997,0.997,-0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9474B3").s().p("Ah/BhQCIiFBuhiQAUBHgYA/QgVA6gwAmQguAlguACIgFAAQgwAAgcgmg");
	this.shape_23.setTransform(218.9,95.6,0.997,0.997,-0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#674684").s().p("AhFA+QgNgYAIglQAHghAWgbQAYgcAZgBQAqAAAUAcQARAYgGAkQgGAigYAZQgbAcgkACIgBAAQgmAAgOgbgAgLgyQgcAYgIAnQgKAuApACQAFABAMgFQAegMANgjQAQgpgagUQgMgJgLAAQgLAAgLAKg");
	this.shape_24.setTransform(117.9,206.5,0.997,0.997,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9474B3").s().p("Ag7AzQgJgUAJgfQAIgcATgWQAUgYARAAQAjAAAPAYQANAVgGAdQgGAegVAVQgXAYgcAAQggAAgLgYg");
	this.shape_25.setTransform(117.9,206.5,0.997,0.997,-0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#674684").s().p("Ag6DGQhAgGgehBQgehCAXhPQAahaBVhBQAdgXAkgBQAkgCAiASQBOArAFBqIAAACQgDArgWAtQgWApghAfQhIBFhAAAIgMgBgAgZh5IABAAQhfBYADBbQABAjAQAaQAOAYASAEIAFABIgCAAQBdgHA4hUQA4hSgrhEQgWglgggIQgJgCgJAAQgaAAgZATg");
	this.shape_26.setTransform(179.1,188,0.997,0.997,-0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9474B3").s().p("AhwCPQgYgegFgtQgMhwBuhiQA5g0BBApQBAAoAABSQAAA/g5BCQhBBKhTAAQgcAAgWgdg");
	this.shape_27.setTransform(179.1,188,0.997,0.997,-0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#674684").s().p("AicEyQhZgggchmQgfhwA8iWQA0h4B1g/QBrg6BoAUQBsAUAfBdQAjBrhXCjQhOCUhwA+Qg/Ajg8AAQgiAAgggLgAAAkBQhdAdg/BPQhJBbgGCDQAECYBNAnQBEAiBhg8QBgg6BBhsQBHhzgIhwQgFhJhIgdQgjgOgnAAQgoAAgsAOg");
	this.shape_28.setTransform(346.2,198.4,0.997,0.997,-0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9474B3").s().p("AiwEUQhRgxABicQgBiKBRhiQBGhVBqgfQBlgdBMAhQBRAjgBBWQABCJhRB5QhKBxhnA0Qg4AdgwAAQgoAAgggUg");
	this.shape_29.setTransform(346.3,198.5,0.997,0.997,-0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#674684").s().p("Ai0GJQh0gLhCg/QhGhDAJhpQALh1BtiLQBWhuB3hJQB7hNCSgYQBCgIBUBbQBZBeANBuQAOCFhxCKQhrCDidA8QhkAnhgAAQgWAAgWgCgAj/hVQhDBUgfBWQgeBSAOAwQAPA+BLAgQA7AZBWADQDXgHCgibQBFhCAjhLQAkhJgIg+QgKhWhFhQQg9hGgwgJIgJABIADAAQkHAsirDYg");
	this.shape_30.setTransform(485.7,162,0.997,0.997,-0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9474B3").s().p("Al6EGQgxheBFiPQBDiKCOhuQCYh3CrgYQAYgEAmAYQAmAYAkApQBZBkAABsQAABEgrBMQgqBOhJBCQipCZjPAAQi8AAg3hqg");
	this.shape_31.setTransform(485.8,161.7,0.997,0.997,-0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#674684").s().p("AiPEbQhPgsgVh5QgciYBKh2QBChoBwgiQBtgiBPA7QBXBBgFCYQgIB2hGBfQhBBYhbAiQgpAQgmAAQgrAAgmgUgAACj2QhQARg7BJQhCBSgGB3QADBbAgA2QAlBABLAFQBrgHBPhwQBEhfAFhgQADhug9g2Qgpgkg3AAQgUAAgVAFg");
	this.shape_32.setTransform(275.4,116.1,0.997,0.997,-0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9474B3").s().p("Ai6DNQgohCAAhfQAAh+BHhaQBAhQBbgVQBcgUBAA0QBIA5gBB6QAABmhOBvQhbCAh2AAQhQAAguhKg");
	this.shape_33.setTransform(275.2,116.3,0.997,0.997,-0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#674684").s().p("AhqFNQhMgCg6gjQg+gmgYg/QgahFAahZQAWhQA7hPQA6hPBPg2QC3h8CqBMQBIAhASBWQAQBPghBkQgiBjhHBSQhMBZhhAoQg/AchGAAIgNAAgAAykOQhUAUhPA/QhMA9gwBTQgyBUgEBUIAAAAIAAABQAGBuBqAlQBjAjBlgvQBLggBChIQA+hFAjhTQAjhSgHhFQgHhLg4gjIABAAQgzgWg3AAQgiAAgjAIg");
	this.shape_34.setTransform(399.1,77.1,0.997,0.997,-0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9474B3").s().p("Aj2EFQhEgzAAhVQAAhXA1hbQA0haBThDQBXhFBagVQBlgXBUAqQBJAlAGBiQAFBdg2BoQg4BuhcBGQhmBOhxAAQhYAAg9gwg");
	this.shape_35.setTransform(399,77.2,0.997,0.997,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F69A71").s().p("AyvGzQuQhwo3lVQhFgqilhwQiThkhUgvQkPiXjrAiIgBgzQESgQD6CLQBNAqCTBjQChBtBYA0UASkAKHAj9gDtQTTh/YWmOIAWAFQolDJsMCmQtwC9tYBFQnBAkmVAAQnwAAmzg2g");
	this.shape_36.setTransform(444.6,310.9,0.997,0.997,-0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#006739").s().p("EgwsAb6IABAAIgBABIAAgBgEg6qAYpIgCgFIABABIACAGIgBgCgEA46AFsQglgJgIAAQmPgnmMlVQiWiDjBjTIlRl8QjNjmiXiPQjKjCjBh+QnUkzoYAMQqRAPoJETQjXBxjVCpQihB/jMDEQh0BvjeDZQjCC3iXBwQmSEpm8AuIgNgTQgBgEADgOQAEgOABAAQG5gsGQkoQCXhwDBi4QDejZB0hvQDMjFCih/QDXipDYhyQILkTKWgPQIEgLHNEVQFTDMGaG1QAzA3EXE1QDFDaCAB9QF0FoFGBnQA3ASBYAPICpAbQgNgBgUAJQgXAKgKABIgFAAQgRAAgbgGgEg4UABsIACAAIAEgBIgCACg");
	this.shape_37.setTransform(373.1,178.5,0.997,0.997,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F69A71").s().p("AAXBdQgsAAgwgNQgwgNgQgIIgJgGQhGgbgng9IgHgLQgDgFAAgGQAEgVAMgIQAGgFAIgBIAGAAQAIAAAIACQARAFALAOQAhAoAaAWQASAOAPAHQAiAQAXgDIAIgBIAVgCIAKAAIALAAIAEAAIAkABIA/AFIAZABIAsADIAYADIADAAQALABAGADQAGABACACQAEAEgCAIIgDAKIAWgBQgDAJgRAHQgPAGgNABIg1AEIgtACQgNABgSAAIg/AAg");
	this.shape_38.setTransform(59.2,261.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFDCAE").s().p("AAAADQgDgBAAgCQADgFACAFQAEADgEAAIgCAAg");
	this.shape_39.setTransform(571,331.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFDCAE").s().p("AqbHiQilgriqgTIhggLIAAABIgBABQglAKgngJQgSgEgOgKQgLAIgTgGQgigKgkgEIgzgHQgPAKgWgHIg9gQQgMACgQgGQgRgGgRgEIhJgSIgdgIIAAABIAAABIgBABIgBABIgBABQgjgDgjgNIgBABIAAABQgUACgRgLQgJgHgLgEQgWgBgYgHQgvACgtgVIgdgOQgOAAgPgDQg3gPg0gcIAHAFIAEACIADADIABAEIAAAAQgHAJgLgJQgKgIgNgFIgZgKIAAABIAAABIgBABIAAABIgBABQgUACgUgMQgSgLgUgIQgIgDgEgFQgjADglgXQhIguhRgbQgjgMgYgVQg0gSgygjQgIABgHgLIgBgCIgCgBQgRgIgRgMIgCAAIgEAAIgBABIAFAGIAKAGQAFADgBAFIgBACQgdgIgcgUIgngeIgSgNIgBAAIgBAAIgDACQgxgjgzghQgogbgkgfIgBACIgBABIgBAAQgagVgegTQgUgMgXgJQg+gbg8gjIgSgLIgqgNQhogjhqAAIhGgBQgQgBgMgEQgIACgJAAQACgIgEgEQgCgCgGgBQgGgDgLgBIgDAAIgXgDIgtgDIgZgBQANgDAhgOIAJgFQAOgFAvgKIAmgHIAKgCIAUgEIAKgBQBxgVAqADQBdAFBZAbIAIACIBuAfIAzAPQA5ASA4AWIAhANQAWAIB6A2IBaAnIBHAfICkBDIACABIABAAIAEACIACABIABAAIAAABIABAAIAAAAIBXAkIBUAiQBzAvAXAHQB1AjB2AiIAzAOIAvAMIBrAZIAiAJIAwALIAxALIAvALIAPADIBFAQQDqA1AoAFQB9ANB7AJIAOACIAAgBIABAAIAEAAQAfACAfABIAiACQBXAEBYAAIBkABIEMAEQCGADCEgFIBzgGIBHgEIDngOIA4gEIBggJIAIgBIB/gNIAagCIAagDQBkgLAggFQBggQCkgOIEEgVQBhgHBPgFIBIgEQAFABAugFIBCgGQALAACMgTIAEABIAGgCIBWgMIDSgZIAVgDIAigFICcgXQC+gbBCgHQBCgHBCgKIA3gIIADAAIABgBIAAAAIAGgBIAigGIDRgjIBfgOQAogGAmgKIBsgSIAsgHIAVgDIAlgFQgCAJgXAFIgDAFIgBABIgpAGIgTADIgEABQgoAGgmALIg0AQQgMAaglABQggAAgfAEIgoAFQgEAKgKACIgPACQgIACgIgBQABAIgGAEQgHAEgHAAIgIABIgBAAQgPAagngFQgngFgnAFIgDACQgDACgDgBIgJAAIgLAAIgFABIgBAAIgBABIABACIABABIAAACIgCAEIgCACQg0APg2AIQg3AIg3AGIgIABIghAMQgyAghMAFQg9AkhbAFQiTAIiQAiQhsAZhuANQhZBFiEAOQi/AVi+APQgIAUgoAJQg7AOg8AIQg9AJg2gVQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIACgEQgxgCgzALIg5AMQgQADgRgBIgBACIgBACIgBABIgCACQgkAGgegQQgbBJiHgHQiIgGiIARQhfANhRgjQinASimgJIACACQADAFgHADQgNAEgFgMQgUAFgWgDIgUgDIgCAAIgBABIAAABIgCABQgJADgKgCIgTgEIgDAAIABABIAAAAIABABIAAABIAAABIAAABIgBACIgCACQgoACgmgHIgdgDIABAAIAAAAIACABIACABIAAABIABABIAAABIABABIAAABIgBABIAAABIgBABIAAAAIgBABQgmgBgmgDQgcgDgbgGIgEgBQguAthKAAQglAAgtgMgAUEFXIgBAEQAVAAAcgIIgwAEgAU7DuQABADAEABQAIABgFgGQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgCAAgCADgEgqYgBUIAEADIAEADIgEgDIgEgDIgEgDIAEADg");
	this.shape_40.setTransform(436.6,307.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006739").s().p("AoiLKIkNgFIhkAAQhXAAhYgEIgigCQgfgBgegDIgFAAIAAAAIgOgBQh8gIh9gOQgngFjrg0IhFgQIgPgEIgvgKIgwgLIhTgUIhqgaIgwgMIgygOQh3gih1glQgWgGhzgwIhUgiIhXgkIgBAAIgBAAIAAAAIgCgBIgFgCIgBgBIgCgBIijhDIhIgfIhZgnQh7g2gVgIIgigNQg3gVg6gSIgygQIhvgeIgHgDQhagYhdgFQgpgDhxAUIgLACIgTAEIgLAAIgmAHQguAJgPAGIgJAEQggAOgNADIg/gFQAGgFAOgEIAXgGICbgmIBKgRQBLgPAfAAIAkABQBRAEBOASQAWAFBZAZQBcAbAoANQBiAhBhAkQAMAEBcArQBdArBBAXQBBAYBvAsQCvBFBxAqIAGACIARAGIBkAjIAkAKIAEABIArALIDoA8QARAEBHAVIBQAYQAeAJBoAXQBdATAgAGICDASIA9AHIAHABQCHAQCFABQA1AAAiABIANABIALAAQAjACA4gCQA4gDB8AHQBmAGBuAAIAFAAIAqgBQASAACTgJIBHgDICkgIIASgBQBHgDBOgGICUgNIBggOQBWgNBAgFIBFgGQB7gLB2gPIAjgFIBogMQA/gGAzgCIBpgHIBlgIQBogKAWACQAOAAA+gIIBZgOQAygCBHgLQAdgGBagIIAMgBIASgCIAQgBIAFgBQCBgLAWgEIABgBICAgWIAOgBIAGgBQBkgLBNgOQBVgPAfgCQAfgCBigMQBggMBtgTIBFgLIC7gfQCVgYCCgcQAzgZBOghQBggoAygYIABAAIBDggIG7jbQBGgiBehBQBKgzBAgxQAdgWAPgPQAWgWAPg1QAEgQgFgIQgEgHgKgEQgcgPgggHQgTgEgmgEQhEgFhSgBIjGAPIk5AZQiBALhAAEIiUAHQg7ACjSgDQhkAAg4gCQhXgEhFgIQg1gHhQgPIi0ggQgKgCgGgEIgFgFQgDgEABgFQABgIALgDQALgEBHAPQBGAODtAPQDtAQCGAGQC0ACEfgZQFvghCGgDIAsgDQAnAABmAKQBoALAOAGQASAHALAHQAPAMAIAUQAHATgCAVQgCARgaArQgUAhgKALIgBACQgfAhgtAjQgbAVg4AoIhNA0IgVAOQg4AkgvAWIhPAiQkTCQl4CPIhWAYIgDABIgBAAQgTAJgYADIg3AIIgkAGIgVADIgsAHIhtASQgfAEgeAGIhvAUIjRAjIgiAFIgGABIgBAAIgEABIg2AIQhDALhBAHQhCAGi+AdIidAYIghAFIgWACIjRAaIhWAMIgKABQiMASgLABIhDAFQguAFgFgBIhHAFQhQAEhgAIIkFAVQijAOhgAQQghAFhjAKIgbADIgaADIh+ANIgIABIhhAIIg3AFIjmAOIhHAEIhzAGQhVADhWAAIhggBgEhFggAZQgfgVgPgmIgghKQgjhMgDgyQgEgxgGgdQgHgcAphmQAqhmA3gYQA2gXAogMQAngMACgDIAfgQQAYgLAigLIABAAIACAAIACAAIAFgBIAEgBIACAAIAGgCIACAAIABAAIABAAIAAAAIAEgBIAAAAIACAAIATgDIAAABQAGAHAFACQAGADAEADQAXAUAPACQAOAChGAOQhFANgdANIgnASIgdAQQgTALgkANQglAOglBNIAAABIgJASQgcA/AEAuIAAAEQAGA2ATBSIAEANQAOA2AZAxIANAYIgFABQgIABgGAEQgMAIgFAVQABAGADAGIAGALIgKgGg");
	this.shape_41.setTransform(477.8,260.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01A652").s().p("Aq0ZhQh8gHg4ADQg4ACgjgCIgLAAIgCgBIgLAAQgigBg1AAQiFgBiHgQIgHgBIg9gHIiDgSQgggGhdgTQhogXgegJIhQgYQhHgVgRgEIjog8IgrgLIgEgBIgkgKIhkgjIgRgGIgGgCQhxgqivhFQhvgshBgYQhBgXhdgrQhcgrgMgEQhhgkhighQgogNhcgbQhZgbgWgFQhOgShRgEIgkgBQgfAAhLAPIhKARIibAoIgXAGQgOAEgGAFIgkgBIgFAAIgKAAIgMABIgVACIgIABQgXACgjgQQgOgHgSgQQgagWghgoQgLgOgRgEQgJgDgIAAIgNgYQgZgxgOg2IgEgNQgThSgGg2IAAgEQgEguAcg/IAJgSIAAgBQAlhNAlgOQAkgNATgLIAdgQIAngSQAdgNBFgNQBGgOgOgCQgPgCgXgUQgEgDgGgDIAbgDQBmgIBngBQCgg1CZhHQC3hWCPh9QAlghAogeIgDgBIgBgCQAIgYAcgTQAvgeApgmQAZgWAagSQBIhYBchVQAwgtA0gjQABgJAHgHQAFgHAIgBIAFACQAFgOASgOIAbgXQBhiaCUh/QChiLC+hbQDjjCEghyQEFhnEZgpQB0gRBsAKIAFgHQEWggEMBBQEdBFEACIQBVAtA1BAQATgEASABIAFAEQAdAWAVAeQAHAHAEACIAJAAIAIAEQALAHARAPIAbAXQAGAFAEABQAGABAEgDIABACQAZAnApAdQArAdAoAgIAEAHQAcAgApAnIBJBEIBDA/IAXAVIAAABQA8BJAfBWQBTA8BMBXQBuB9CCBnQBRBAAUBcQCdCiC3CFQCmB4C9A+QBMAZBGAhIAIACQAXAHAZACIAFAFQAGAEAKACIC0AgQBQAPA1AHQBFAIBXAEQA4ACBkAAQDSADA7gCICUgHQBAgECBgLIE5gZIDGgPQBSABBEAFQAmAEATAEQAgAHAcAPQAKAEAEAHQAFAIgEAQQgPA1gWAWQgPAPgdAWQhAAxhKAzQheBBhGAiIm7DdIhDAgIgBAAQgyAYhgAoQhOAhgzAZQiCAciVAYIi7AfIhFALQhtAThgAMQhiAMgfACQgfAChVAPQhNAOhkALIgGABIgOABIiAAWIgBABQgWAEiBALIgFABIgQABIgSACIgMABQhaAIgdAGQhHALgyACIhZAOQg+AIgOAAQgWgChoAKIhlAIIhpAHQgzACg/AGIhoAMIgjAFQh2APh7ALIhFAGQhAAFhWANIhgAOIiUANQhOAGhFADIgUABIikAIIhHADQiTAJgSAAIgqABIgFgBIAAABIgRAAQhlAAhegGgA+0XpIgigJIBTAUIgxgLg");
	this.shape_42.setTransform(479.5,165.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,935.6,360);


// stage content:
(lib.dino_walk_animation_symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.eyes();
	this.instance.setTransform(29.8,401.5,1,1,0,0,0,15.1,31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// head
	this.instance_1 = new lib.head();
	this.instance_1.setTransform(50.1,426.2,1,1,0,0,0,51.3,94.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

	// L F toes
	this.instance_2 = new lib.LFFOOT();
	this.instance_2.setTransform(262.1,524.4,1,1,-58.6,0,0,72.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1,scaleY:1,rotation:-49.2,x:248.8,y:520.7},0).wait(1).to({regY:5.1,scaleX:1,scaleY:1,rotation:-39.7,x:235.5,y:516.9},0).wait(1).to({regY:5,scaleX:1,scaleY:1,rotation:-29.8,x:227.1,y:516.4},0).wait(1).to({regX:72.4,regY:5.2,rotation:-19.8,x:218.9,y:516},0).wait(1).to({regX:72.5,scaleX:1,scaleY:1,rotation:-10.1,x:210.7,y:515.4},0).wait(1).to({regY:5.1,scaleX:1,scaleY:1,rotation:-10,x:210.8,y:515.3},0).wait(1).to({regY:5.2,scaleX:1,scaleY:1,rotation:-10.1,x:210.9,y:515.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.1,x:196.5,y:519.8},0).wait(1).to({regX:72.7,scaleX:1,scaleY:1,rotation:34.5,x:182.1,y:524.1},0).wait(2).to({regX:62.7,regY:3.4,rotation:23.7,x:186.8,y:524.5},0).wait(2).to({regX:62.6,regY:3.5,rotation:13.6,x:205,y:535.1},0).wait(2).to({rotation:4.3,x:229.9,y:545},0).wait(2).to({regX:72.7,regY:5.2,rotation:2,x:271.9,y:562.6},0).wait(2).to({rotation:-4.4,x:277.1,y:561},0).wait(2).to({regX:64,regY:2,rotation:-7.1,x:283.6,y:556.9},0).wait(2).to({regX:64.1,rotation:-22.8,x:314.2,y:552.5},0).wait(2).to({regX:72.5,regY:5.2,rotation:-16.3,x:347.3,y:549.7},0).wait(2).to({regX:57,regY:4.7,rotation:-28,x:319.5,y:552},0).wait(2).to({regY:4.5,rotation:-46.7,x:304.4,y:546.7},0).wait(3));

	// L F LL
	this.instance_3 = new lib.LFLL();
	this.instance_3.setTransform(275.7,502.2,1,1,-24,0,0,53.1,55.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006739").s().p("AgFBFQgDgDgBgFQgEAMgHgGQgDgPgFgPIACgNIADgHIACgCIACgIIABgIQAAgFAEgCIAAgEQABgCACgCQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIADgOIACgQQABgHAFAEIAAgBIAAgBIAAgBIABgBIAAgBIgBgEIAAgGQAAgEAEAAQAKAGgEANQgEAOADANQAEAaAJAaQAEANgCANQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDAAgCgDIgEABQgDAAgCgDIgBgCIgBAAIgBAAIgBAAIgBAEQAAAEgFAAIgCgCIAAAAIAAAAIAAABIgBABQABAFAAAGQAAAEAAAAQgCAAgDgCg");
	this.shape.setTransform(207.9,468.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006739").s().p("AgZA4QgCgKAEgGQAAgJABgIQADgLAIgGIACgGIACgJQABgEAEgCIABgBIAAgCIABgBIAAAAIAAgBIABgCIAAgBIACgBIACgKIADgLQAAgGAGAAIAAgDIABgCQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAIABAAQALAFgFANIgCAHQgGAUAAATQAAAFgFABQgGABABgHQACgGgCgFIgEAFIgDAHQAAADgCAAIgBAFQAAAEgDACIgFAEIACAKIACANQABAGgGABIgBACIAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQgCACgDAAQgDAAgCgFg");
	this.shape_1.setTransform(201,458.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006739").s().p("AAABRQgXAEgJgRQgHgNAFgOQABgDADgBQAGgZAMgUQAMgbALgbQAGgOANgFQAPANgPAWQgEAGgBAHIgIBHQgBANAAAOQABARgLAAQgDAAgDgBg");
	this.shape_2.setTransform(195.1,448.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006739").s().p("AgSAkIgBgCQgHgJAIgLQAJgNAIgLQAEgLAIgJIABgCQABgDACgCIADgBQAJAIgJAMIgNASIgFAKQAAAHgCAIQgEAHgGAGIgDABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_3.setTransform(191.4,442);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006739").s().p("AgrAmIABgDQATgRAIgWQAIgUAKgSQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIADABIACACIAAACQAAAAABAAQABABAAAAQAAAAABABQAAABAAAAQABADgCACIgDAEQAFAMgJANQgGAJgFAOQgCAFgEAEQgCACgDgBIgDAFQgDAGgFgDIgCgCQgFAGgEAAQgDAAgBgGgAADAbQAAgIAHgGQAMgLAJgLQADgGAGgDQAHAGgHAKQgGAFgDAIQgCAGgGgDQgIAKgKAFIgBAAIgBgCg");
	this.shape_4.setTransform(194.2,446.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006739").s().p("AAAApQgCgDACgDIACgGQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgDABQgDABgCADQAAAAgBAAQAAAAAAABQgBAAAAAAQgBgBAAAAIgBgDIAAgCIgCADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgCABIgCgBIAAAAIgBgCIAAgBQALgQAJgQQAGgRALgOQAEgEAEgDQAGAFgEAKIgEAQQgCAHACACQAGAFgIAMQgHAJgFALQgCAEgDAAIAAAAg");
	this.shape_5.setTransform(195.2,452.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006739").s().p("AgkBIQgBgDABgDIACgGQgBgHAEgIQAUgwAUgxQAGgOAIgNQACgCADgBQASAQgOAZIgCADQgBAFgDAGQgKASgDAQQgDALgEAKQAAAXgPAVQgJALgHAAQgHAAgEgLg");
	this.shape_6.setTransform(202.6,459.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006739").s().p("AANBNQgHgFgBgJIgBgJIgEAMQgLAXgHgXQgGgWgBgYQgBgtADguQAAgHAHgBQAOAHgCAPQgCANABAOIAAACIACgBIAIgDQAXAEgCAcQgCAjAAAlQAAAIgFAAQgCAAgEgDgAgFgOIABABIgBgHIAAAGg");
	this.shape_7.setTransform(241,489.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006739").s().p("AgBBRQgDgDgBgFQgLhJAFhKQABgLAKgDQAOANgBAXQgCA+ACBAQABAPgGAAQgEAAgFgIg");
	this.shape_8.setTransform(239.4,489);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006739").s().p("AAdBXQgDgFgCgGQADAUgSgKIgHgHIgVgjQgHgLAGgKIgJgbQgGgPgIgPQgIgNAGgMIgDgKQgDgHAAgIQgBgJAJgBQAPAKAHAUQALAfAQAaQAOATANAVQAMAVAHAWQACAGgEAFQgEAIgFAAQgGAAgGgIg");
	this.shape_9.setTransform(260.8,500.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006739").s().p("AAlBJQgEgKAKgCQARACgKAMQgEAEgDAAQgDAAgDgGgAAOBFQgGgDgFgGQgLgTgKgUIAAgBIgBAAQgHgPgGgNIgCgGIgGgPQgBgEAFgCIADgBIAFAHIACgBIgNgSIgLgRQgGgKALgDQAYAQASAYQAPAYAVATQAPAPgRAKQAAAEgCADQgGAGgHgGIgBgBQAGAMADANQADAKgHAAIgGgCg");
	this.shape_10.setTransform(283.5,504.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006739").s().p("AgKAtIgJggQgEgNADgPIgJgPQgHgJgDgKQgEgKAKgCQAbARAPAeQAIAOAMANQASAUgHAVQgBADgEgBQgGgCgEgEIgBACQgBADgDABQgEABgDgBQgHAGgFAAQgHAAgEgRg");
	this.shape_11.setTransform(270.3,499.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006739").s().p("AAfBQQgCgJgHgEIABACQAFAIgKAAQgKAAgEgIQAJAYgVgLQgEgCgCgGQgJgngRgjQgNgegBgiQAAgJAJgBIAHAGQgBgHAKgCIAAgEQAAgEABgEQACgFAGAAQANAPAFAXQAOBMAqBEQADAGgGABIgFAAQgNAAgCgPg");
	this.shape_12.setTransform(253.7,495.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).to({state:[{t:this.shape_1},{t:this.instance_3}]},1).to({state:[{t:this.shape_2},{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_3},{t:this.instance_3}]},1).to({state:[{t:this.shape_4},{t:this.instance_3}]},1).to({state:[{t:this.shape_5},{t:this.instance_3}]},2).to({state:[{t:this.shape_6},{t:this.instance_3}]},2).to({state:[{t:this.shape_6},{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_7},{t:this.instance_3}]},2).to({state:[{t:this.shape_8},{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.shape_9},{t:this.instance_3}]},2).to({state:[{t:this.shape_10},{t:this.instance_3}]},2).to({state:[{t:this.shape_11},{t:this.instance_3}]},2).to({state:[{t:this.shape_12},{t:this.instance_3}]},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1,scaleY:1,rotation:-17.5,x:264.7,y:500.2},0).wait(1).to({regX:53.2,scaleX:1,scaleY:1,rotation:-11.3,x:253.7,y:498.3},0).wait(1).to({rotation:-5.1,x:247.1,y:500},0).wait(1).to({regX:53.1,rotation:0.8,x:240.3,y:501.6},0).wait(1).to({regX:53.2,regY:55.5,rotation:6.9,x:233.7,y:503.4},0).wait(1).to({rotation:6.8,x:233.9,y:503.3},0).wait(1).to({rotation:6.9,y:503.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:18.8,x:221,y:512.8},0).wait(1).to({regX:53.1,scaleX:1,scaleY:1,rotation:30.7,x:207.9,y:522.3},0).wait(2).to({rotation:22.8,x:220.3,y:525.2},0).wait(2).to({regY:55.3,rotation:12.6,x:238.2,y:529.6},0).wait(2).to({regY:55.4,rotation:3.4,x:261.8,y:534.3},0).wait(2).to({regX:53.2,regY:55.5,rotation:-1.7,x:292.8,y:547.2},0).wait(2).to({rotation:-6.5,x:296.7,y:543.9},0).wait(2).to({rotation:-15.6,x:309.4,y:538},0).wait(2).to({regY:55.6,rotation:-31.4,x:333.9,y:527.4},0).wait(2).to({regX:24.6,regY:10.1,rotation:-29.5,x:308.3,y:503.5},0).wait(2).to({rotation:-30,x:295,y:502},0).wait(2).to({rotation:-32.8,x:277.6,y:498},0).wait(3));

	// L F UL
	this.instance_4 = new lib.LFUL();
	this.instance_4.setTransform(266.1,451.2,1,1,21,0,0,56.4,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1,scaleY:1,rotation:26.8,x:260.8,y:448.3},0).wait(1).to({regX:56.5,scaleX:1,scaleY:1,rotation:32.5,x:255.3,y:445.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:33.8,x:254.2,y:444.6},0).wait(1).to({rotation:35.1,x:253.1,y:443.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.5,x:251.9,y:442.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.5},0).wait(1).to({regX:56.6,scaleX:1,scaleY:1,rotation:33.9,x:254.2,y:443.9},0).wait(1).to({regX:56.4,scaleX:1,scaleY:1,rotation:31.5,x:256.4,y:444.7},0).wait(2).to({rotation:28.3,x:259,y:446.6},0).wait(2).to({regX:56.5,rotation:22.3,x:264.3,y:449.5},0).wait(2).to({regY:72.3,rotation:13.1,x:274.7,y:451},0).wait(2).to({regX:56.4,regY:72.4,rotation:-0.9,x:292,y:455.7},0).wait(2).to({rotation:-0.9},0).wait(2).to({rotation:-3.9,x:295,y:455.9},0).wait(2).to({rotation:-10.1,x:301.7},0).wait(2).to({regX:56.5,rotation:-21.9,x:314.4,y:450.7},0).wait(2).to({regY:72.5,rotation:-14.7,x:308.1,y:452.8},0).wait(2).to({rotation:-5,x:299.1,y:454},0).wait(3));

	// L B toes
	this.instance_5 = new lib.LBFOOT();
	this.instance_5.setTransform(683.2,562,1,1,-30.9,0,0,77,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({x:672.1,y:561.8},0).wait(2).to({regX:53.1,regY:10.7,rotation:-42.4,x:629.3,y:545.2},0).wait(2).to({regX:53.2,rotation:-58.4,x:617.5,y:540.4},0).wait(2).to({regX:53.1,regY:10.6,rotation:-72.3,x:606.2,y:534.6},0).wait(4).to({rotation:-45.8,x:557.1,y:539.8},0).wait(2).to({rotation:-17.7,x:520.4,y:540.2},0).wait(2).to({rotation:6.5,x:491.3,y:540.1},0).wait(2).to({regY:10.5,rotation:21.2,x:469.6,y:532},0).wait(2).to({regY:10.6,rotation:11.3,x:488.7,y:543.7},0).wait(2).to({rotation:6,x:502.5,y:552.6},0).wait(1).to({regX:53,rotation:1.8,x:514.5,y:558.9},0).wait(2).to({regX:76.9,regY:41.8,rotation:0,x:576.4,y:595.8},0).wait(2).to({regX:77,regY:41.6,rotation:-8,x:591.4,y:586.1},0).wait(2).to({rotation:-19.7,x:620.3,y:579.6},0).wait(2).to({rotation:-32.1,x:658.2,y:568.7},0).wait(1));

	// L B LL
	this.instance_6 = new lib.LBLL();
	this.instance_6.setTransform(659.9,514.3,1,1,-38.6,0,0,56.5,54.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006739").s().p("ABABXQgQgPgOgQIgBAAQgGgBgFgFQgMgNgKgPIAAgCIgBgCIgCgCIgDgGQgBgDABgDIgCgDQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIAHAIQALAIAIAMIADAGIAIAIIADAFQAWAaAYAWQAAAAABABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCAAQgIAAgHgGgAgjA0QgNgNgFgTQgFgRgGgOQgMgfgFgiQgBgIACgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAIAGABAMIAAAFQABALACAKIACAGQAPAFADASQACAOAGAJQAJAQgEARIgBAEIAAABIAAAAIAAABIABAAIABABQAMACgKAHIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(553.5,500.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006739").s().p("ABABXQgQgPgOgQIgBAAQgGgBgFgFQgMgNgKgPIAAgCIgBgCIgCgCIgDgGQgBgDABgDIgCgDQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIAHAIQALAIAIAMIADAGIAIAIIADAFQAWAaAYAWQAAAAABABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCAAQgIAAgHgGgAggArIAAAAIABABQAKABgFAFIgGgHgAguAaIgJgLIgJgaQgMgfgFgiQgBgIACgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAIAGABAMIAAAFQABALACAKIACAGQAPAFADASQACAOAGAJQAJAQgEARIgBAEIAAABIgNgQg");
	this.shape_14.setTransform(553.5,500.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006739").s().p("AgNA/QgFgCgDgFQgNgZgIgaQgHgXgBgaIgBgFQgDgLAJgFQAGAAACAGIABAKIgCAGIABAAIACADIABACIAAABQAKAFAFALQADAFAEAEIAMAOQANAHAKAOIACAEIADgCIAAgBIABgCQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAKAGAHAJQAEAFAAAGQgBAFgEgDIgKgJIgFgBIAKAPQAEAGgHgBQgEAAgEgEIgFgFIAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDABQgCAEgEgCQgGgDgDgGIgCAAIAAABIgBADIgBACQAAAKgEAAQgEAAgFgDgAgBARIABgBIgBAAIAAABg");
	this.shape_15.setTransform(535.9,501.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006739").s().p("AAMBKQgDgCgBgDQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQgEACgBgEIgCgEQgCACgFAAQgGABgCgHQgJgXABgaQAAgMADgLIAAgHIAAgEIAAgLQAAgUAJgRQACgDADgBQAIAHgHAMQgDAHgCAIQAJADgDAKIgBAHQgBAIAEAIIAAABQAHgBABAIIAEASIADALQAKACACALQADAKAAAKQABAKgJgGQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDACIgCgBg");
	this.shape_16.setTransform(506.3,477);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006739").s().p("AgKBLQgLABAAgNIAAgDQgEgDgBgHIgBgGQgGgZABgZQABghAFggQABgEADAAQAJAKgFAQIgBAFIACABIACACIAAACQAJAEAAAMIABAXIABAMQAEAJAFAMQgBgHABgIQABgEAGABQgCgFgBgFIgCgKIAAgCQgDACgCgEQgCgGAGgCQAGACgCAEIABAAQAIAJACAMIAGAeIABAFQAIADgFAFIgBABIACAEQADANgKgHIgGgHIAAAAIAAACIgBACIgCABQAEANgLgFIgCgCQgCABgFgDIAAAAIAAABIgCAAIAAADQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIgDACIgDgBg");
	this.shape_17.setTransform(495.2,463.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006739").s().p("AAABiQgFgGAFgEIAAgCIABgDIAAgDQgBABgEgGQgIgBADgJIADgNIABgHIAAAAIgBgBIgCAAIgDAGIgCAFIgDACIgFAGQgCACgDgBIgCgCQgLgBAEgNIAAgBQgIgIALgKIACgCQAGgVAJgSIAKgZQADgIADgHIADgGQAIgPAMgOIAEgHQACgEAEgBQAKAHgJAKQgFAFgBAGIgMAkQACACgBAEIgCALIgBAGQADAEgCAFQgDADABAGIgBAHIAAADIACgDQABgEAEAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAADQAHAHgEAMIgMApQgEAOgKAHIgBABIAAgCgAAPg9IgBADIgBABQABABAAAAQAAAAABAAQAAgBABAAQAAAAAAgBIABgDIAAgDIgCADg");
	this.shape_18.setTransform(491.9,459.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.shape_13},{t:this.instance_6}]},2).to({state:[{t:this.shape_14},{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.shape_15},{t:this.instance_6}]},2).to({state:[{t:this.shape_16},{t:this.instance_6}]},2).to({state:[{t:this.shape_17},{t:this.instance_6}]},2).to({state:[{t:this.shape_18},{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({regY:54.8,x:648.7,y:513.9},0).wait(2).to({rotation:-39.9,x:641.6,y:511.6},0).wait(2).to({regX:56.4,rotation:-43.4,x:627.7,y:506.1},0).wait(2).to({regY:54.9,rotation:-50.1,x:612.4,y:499.5},0).wait(4).to({rotation:-23.7,x:578.3,y:511.1},0).wait(2).to({regY:54.8,rotation:-2,x:550.7,y:521.3},0).wait(2).to({rotation:16.7,x:526.1,y:532},0).wait(2).to({rotation:30.9,x:507.3,y:532.7},0).wait(2).to({rotation:20.3,x:525.8,y:537.3},0).wait(2).to({regY:54.9,rotation:15,x:538.8,y:542.9},0).wait(1).to({rotation:10.8,x:550.2,y:546.5},0).wait(2).to({regX:56.5,rotation:0,x:587.9,y:543.9},0).wait(2).to({regY:54.8,rotation:-9.9,x:593.8,y:533.1},0).wait(2).to({regX:56.6,rotation:-21.6,x:611.9,y:527.2},0).wait(2).to({rotation:-34,x:638.7,y:519.3},0).wait(1));

	// L B UL
	this.instance_7 = new lib.LBUL();
	this.instance_7.setTransform(618.7,452.7,1,1,-30.7,0,0,60.6,74.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006739").s().p("AABAeQgBgSgEgQQgCgHgEgHQgEgKAHgFQAHAJAAANQACALAEALQACAHAAAGQALAJgPAAIgBABQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_19.setTransform(545.1,490);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006739").s().p("AgNA8QgXgXgEggIgCgIQgIgaABgdQAAgFAFgCQAIAIADAMIADAOIABgBIAAAAIADgCIACABIACABIAAACQAFgCADADIADAEIACAGQAFACADAFIADAMIAFAGIABgCQACgDADACQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAIgBAHAHIAJAJQgFgEgHgCQgEAAAAADQAAABgBAAQAAABABAAQAAAAAAABQAAAAAAAAQAOANANAPIgEgCIgEgDIgCACQgDACgCgBIgEgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQgEAAgCgEIgBABIgBABIgDABIgDACQgDABgDgCIgBgBQgBAFgBABIAEADQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgEACQgHAAgFgGg");
	this.shape_20.setTransform(535.6,501.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006739").s().p("AgCATQgEgFABgIQABgLAEgNQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAHAGgCAMQgCALgEALIgBABIgBgCg");
	this.shape_21.setTransform(490.9,465.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006739").s().p("AgLA6QAAgJACgIIAAAAIgCABIgEAAQgDAHgHgEQgDgCABgFIADgGIgBgCIgCgCIABgDIAAAAIgCACQgCACgDgBIgDgBQgMACAFgOQAGgQAMgPQAIgKAAgLQAAgFAGAAQADgLAIADQAAABAAAAQABAAAAABQAAABAAAAQgBABAAABQgCAHgBAJIAAABQACgCABAAQAGgBgBAFIABADQAGgIAFgKQAGgNAJgKQADgDAEgBQAJAFgFAMIgHAaIgGAWQgMAigQAiIgCADIgEABQgHAAAAgLg");
	this.shape_22.setTransform(491,455.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.shape_19},{t:this.instance_7}]},2).to({state:[{t:this.shape_19},{t:this.instance_7}]},1).to({state:[{t:this.shape_20},{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.shape_21},{t:this.instance_7}]},2).to({state:[{t:this.shape_22},{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({regX:60.5,rotation:-23.5,x:612.1,y:456},0).wait(2).to({regX:60.6,regY:74.3,rotation:-19.3,x:608.2,y:457.2},0).wait(2).to({rotation:-11.6,x:599.3,y:459.1},0).wait(2).to({rotation:-0.6,x:587.4,y:460.6},0).wait(2).to({rotation:-0.6},0).wait(2).to({rotation:17.1,x:568.9,y:456.6},0).wait(2).to({rotation:28.4,x:559.1,y:452.6},0).wait(4).to({regY:74.2,rotation:31.3,x:556.5,y:450.8},0).wait(2).to({rotation:26.1,x:561.5,y:453.5},0).wait(2).to({regX:60.5,rotation:20.9,x:566.7,y:456},0).wait(1).to({regX:60.6,rotation:16.7,x:571.6,y:457.9},0).wait(2).to({regY:74.3,rotation:0,x:590.3,y:462.8},0).wait(2).to({regY:74.2,rotation:2.5,x:587.6,y:462.7},0).wait(2).to({regY:74.4,rotation:-4.8,x:594.8,y:462.8},0).wait(2).to({regY:74.3,rotation:-17.2,x:608.2,y:460},0).wait(1));

	// spots
	this.instance_8 = new lib.body();
	this.instance_8.setTransform(482.3,322,1,1,0,0,0,467.8,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006739").s().p("AgFAXQgFgDgBgGIgCgbQAAgLAJgBQAJABAEAKIAEAOQACAGgJACQAFASgIAAQgDAAgFgDg");
	this.shape_23.setTransform(240.4,494.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006739").s().p("AgMA9QgJghAAghQAAghgFgfQgBgGAHgBIAEABIADADIACADQAFAAADAEIADAGIABAHIABACQAPASgCAcQgBAHADAJQAIAcACAcQABAFgGABQgHAAgEgEQgHAHgEAAQgHAAgFgQg");
	this.shape_24.setTransform(245,493.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006739").s().p("AApBQQgHAIgIgHIgOgMIgHgGQgMAUgKgYIgPgnQgIgTADgPQgIgLgFgMIgLgcQgGgPANgFQAhAgAVAsQATApAjAiQAVAUgaAAQgGAAgCgGg");
	this.shape_25.setTransform(262.5,501.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.shape_23},{t:this.instance_8}]},3).to({state:[{t:this.shape_24},{t:this.instance_8}]},4).to({state:[{t:this.shape_25},{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({regX:468.1,regY:179.6,rotation:0.4,x:482.9,y:325},0).wait(3).to({regY:180,rotation:1.4,x:483.2,y:332.2},0).wait(2).to({regX:467.8,rotation:0.7,x:482.5,y:327.3},0).wait(2).to({regX:467.9,regY:180.7,rotation:-0.5,x:481.5,y:319.7},0).wait(3).to({regX:467.7,regY:179.9,rotation:-1.3,x:482,y:312.8},0).wait(2).to({regX:467.4,rotation:-0.8,x:482.1,y:316.2},0).wait(3).to({regX:467.5,regY:179.8,rotation:0.1,x:483,y:322.4},0).wait(4).to({regX:467.8,regY:180.1,rotation:0.5,x:483.4,y:325.2},0).wait(2).to({regX:467.7,regY:180.2,rotation:-0.2,x:482.8,y:320.7},0).wait(2).to({rotation:-1.2,x:482.1,y:314.5},0).wait(2).to({regX:468.1,regY:179.9,rotation:-1.8,x:482.2,y:309.4},0).wait(2).to({regX:468.7,regY:180.4,rotation:-1.3,x:482.8,y:312.5},0).wait(2).to({regX:468.5,regY:180.6,rotation:-0.6,x:483.2,y:317.6},0).wait(1));

	// plate shadows
	this.instance_9 = new lib.plates();
	this.instance_9.setTransform(417.3,183.7,1,1,0,0,0,304.7,169);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({regX:304.2,regY:169.1,rotation:0.4,x:418.3,y:186.2},0).wait(3).to({regX:304.5,regY:168.7,rotation:1.4,x:421.4,y:192.1},0).wait(2).to({regX:304.1,regY:168.6,rotation:0.7,x:418.8,y:187.8},0).wait(2).to({regX:303.9,regY:168.2,rotation:-0.5,x:414.7,y:180.8},0).wait(3).to({regX:303.8,regY:168.4,rotation:-1.3,x:412.8,y:175.9},0).wait(2).to({regY:168.6,rotation:-0.8,x:414.4,y:178.3},0).wait(3).to({regX:303.7,rotation:0.1,x:417.5,y:183.3},0).wait(4).to({regX:303.6,regY:168.2,rotation:0.5,x:418,y:185.9},0).wait(2).to({regX:303.3,regY:168.5,rotation:-0.2,x:415.5,y:182.3},0).wait(2).to({regX:303,regY:168.6,rotation:-1.2,x:412.3,y:177.1},0).wait(2).to({regX:303.2,regY:167.9,rotation:-1.8,x:410.5,y:172.8},0).wait(2).to({regX:302.9,rotation:-1.3,x:411.6,y:175.2},0).wait(2).to({regY:168.2,rotation:-0.6,x:413.9,y:179.5},0).wait(1));

	// R F toes
	this.instance_10 = new lib.RFFOOT();
	this.instance_10.setTransform(229,570.2,1,1,0,0,0,75.9,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({regY:39.5,rotation:-1.7,x:244.7,y:571.4},0).wait(2).to({rotation:-10,x:273.8,y:565.1},0).wait(2).to({regX:64.5,regY:6.4,rotation:-17.9,x:292,y:529.6},0).wait(3).to({regX:75.7,regY:39.5,rotation:-36.8,x:351.3,y:543.9},0).wait(2).to({regX:56.2,regY:7.3,rotation:-51.1,x:314.3,y:526.2},0).wait(2).to({regY:7.5,rotation:-60,x:287.1,y:528.5},0).wait(1).to({rotation:-63,x:269.9,y:528},0).wait(3).to({regX:67,regY:9.8,rotation:-57.8,x:254.9,y:521.1},0).wait(2).to({regY:9.7,rotation:-25.8,x:219.1,y:525.3},0).wait(2).to({rotation:-4.4,x:196.1,y:521.3},0).wait(2).to({rotation:3.6,x:183.1,y:523.3},0).wait(2).to({regX:75.7,regY:39.5,rotation:14,x:180.9,y:555.2},0).wait(2).to({regX:61.5,regY:4.7,rotation:9.8,x:189.9,y:521.9},0).wait(2).to({regY:4.6,rotation:7.3,x:196.5,y:524.4},0).wait(2).to({regX:61.4,rotation:5.8,x:208,y:530.8},0).wait(1));

	// R F LL
	this.instance_11 = new lib.RFLL();
	this.instance_11.setTransform(245,520.2,1,1,0,0,0,51.2,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({regX:51.4,rotation:-5.4,x:259.2,y:520.1},0).wait(2).to({regY:54.4,rotation:-16.6,x:278,y:512.6},0).wait(2).to({rotation:-29.3,x:308,y:503.6},0).wait(3).to({regX:51.1,regY:54.3,rotation:-36.8,x:334.2,y:494.2},0).wait(2).to({regX:51.2,rotation:-43.8,x:327.8,y:488.5},0).wait(2).to({regX:2.6,regY:8.2,rotation:-41.4,x:235.2,y:489},0).wait(1).to({regY:8.1,rotation:-39.3,x:219.4,y:486.5},0).wait(3).to({regX:51.1,regY:54.4,rotation:-28.6,x:266.9,y:491.4},0).wait(2).to({regY:54.3,rotation:-10.3,x:239.9,y:500.8},0).wait(2).to({rotation:0.6,x:221.3,y:501.2},0).wait(2).to({regY:54.2,rotation:8.6,x:210.8,y:506.8},0).wait(2).to({rotation:14,x:208.7,y:510.5},0).wait(2).to({regY:54.3,rotation:5.3,x:221.6,y:509.6},0).wait(2).to({regY:54.2,rotation:2.9,x:227.6,y:510.7},0).wait(2).to({rotation:1.3,x:238.7,y:516.3},0).wait(1));

	// R F UL
	this.instance_12 = new lib.RFUL();
	this.instance_12.setTransform(247.2,439,1,1,0,0,0,54.3,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({rotation:-5.4,x:253.5,y:439.1},0).wait(2).to({rotation:-10.7,x:259.7,y:438.5},0).wait(2).to({regY:72.7,rotation:-23.4,x:273.9,y:435.2},0).wait(3).to({regX:54.2,regY:72.9,rotation:-36.8,x:287.4,y:427.9},0).wait(2).to({rotation:-32.6,x:284.4,y:431.4},0).wait(2).to({rotation:-17.9,x:270.8,y:439.4},0).wait(1).to({regX:54.3,regY:72.8,rotation:-10.2,x:261.7,y:441.7},0).wait(3).to({regX:54.2,regY:72.9,rotation:-1.8,x:246.7,y:433.1},0).wait(2).to({rotation:8.4,x:235.4,y:432.4},0).wait(2).to({regY:72.8,rotation:15.4,x:228.2,y:429.8},0).wait(4).to({rotation:14,x:230.3,y:432.3},0).wait(2).to({rotation:10.8,x:233.9,y:433.7},0).wait(2).to({rotation:8.3,x:236.6,y:434.5},0).wait(2).to({rotation:2.3,x:243.3,y:436.1},0).wait(1));

	// R B toes
	this.instance_13 = new lib.RBFOOT();
	this.instance_13.setTransform(487.9,555,1,1,17,0,0,76.4,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({regX:60,regY:7.7,rotation:6.6,x:498.3,y:526.7},0).wait(2).to({regX:60.1,rotation:-0.3,x:512.8,y:530},0).wait(2).to({regY:7.6,rotation:-1.1,x:515.4,y:532.9},0).wait(3).to({regX:60,regY:7.7,rotation:-2.6,x:524.8,y:534.8},0).wait(2).to({regX:60.1,rotation:-5.6,x:535.3,y:534.9},0).wait(2).to({regY:7.8,rotation:-12.3,x:547.3,y:533.4},0).wait(2).to({regY:7.7,rotation:-18.2,x:564.1,y:534.6},0).wait(1).to({rotation:-28,x:589.8,y:531.9},0).wait(2).to({rotation:-41.9,x:622.2,y:526},0).wait(2).to({rotation:-42.1,x:614.1,y:525.7},0).wait(2).to({rotation:-45.1,x:595,y:526.3},0).wait(1).to({regX:60,regY:7.5,rotation:-44.6,x:572.4,y:520.8},0).wait(2).to({regX:56.3,regY:7.4,rotation:-52.7,x:563.1,y:518.3},0).wait(2).to({regY:7.3,rotation:-43.8,x:547.4,y:524.4},0).wait(2).to({regX:56.4,regY:7.2,rotation:-25.8,x:514.8,y:522.7},0).wait(2).to({rotation:-17.1,x:506.3,y:526.6},0).wait(1));

	// R B LL
	this.instance_14 = new lib.RBLL();
	this.instance_14.setTransform(513.2,510,1,1,17,0,0,56.6,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({regY:54.9,rotation:10.8,x:528.6,y:514.3},0).wait(2).to({rotation:3.9,x:541.2,y:514.1},0).wait(2).to({rotation:4.6,x:544.2,y:517.4},0).wait(3).to({rotation:1.6,x:552.7,y:517.7},0).wait(2).to({rotation:-3.6,x:561.5,y:515.5},0).wait(2).to({regX:56.5,regY:54.8,rotation:-10.3,x:571,y:510.8},0).wait(2).to({regY:54.9,rotation:-16.2,x:585.4,y:509.9},0).wait(1).to({rotation:-25.9,x:606.6,y:503.9},0).wait(2).to({regX:56.4,regY:54.8,rotation:-33.4,x:635.1,y:495.9},0).wait(2).to({rotation:-33.6,x:626.9,y:495.7},0).wait(2).to({rotation:-30.4,x:609.4,y:496.9},0).wait(1).to({regY:54.7,rotation:-27.6,x:588.3,y:492.2},0).wait(2).to({regY:54.9,rotation:-33.7,x:579.1,y:486.6},0).wait(2).to({regX:56.5,regY:54.8,rotation:-24.8,x:568.3,y:495.6},0).wait(2).to({rotation:-12.8,x:541.1,y:498.9},0).wait(2).to({regX:56.6,regY:54.7,rotation:-4.1,x:536,y:506.9},0).wait(1));

	// R B UL
	this.instance_15 = new lib.RBUL();
	this.instance_15.setTransform(538.9,433.5,1,1,17,0,0,60.6,73.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({regY:73.8,rotation:10.8,x:546,y:435.4},0).wait(2).to({regY:73.9,rotation:6.8,x:550.5,y:436.4},0).wait(2).to({regY:73.8,rotation:4.6,x:553.1,y:437.1},0).wait(3).to({rotation:1.6,x:557.2,y:437},0).wait(2).to({rotation:-1.1,x:560.3,y:436.8},0).wait(2).to({regY:73.7,rotation:-3.8,x:563.7,y:436.4},0).wait(2).to({regY:73.8,rotation:-9.8,x:570.4,y:436.6},0).wait(1).to({rotation:-19.5,x:579.5,y:434.2},0).wait(2).to({rotation:-31.7,x:594.5,y:428},0).wait(2).to({regY:73.7,rotation:-27.7,x:590.1,y:430.1},0).wait(2).to({regY:73.8,rotation:-17.5,x:582.6,y:434},0).wait(1).to({rotation:-7,x:569.9,y:433.7},0).wait(2).to({regY:73.9,rotation:-3.5,x:561.8,y:439.6},0).wait(2).to({rotation:3,x:554,y:438.3},0).wait(2).to({regY:73.8,rotation:15,x:539.1,y:434.8},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488.3,340.7,951.2,622.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;