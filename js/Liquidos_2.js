(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 504,
	height: 345,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.nucleocopia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.102)","rgba(0,0,0,0.6)"],[0,1],-6.1,-6.1,0,-6.1,-6.1,30.1).s().p("AipCoQhGhFAAhjQAAhiBGhHQBHhGBiABQBjgBBFBGQBHBHAABiQAABjhHBFQhFBHhjAAQhiAAhHhHg");
	this.shape.setTransform(23.5,23.5,1.021,1.021);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.102)","rgba(0,0,0,0.6)"],[0,1],-6.2,-6.2,0,-6.2,-6.2,30.7).s().p("AitCsQhHhHAAhlQAAhkBHhIQBJhIBkAAQBlAABHBIQBIBIABBkQgBBlhIBHQhHBIhlABQhkgBhJhIg");
	this.shape_1.setTransform(22.8,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:22.8,y:23.8}}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1,p:{x:24.3,y:23.9}}]},4).wait(4));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F0C6E2","#3366FF"],[0,1],-5.9,-5.9,0,-5.9,-5.9,4.9).s().p("AitCsQhHhHAAhlQAAhkBHhIQBJhIBkAAQBlAABHBIQBIBIABBkQgBBlhIBHQhHBIhlABQhkgBhJhIg");
	this.shape_2.setTransform(23.4,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({x:22.8,y:23.8},0).wait(4).to({x:23.4,y:23.5},0).wait(4).to({x:24.3,y:23.9},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,49.1,49);


(lib.nucleo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay(random(10));*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.102)","rgba(0,0,0,0.6)"],[0,1],-6.2,-6.2,0,-6.2,-6.2,30.7).s().p("AitCsQhHhHAAhlQAAhkBHhIQBJhIBkAAQBlAABHBIQBIBIABBkQgBBlhIBHQhHBIhlABQhkgBhJhIg");
	this.shape.setTransform(23.4,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.102)","rgba(0,0,0,0.6)"],[0,1],-6.1,-6.1,0,-6.1,-6.1,30.1).s().p("AipCoQhGhFAAhjQAAhiBGhHQBHhGBiABQBjgBBFBGQBHBHAABiQAABjhHBFQhFBHhjAAQhiAAhHhHg");
	this.shape_1.setTransform(28,19.7,1.021,1.021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:23.4,y:23.5}}]}).to({state:[{t:this.shape,p:{x:22.4,y:20.1}}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape,p:{x:22.1,y:23.9}}]},4).wait(4));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFCCFF","#3366FF"],[0,1],-5.9,-5.9,0,-5.9,-5.9,4.9).s().p("AitCsQhHhHAAhlQAAhkBHhIQBJhIBkAAQBlAABHBIQBIBIABBkQgBBlhIBHQhHBIhlABQhkgBhJhIg");
	this.shape_2.setTransform(23.4,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#F0C6E2","#3366FF"],[0,1],-5.9,-5.9,0,-5.9,-5.9,4.9).s().p("AitCsQhHhHAAhlQAAhkBHhIQBJhIBkAAQBlAABHBIQBIBIABBkQgBBlhIBHQhHBIhlABQhkgBhJhIg");
	this.shape_3.setTransform(22.4,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3,p:{x:22.4,y:20.1}}]},4).to({state:[{t:this.shape_3,p:{x:27.9,y:19.7}}]},4).to({state:[{t:this.shape_3,p:{x:22.1,y:23.9}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,49,49);


(lib.mano = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB062").s().p("AgBgHQgEgYAIAvIgEgXg");
	this.shape.setTransform(87.5,69.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Ai6HOIAEAIIgDABgAGAE9IgCgBQiTgEgbgGQgbgGgGgJQgRgLgrgkQgqgkgWggQgKgOgJgSQgLgXgKgeQgGgQgRhMQgNg0gqgiQgvgnhYgVIhEgUIhzgsQgzgYgNgkIgJgVIgMghQgHgWgCgcQgCgXAEgXIAEgSQAGgjAXAFIAnAYIArAlQAxApAzAXQAsAUA1ATIBDAXIACAAIANAEIARAGIAPAEIgBAAQA7APBDgBIABAAIAEAAQAOgBAPADQAcAEAcAQQAaAPA7AoICSBdIAwAdQAlBUAABSQAABBghBDQgcA3giAUIgBgBg");
	this.shape_1.setTransform(102.4,48.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABkElIgHgJQgdgngUgxQgFgPgMgqQgKg2gIgeQgFgQgFgNIAAAAQgPgbgagKQhEgehJgTIgpgLIhjglQgYgJgNgIQgUgSgPgLQgKgNgKgSQgJgQgHgRQgRgqgCgrQgBgYAGgfIAEgRIAJgbQAfgYAnAcQAZAQAmAlQA7AwA1AVQA2AWA7ATIAUAGIACABIAEABIAaAIQA+AQBOACIAFABIAdAGQA3AMAgAWIBKAzQBAAmBkBCIAKATQAKAHgJgFIgwgcIiShcQg7gogagPQgcgQgcgFQgOgCgPABIgEAAIgBAAQhDABg7gQIABABIgPgFIgRgFIgNgEIgCgBIhDgXQg1gTgsgUQgzgWgxgqIgrgkIgngYQgWgGgHAjIgEASQgDAXABAXQACAdAHAVIAMAiIAJAUQANAkAzAYIBzAtIBEAUQBYAVAvAmQAoAhANA0QATBOAGAQQAKAdALAXQAJASAKAOQAWAgAqAkQArAkARALQAGAKAbAFQAbAGCTAEIACACIABABIABAHQABAFgGAFQgFADgIADIgcAAQi5AAhkh5gAnsiJIABAAIAAABIgBgBg");
	this.shape_2.setTransform(97.9,41);

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB062").s().p("AojHrQgQgKgFgLIADgBQCKgdA9hFQA8hFAIgcQAHgcgQgQIACgFIABgGIAAgVQgxgDgMAAIniBiQgPABgQgWQgLgQgHgTIAZgQQAEAGAMAHQANAHAEAAICcgMQAKAAAdgGQAPAAAwgUIAigOQAigPAhgSQCIhHgCgpIACAAQAXBEAgA9IABACIACAJIADgBIADgBIAEADIAfAfQAUARAfgCQALAAATgFQAHAAABgFIgBgNQAAgKgEgOQgHghgXg5QgphggDgMQgGgWgFicQgCgoAFgVIABAHIADgBQAOAlAZBLQAZBGAWAtQAlBJAqBCQAbApATAWQAWAYALgBQAIAAADgCIAPAJQAOAIAVgBQAKAAAoAGIAWgCQAWgDATgGQAxgNAHgXQACgEgBgFQgBgWgNgMQgKgKgWgHIgvgNQgfgJgXgNQgdgWgggcQg+g1gNggIgEgVQgegngTgxQgGgOgMgrQgJg2gJgeIgCgGIABAAIgBgCIgXgcQgUgJgngGQhHgJgngIQhmgTg9gzQgUgKgKgGQgFgEgVgcIgBAAIASgEIBCgIQEBAKAqAMQAqAMAvAEIgGAnQAAAEAEAEQAEAFAAAGQgDAngGASQADAGACAHIAGAlQAZBVAwA1QBrB3B1AAQAbAAAjgLQAHAAArgJQAaAAAAARQAAAVglAgQgkAegEAFIgBAJQAZAdAjAaQAwAkAegCIADAAQA1gDAcgVQAVgQANgfIAUguQANgVAcgBQATgBAlAFQAmAEAjgBQALgBBFgNQBkgWC9glIANBtIgIAAImLA5QhCAQgeARQgWAMgXAPIhZBEIgCACIgWAPIADgEIgLAJQgYAPgYAKQhWAiiRAHQgWABhigTQhhgTgXABQgLAAgyAjQhgBCheA1QhfA1g2AHQgSADgPAAQgcAAgOgKgAgwhtIAGAIIgKgQIgMgTQAIAPAIAMgAhvlSIAAAAIgBgBIABABgAjAmWIAAAAIADABIAAgDIgBAAgAhtm9IACgFIgEAAgAxJAaQgNgZgBgSIACgHQASAOArAJIA7ABQAlgBBdgTIAagGIA+gOQAygNAxgOIAJgDQEChLgDg7QAAgIgEgGQABAAABgBQABAAAAAAQAAgBABAAQAAAAAAAAQgDg+kIgDQhDgBhUADIg3ADIgJAAQh1AGgagJQgSgFgHgOQgGgMgBgbQAAgJARgLQAMAmBvAEIAaAAQAcAAAkgCQBDgDBdgLIAAAAQAegCA4ACQAxgCBRAYQAvAOAVAJQgFAgABAPQAICeAsCBIgCAAQgBgFgRgVIgRgSQAIgFAAgEIgBgHIgBACQgSgNgagCQgLgBgqACIg/ALIg0AIIjUAcIgXAFIgsAJQiCAdgyACIgCABQgfAAgTgngAj7hNQgEgYALAxIgHgZgAj9kXQgFAAAHgIIACAJIgEgBg");
	this.shape_3.setTransform(112.7,77.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AoyHnIgBAAIgBgGQgCgOAqgkIBWhFQA+gzAugoQAXgUAGgEQAQAQgIAcQgHAcg8BFQg9BFiLAdIgCACgAtRD7QgMgHgEgGQBJgvAmgUQAngVA0gWIANgGQA9gaBvgmQBTgcAVgPIARAUQARAVABAFIABAAIAAAAIgBABQACAoiIBHQgiASghAPIgiAOQgwAUgPAAQgdAGgLABIibALIgBAAQgEAAgMgHgAjvDpIgegfIgEgDQADgCADgEQhnjigJjAQgBgIADgjIABgKQAEgwAEgKQgKALgGAuIgBAGQgVgJgvgOQhRgYgxADQg5gDgdADIgBAAQhcAKhDADQgkACgcAAIgaAAQhvgDgMgnIABgBQAggUBfgaIA+gRIAggHQBIgSBNgOIAzgJIATgDQAWgDAkgIQAVAbAGAEQAKAGAUAKQA9AzBmATQAnAIBHAJQAnAGAUAKIAXAcIAAABIACAHQAJAdAJA3QAMAqAGAOQATAxAeAnIAEAVQANAgA+A1QAgAcAcAWQAYANAfAJIAvANQAWAHAKAKQANANABAVQAAAFgBAEQgHAXgxANQgTAGgWADIgWACQgogGgKAAQgWABgNgHIgQgJIACgCIABgIIgMgMQi1jAg+kGIgEAAIACAZIgDABIgCgHQgEAVABAoQAGCcAGAUQADAMAoBjQAXA4AIAhQAEAPAAAKIAAAMQgBAFgGAAQgUAFgKABIgFAAQgcAAgTgQgAj1g8IAHAZIgIghIABAIgAj3kGIAEABIgCgJQgHAIAFAAgAkZDAIAFAJIgDAAgAFeB+QgjgZgZgeIABgJQAEgFAkgeQAlggAAgVQAAgRgaAAQgrAJgHAAQgjALgbAAQh1AAhsh3Qgvg1gZhVIgGglQgCgHgDgGQAGgSADgnQAAgGgEgFQgEgEgBgEIAHgnIA5ALQAvAKBGAMIA2AJIByAgQAaAOAcARIARAKQAlAYAuAOIAQAFIBIAOQAmAFArgBQA9AABFgKQDIgdBUgGIAggCQAWgBAKgFIAhEWQi9AkhkAUQhFAPgLABQgjACgmgFQgmgFgSABQgcABgNAWIgUAuQgNAfgVAPQgcAVg1ADIgDABIgCAAQgeAAgugjgAwSAPQgsgKgSgMQAQguDug5IA+gOIAhgIIBYgRICbgeQBagQAQgGQAEAGAAAIQADA7kCBMIgJACQgxAOgyANIg+AOIgaAGQhdARglACIg7gBgAgqhbQgIgNgIgOIAMASIAKAQIgGgHgAhqlCIABABIAAABIgBgCgAi6mEIAAgBIACgCIABAAIAAAEIgDgBgAhpmxIAEAAIgCAFgAnmnnIgBABQgJAAAKgBg");
	this.shape_4.setTransform(112.1,75.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ap0HxQgHgKgFgLIgDgLQgBgcCAhnIBchIQAugjAGgHQgBgCgSgDQgRgDgKAAQiOAchRASIiHAcQhyAXgIABQgZABgYgiQgUgcAAgMQgCgkDohkIANgFQBNghBUgfQBPgeAcgGIAEgDIgqgIIhdANIkJAhIgVAEIg0AMQhoAeg1AEQg1AEgUgiQgUgigDgRIgCgQQgBgaAGgMQAHgLAUgIIA8gTIBugjQAegKAhgJIA8gOIACgBQAigHBbgRID9gtQgPgWhugQQg/gIgMACIg2ADIgcABIh3AHIhAADIgkADQiVAIgDg3QgDg3ADgHQADgHANgGQASgJBughIAHgDIA9gRIBbgXIBdgXQAsgKAVgEIAFgBICfgWIDuAUIApAHIAGABQAaADB1AZIAHACQB3AaAuAEIBxAYQAcAPAaASIAQALQAVAPAvANIAhAKIBHAPQAfACAygCQA3gBBQgHQAugDAkgFIArgHIDWgfIABABQASATgPAJQgJAFgWABIggACQhUAHjIAcQhGAKg9AAQgrABgmgFIhHgOIgRgFQgtgOgmgYIgRgKQgbgRgagOIhyggIg2gJQhEgMgxgKIg5gLQgvgEgrgMQgqgMkBgKIhBAIIgSAEIAAABQgkAIgWADIgTADIgzAJQhNAOhJASIggAHIg9ARQhfAaghAUIAAABQgSALABAJQABAbAGAMQAHAOASAGQAaAIB0gGIAJAAIA4gCQBUgDBDAAQEHAEADA9QAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgRAGhaAQIiaAeIhYARIgiAIIg9AOQjuA5gQAuIgBAHQABASANAaQATAnAggBQAygDCDgdIArgJIAYgFIDUgcIA0gIIA+gLQArgCAKABQAaACATANIAAgCIABAHQAAAEgHAFQgVANhTAcQhwAmg8AaIgOAGQg0AXgnAUQglAUhJAvIgZAQQAHATALAQQAQAWAPAAIHhhjQANAAAwADIABAVIgBAGIgDAFQgFAEgYAUQguAog+AzIhVBFQgqAkABAOIACAGIABAAIAAABQAFAKAPALQAVAOA3gHQA2gIBeg1QBeg1BghCQAygjALAAQAYgBBiATQBgATAWgBQCSgHBVgiQAYgKAZgPIALgJIgEAEIAXgPIABgCIBZhEQAXgPAWgMQAfgRBCgPIGKg5IAIgBQBIgHAwgBIADAAIABAWIh5AJIgKABImKA2QgxAJgiALIAAAAIgxAmQg6AsgpAcQg9AsgWAHQhCAWh8AGQhSAEhagTIhOgUQgUABg5AiIh3BMQizBvhmAEIgDABQgfAAgTgcgAokn4IACgBQgLABAJAAgAhRC1QgUgWgagpQgqhBglhKQgXgtgYhGQgahLgOglIgBgZIAEAAQA+EIC3C+IAMAMIgBAIIgCACQgCABgJABIAAAAQgNAAgVgYgAlVCuIgBgCQghg8gXhFIAAAAQgsiBgHidQgBgPAEghIABgGQAGguALgLQgEALgEAvIgBAKQgDAjAAAIQAJDABnDiQgCAEgDACIgEACIgEgJgAjAk2IABABIAAAAIgBgBg");
	this.shape_5.setTransform(118.1,77.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,236.3,130.5);


(lib.Animar7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AorIUQgIgIgGgLIgFgJQgFgdBxh3IBRhUQAogpAFgIQAAgCgTgBQgRAAgKACQiIAvhPAdIiBAvQhtAmgJACQgYAFgdgfQgXgYgCgMQgHgkDYiDIAMgHQBIgrBOgrQBLgpAagLIADgDIgqgCIhaAZIkCBHIgUAIIgxATQhkArg0AMQg0AMgYgfQgYgfgGgSIgEgRQgFgZAFgMQAFgMATgLQAIgFAwgXIBogwQAdgOAfgNIA5gWIACgBQAhgMBYgdID0hQQgSgUhwAAQg+ABgNADIg0AKIgcAGIh1AXIg/AMIgjAHQiTAegKg2QgKg2ACgIQABgHAMgIQARgLBogxIAGgDIA7gZIBXgkIBZgkQAqgQAUgHIAFgCICagrIDugOIAqACIAGgBQAaABB4AIIAHAAQB7AJAsgCIB0AIQAeALAbAOIASAJQAXALAwAHIAiAGIBIAEQAfgCAxgJQA3gJBOgRQAtgKAjgKIAqgNIDPg9IABABQAVARgNAKQgJAHgWAEIgfAGQhSATjCA4QhEAUg8AIQgqAGgnABIhJgEIgRgCQgvgIgogSIgSgIQgegNgcgKIh1gQIg1gCQhHgBgygEIg5gDQgwADgrgGQgrgGkAAaIhAARIgRAHIAAAAQgiANgWAHIgTAFIgxAQQhKAZhFAbIgfAMIg6AZQhaAngeAZIgBAAQgPAOABAJQAFAaAIALQAJANASADQAbAFBzgWIAIgBIA3gLQBTgOBCgJQEGghALA8QAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBABQgPAIhYAdIiUAyIhVAeIggAMIg7AWQjkBYgJAwIAAAHQAEATAQAYQAZAkAggGQAxgJB9gvIApgPIAXgIIDOg7IAygQIA9gRQApgIALAAQAagCAUAKIAAgCIACAFQABAEgHAGQgTARhOAoQhpA1g4AiIgNAIQgwAegkAZQgiAZhCA5IgXAUQAKARANAOQATAUAPgDIHPikQAMgCAwgEIAEAVIAAAGIgCAGIgZAcQgoAug3A6IhKBRQglApADANIADAGIAAABIABAAQAGAJARAJQAXALA0gPQA1gPBWhBQBWhCBVhPQAtgpALgCQAXgEBiAFQBkAFAWgEQCPgbBPguQAXgNAWgSIAKgLIgDAFIAUgSIABgCIBPhQQAVgSAUgPQAcgTA+gZIF/hvIAIgCQBGgQAvgIIADgBIAEAWIh2AaIgKACIl/BtQguANghAPIABAAIgsAtQgzA0gkAiQg3AzgVAKQg+Agh6AXQhRAPhegGIhOgJQgTADg0AqIhrBcQiiCHhkASIgMACQgZAAgUgWgApmnVIABgBQgKACAJgBgAk7CtIgBgBQgpg4ghhAIAAgBQg9h5geibQgDgPAAggIAAgHQAAguAJgNQgCALACAwIAAAKQACAjACAIQAkC8CFDSQgCAEgCADIgEACIgFgIgAg5CQQgWgTggglQgzg7gvhDQgdgqgihCQgjhHgTgiIgFgZIAEgBQBiD9DQCiIANALIAAAIIgBACQgCACgJABIgCABQgNAAgWgTgAjrlHIABABIAAAAIgBgBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB062").s().p("AnbH5QgRgIgGgKIACgCQCFgwAyhNQAzhMADgdQADgcgSgOIACgGIAAgGIgEgVQgwAEgMACInPClQgPACgTgUQgNgNgKgSIAXgUQAFAFAMAGQAOAFAEAAICZgiQAKgBAcgKQAPgDAsgaIAggTQAfgTAfgWQB9hZgIgpIABAAQAhBAApA4IABACIACAIIADgBIAEgCIAEADIAiAaQAXAOAfgGQAKgBASgIQAHgBAAgGIgCgMQgCgKgFgOQgMgfgfg1Qg2hagEgLQgKgVgbiaQgHgnACgWIACAHIADgBQATAiAjBIQAiBBAdAqQAvBDAzA7QAgAlAWATQAXAVAMgCQAJgCACgCIARAHQAOAGAVgEQAKgCApABIAVgGQAWgGARgIQAvgUAEgXQABgFgBgFQgFgVgOgKQgLgJgYgEIgwgGQgggFgZgJQgfgRgjgWQhFgugSgeIgHgUQgjgjgagtQgHgOgSgoQgRg0gMgcIgDgHIAAAAIgBgBIgagZQgVgGgpgBQhGABgpgCQhngFhDgpQgWgIgKgFQgGgDgZgYIAAAAIARgHIBAgRQEAgaArAGQArAGAwgDIgCAoQACAEAEADQAFAFABAGQACAmgDATQAEAGACAHIALAkQAlBQA4AuQB6BmBzgQQAbgEAhgPQAHgBApgPQAagEACARQADAVggAnQgfAjgDAFIAAAJQAdAZAmATQA1AdAdgGIADAAQA0gLAZgXQATgSAIggIANgxQAKgWAbgGQATgDAmgBQAmAAAigHQALgCBCgZQBggkC2g+IAcBrIgIACIl/BwQg+AYgcAWQgUAMgVASIhPBQIgBACIgUASIADgFIgKALQgWASgXANQhPAuiPAbQgWAEhkgFQhigFgXAEQgLACgtApQhVBPhWBCQhWBCg1AOQgeAJgUAAQgPAAgKgFgAhBieIAHAGIgMgOIgOgRQAJAOAKALgAifl4IAAgBIgBAAIABABgAj5mxIABABIACAAIAAgDIgBAAgAivnnIADAEIACgFgAw8B5QgQgYgEgTIAAgHQAUALAsAEIA7gHQAlgHBZggIAZgJIA7gXQAwgSAvgUIAIgEQD1hvgLg6QgBgIgFgFQABgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgLg8kGAhQhCAJhTAPIg3AKIgIABQhzAWgbgFQgSgDgJgNQgIgLgFgaQgBgJAPgNQASAkBugMIAZgDQAdgEAjgHQBCgNBagXIAAAAQAdgHA4gFQAxgJBTAMQAxAIAVAGQAAAgADAPQAeCbA9B5IgBABQgCgFgUgTIgTgPQAHgGgBgDIgCgIIAAACQgUgKgaACQgLABgpAHIg9AUIgyANIjOA7IgXAIIgpAPQh9AvgxAKIgJAAQgbAAgVgfgAkFhjQgHgXARAvIgKgYgAkjkrQgFABAGgJIACAJIgDgBg");
	this.shape_1.setTransform(-5.4,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AnlIDIAAgBIgDgFQgDgOAlgpIBKhRQA3g6AoguIAZgcQASAOgDAcQgEAdgyBMQgyBNiFAwIgCACgAsiFBQgMgFgFgGQBBg5AjgYQAkgaAwgeIANgHQA4gjBpg1QBOgnATgSIATASQAUASACAFIABgBIAAABIgBAAQAHAph8BZQgfAWgfATIggATQgtAagOADQgcAKgKACIiZAhIgBAAQgEAAgNgFgAjIDbIgigbIgEgDQACgCACgEQiGjSgji9QgCgIgCgiIAAgLQgDgvADgLQgJAMAAAuIAAAHQgWgGgwgIQhTgMgxAJQg4AFgdAHIAAAAQhbAXhBANQgjAHgdAEIgZADQhuAMgSgkIABgBQAdgYBbgoIA6gZIAfgMQBFgbBKgZIAxgPIATgGQAWgHAigNQAZAZAGADQAKAFAWAHQBDApBnAFQApACBGgBQApABAVAGIAaAZIABABIADAHQAMAcARA1QASAoAHANQAaAuAjAiIAHAVQARAdBGAtQAjAWAfASQAZAJAgAFIAwAGQAXAEAMAJQAOAKAFAWQAAAEAAAFQgEAXgvAUQgSAIgVAGIgVAGQgpgBgKACQgVAEgOgGIgRgHIABgCIAAgIIgNgKQjOijhij8IgEAAIAFAZIgDABIgCgGQgCAVAHAnQAbCaAKAVQAEALA2BaQAeA1ANAgQAFAOACAJIACANQAAAFgHABQgSAIgKABQgKACgIAAQgUAAgQgJgAj3hHIAKAYIgMggIACAIgAkSkOIgCgJQgGAJAFgBIADABIAAAAgAj3C4IAFAHIgDACgAxCBjQAJgwDkhXIA7gXIAggMIBVgdICUgzQBYgdAPgIQAEAGACAIQALA5j1BvIgIAEQgvATgwATIg7AXIgZAJQhZAgglAHIg7AHQgsgEgUgLgAFwAeQgmgUgdgYIAAgJQADgFAfgjQAggngDgVQgCgQgaADQgpAPgHABQghAPgbAEQhzAQh6hmQg4guglhQIgLgkQgCgHgEgFQADgTgCgnQgBgGgFgFQgEgDgCgEIACgoIA5AEQAyADBFACIA3ABIB1AQQAcAKAeANIASAIQAoASAvAIIARADIBJADQAmAAArgHQA8gIBEgUQDCg4BSgSIAfgHQAWgEAJgGIBHEOQi2A+hgAlQhCAYgLACQgiAHgmAAQgmABgTADQgbAGgKAWIgNAxQgIAfgTARQgaAagzAKIgDAAIgKABQgcAAgsgYgAgziCQgKgLgJgOIAOARIAMAOIgHgGgAiSldIABAAIAAABIgBgBgAjqmUIgBgBIACgCIABAAIAAADIgCAAgAihnLIAFgBIgCAFgAohnMIgBABIgEABQgCAAAHgCg");
	this.shape_2.setTransform(-6.8,-1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.5,-55.4,235.2,110.8);


(lib.Animar4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB062").s().p("AgCgHQgIgXAQAtIgIgWg");
	this.shape.setTransform(-8.3,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhlG3IAGAIIgDABgAEMDmQgdgCgFgJQgUgJgvgdQgugegbgcQgMgNgLgQQgPgWgNgbQgIgQgehIQgTgygtgcQg0gfhagKIhGgJIh5gcQg1gRgTgiIgLgTIgRggQgKgUgFgbQgFgYAAgXQAAgKACgIQABgjAXACIAqASIAwAeQA3AjA0APQAwANA2ALIBFAOIACAAIAOADIARADIAQACQA+AGBAgKIABAAIADgBQAPgCAPAAQAcABAeALQAcAMBAAfICeBIIAzAVQAwBQAMBRQAJA/gYBHQgTA7gfAYIgBgBIgCgBQiEAPgjAAIgHAAg");
	this.shape_1.setTransform(1.5,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACVEQIgJgIQgjgigZgtQgIgOgSgoQgQg1gNgcQgHgPgIgMIAAAAQgSgZgagHQhJgThKgJIgqgFIhngWQgagHgOgGQgWgOgQgJQgNgMgLgQQgLgPgJgQQgXgngIgqQgFgYACgfQAAgKACgIIAFgcQAbgcArAWQAbANAqAfQBBAnA4AOQA4AOA+AKIAUAEIACAAIAFABIAaAEQBAAIBOgKIAEAAIAeACQA3AFAkARIBRApQBDAbBtA0IANAUQALAFgKgEIgzgWIiehHQhAgggcgLQgegMgcAAQgPgBgPADIgDAAIgBAAQhDALg7gGIgQgDIgRgDIgOgCIgCAAIhFgOQg2gLgwgOQg0gPg3giIgwgfIgqgSQgXgCgBAkQgCAIAAAKQAAAXAFAXQAFAbAKAVIARAgIALATQATAhA1ARIB5AcIBGAKQBaAJA0AgQArAZAVAzQAeBKAIAPQANAcAPAVQALAQAMAOQAbAbAuAeQAvAeAUAJQAFAIAdACQAaACCUgQIACABIABABIACAGQABAGgFAFQgFAEgHADQgzAKguAAQiJAAhchWgAnxhGIAAAAIABABIgBgBg");
	this.shape_2.setTransform(-2.9,-9.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-45.6,105.6,91.3);


(lib.animVASO2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_97 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(97).call(this.frame_97).wait(1));

	// Capa 7
	this.instance = new lib.Animar4("synched",0);
	this.instance.setTransform(100.4,-39.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({rotation:6.5,x:54.9,y:-11.6},12).to({_off:true},1).wait(51));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("AhiCpIDBAAAhjA9IBeAAAhiEQIBdAAAhiF6QBlAMBfgMAhiiYIBdAAAhigtQBvANBXgNAhikFQBmANBggNAhil/IBdAA");
	this.shape.setTransform(8,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0F1F4").ss(2.3,1,1).p("AJKp8QgJAOgKAUQgMAagBAHQABAOAAAVQgBAqAFPhQgBBlhABLQh9CTlGgLQlQgMhzhkQgrgmgPg1QgIgegCg6QgIk3gGj0QgNnfgDgFQgCgEgQguQgSgtgPgHQgZgLgFgPQApggBfgtQBfgtB+gSQCPgVAEAAQBTgKBmAGQFJAQBWAoQAdANASAUQASATACATQAGAlgEAKg");
	this.shape_1.setTransform(-0.3,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E8F4").s().p("AitBvQg6gGhCgIIhrgVQgrgKgcgNIANAAQAEAAAaAHIAcAIIBrASIBzAIQBbAJBbgJIBagDQCcAFDkg1QAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQh4AehOAQQhNAQhvgCIhaAEQg8ADgsAAQgqAAgbgCgAmHgiQALgIAQgHQAegPAqgMQCBgkDPAAQDsAABrAbQAiAJAVALIAUANIgCADQgPgKgogNQgpgNgSAAQghgGgtgGQhZgMiIAAQkaAAiXBMg");
	this.shape_2.setTransform(1.5,-45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(199,205,231,0.451)").s().p("AArMtQlQgMhzhkQgrgmgPg1QgIgegCg6IgOorQgNnfgDgFIgSgyQgSgtgPgHQgZgLgFgPQApggBfgtQBfgtB+gSICTgVQBTgKBmAGQFJAQBWAoQAdANASAUQASATACATQAGAlgEAKQgJAOgKAUQgMAagBAHIABAjQgBAqAFPhQgBBlhABLQh0CIkiAAIgtAAgAC2JKQgwAGgxAAQgyAAgygGQAyAGAyAAQAxAAAwgGgABNHgIhcAAgACyF5IjBAAgABNENIhcAAgAC4ChQgsAGgyAAQgyAAg3gGQA3AGAyAAQAyAAAsgGgABNA2IhcAAgAC4g1QgwAGgyAAQgyAAgzgGQAzAGAyAAQAyAAAwgGgABNivIhcAAgAm7oUIgNABQAbAMAsAKIBqAVQBDAIA5AGQA4AFB0gFIBbgFQBvACBOgQQBOgQB4geQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQjkA1idgFIhbADQhZAJhcgJIhzgIIhqgSIgcgHQgagIgEAAIAAAAgAoKqJIAAAKQAAAbBJAYQA1ARBaAPIACABQBpAbCSABIAQABIAEAAICggGQAtAABGgIQBMgJBDgPQAjgHAbgIQBwggAAgmIgCgJQgDgLgFgKQgPgagagDIAAALQAHACAJAFQAVAMgCAZQgBAZhHAWQhqAbgPAGQgQAGhuALQiHAMh5AAIgFAAIgQAAQiLgDhwgVIg3gMQgkgIgygPIgEgBQgZgIgTgNQgDgCgHgNQgFgMgGAAIAAAAQgGAAgCADgAkSqXQgpAMgeAPQgQAHgLAIIAAABQCYhMEZAAQCJAABZAMQAsAHAhAGQATAAApANQAoAMAPAKIABgDIgTgMQgVgMgigJQhrgbjsAAIAAAAQjQAAiBAkg");
	this.shape_3.setTransform(-0.3,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0F1F4").s().p("AgzBaIgEAAIgQAAQiSgChpgbIgCAAQhagQg1gRQhJgXAAgZIAAgKQACgDAGAAQAGAAAFALQAHANADACQATALAZAIIAEABQAyAQAkAHIA3AMQBwAVCLADIAQABIAFAAQB4AACIgNQBugLAQgFQAPgGBqgbQBHgUABgaQACgZgVgLQgJgGgHgCIAAgKQAaADAPAaQAFAJADALIACAKQAAAjhwAgQgbAIgjAHQhDAPhMAJQhGAJgtAAIigAFIAAAAg");
	this.shape_4.setTransform(1.5,-48.9);

	this.instance_1 = new lib.Animar4("synched",0);
	this.instance_1.setTransform(54.9,-11.6,1,1,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahjl/IBeAAAhjkGQBnANBggNAhjgtQBvAMBYgMAhjiYIBeAAAhjF6QBmAMBfgMAhjEQIBeAAAhjA9IBeAAAhjCqIDBAA");
	this.shape_5.setTransform(8.2,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F0F1F4").ss(2.3,1,1).p("AJKp8QgKAOgJAUQgMAagBAIQABAOAAAUQgBAqAFPhQgBBmhABKQh9CTlGgLQlQgMhzhkQgrgmgPg1QgJgegBg5QgIk4gGj0QgNnegDgFQgCgFgQguQgSgtgPgHQgZgLgFgOQApghBfgsQBeguB/gSQCOgVAFAAQBTgKBmAGQFJAQBWAoQAdAOASATQASATACATQAGAlgEAKg");
	this.shape_6.setTransform(-0.2,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0F1F4").s().p("Ag3BaIgQAAQiSgChpgbIgCAAQhagQg1gRQhJgYAAgZIAAgKQACgDAGABQAGgBAFAMQAGANAEACQATALAZAIIAEABQAyAPAkAIIA3AMQBwAVCLADIAQABIAFAAQB4gBCIgMQBugLAQgFQAPgHBqgaQBHgVABgZQABgZgUgLIgQgIIAAgKQAaADAPAaQAFAJADALIACAKQAAAjhwAgQgcAIgiAHQhDAPhMAJQhGAJgtAAIigAFIgEAAg");
	this.shape_7.setTransform(1.6,-48.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E8F4").s().p("AitBvQg6gGhDgIIhqgVQgrgKgcgNIANAAQAEAAAaAHIAcAIIBqASIB0AIQBbAJBbgJIBZgDQCdAFDkg1QABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQh4AehOAQQhNAPhwgBIhZAEQg+ADgsAAQgpAAgagCgAmHgiQALgIAQgHQAegPAqgMQCAglDQABQDrgBBsAcQAiAJAVALIAUANIgCADQgPgKgogNQgpgNgSAAQgigGgsgGQhZgMiJAAQkZAAiXBMg");
	this.shape_8.setTransform(1.7,-45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(199,205,231,0.451)").s().p("AArMtQlQgMhzhkQgrgmgPg1QgJgegBg5IgOosQgNnegDgFIgSgzQgSgtgPgHQgZgLgFgOQApghBfgsQBeguB/gSICTgVQBTgKBmAGQFJAQBWAoQAdAOASATQASATACATQAGAlgEAKQgKAOgJAUQgMAagBAIIABAiQgBAqAFPhQgBBmhABKQh0CIkhAAIguAAgAC2JKQgwAGgxAAQgyAAgygGQAyAGAyAAQAxAAAwgGgABNHgIhcAAgACyF6IjBAAgABNEOIhcAAgAC4ChQgsAGgyAAQgyAAg3gGQA3AGAyAAQAyAAAsgGgABNA3IhcAAgAC4g1QgwAGgyAAQgyAAgzgGQAzAGAyAAQAyAAAwgGgABNivIhcAAgAnIoTQAbAMAsAKIBqAWQBCAIA6AFQA4AFB0gFIBbgFQBvACBOgQQBOgQB4gdQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQjkA1idgFIhbADQhZAKhcgKIhzgHIhqgSIgcgIQgagIgEAAgAoKqJIAAAKQAAAbBJAYQA1ARBaAQIACAAQBpAbCSACIAQAAIAEAAICggFQAtAABGgJQBMgJBDgPQAigHAcgIQBwggAAglIgCgKQgDgLgFgJQgPgagagDIAAAKIAQAIQAUALgBAZQgBAZhHAXQhqAagPAHQgQAFhuALQiIAMh4ABIgFAAIgQgBQiLgDhwgVIg3gMQgkgIgygPIgEgBQgZgIgTgNQgEgCgGgNQgFgMgGABIgBAAQgFAAgCACgAkSqXQgpAMgeAPQgQAIgLAHIAAABQCYhMEZAAQCJAABZANQAsAGAhAGQATAAApANQAoAMAPAKIABgDIgTgMQgVgMgigJQhsgbjrAAIgGAAQjLAAiAAkg");
	this.shape_9.setTransform(-0.2,12.9);

	this.instance_2 = new lib.nucleo("synched",0);
	this.instance_2.setTransform(28.5,84.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_3 = new lib.nucleo("synched",0);
	this.instance_3.setTransform(38,80.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_4 = new lib.nucleo("synched",0);
	this.instance_4.setTransform(30.7,83.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_5 = new lib.nucleo("synched",0);
	this.instance_5.setTransform(20.2,85.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_6 = new lib.nucleo("synched",0);
	this.instance_6.setTransform(11.6,85.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_7 = new lib.nucleo("synched",0);
	this.instance_7.setTransform(1.8,85.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_8 = new lib.nucleo("synched",0);
	this.instance_8.setTransform(-7.5,84.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_9 = new lib.nucleo("synched",0);
	this.instance_9.setTransform(-16.5,83.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_10 = new lib.nucleo("synched",0);
	this.instance_10.setTransform(-23.6,81.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_11 = new lib.nucleo("synched",0);
	this.instance_11.setTransform(-32.8,79.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_12 = new lib.nucleo("synched",0);
	this.instance_12.setTransform(11.9,77.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_13 = new lib.nucleo("synched",0);
	this.instance_13.setTransform(5.6,77.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_14 = new lib.nucleo("synched",0);
	this.instance_14.setTransform(-2.5,77.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_15 = new lib.nucleo("synched",0);
	this.instance_15.setTransform(-13.5,77,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_16 = new lib.nucleo("synched",0);
	this.instance_16.setTransform(-22.8,77,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_17 = new lib.nucleo("synched",0);
	this.instance_17.setTransform(-29.9,75.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_18 = new lib.nucleo("synched",0);
	this.instance_18.setTransform(-38.7,74.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_19 = new lib.nucleo("synched",0);
	this.instance_19.setTransform(21.1,75.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_20 = new lib.nucleo("synched",0);
	this.instance_20.setTransform(30.3,76.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_21 = new lib.nucleo("synched",0);
	this.instance_21.setTransform(43.9,75.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_22 = new lib.nucleo("synched",0);
	this.instance_22.setTransform(46.2,67.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_23 = new lib.nucleo("synched",0);
	this.instance_23.setTransform(36.1,71.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_24 = new lib.nucleo("synched",0);
	this.instance_24.setTransform(28.3,70.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_25 = new lib.nucleo("synched",0);
	this.instance_25.setTransform(18.5,70.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_26 = new lib.nucleo("synched",0);
	this.instance_26.setTransform(10.5,69.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_27 = new lib.nucleo("synched",0);
	this.instance_27.setTransform(3.1,69.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_28 = new lib.nucleo("synched",0);
	this.instance_28.setTransform(-7,70.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_29 = new lib.nucleo("synched",0);
	this.instance_29.setTransform(-16,70.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_30 = new lib.nucleo("synched",0);
	this.instance_30.setTransform(-23.5,69.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_31 = new lib.nucleo("synched",0);
	this.instance_31.setTransform(-31.9,70.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_32 = new lib.nucleo("synched",0);
	this.instance_32.setTransform(-40,69.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_33 = new lib.nucleo("synched",0);
	this.instance_33.setTransform(-40.2,59.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_34 = new lib.nucleo("synched",0);
	this.instance_34.setTransform(-25,60.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_35 = new lib.nucleo("synched",0);
	this.instance_35.setTransform(46.5,57.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_36 = new lib.nucleo("synched",0);
	this.instance_36.setTransform(46.3,48.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_37 = new lib.nucleo("synched",0);
	this.instance_37.setTransform(38.1,50.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_38 = new lib.nucleo("synched",0);
	this.instance_38.setTransform(-41,49.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_39 = new lib.nucleo("synched",0);
	this.instance_39.setTransform(46.3,41.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_40 = new lib.nucleo("synched",0);
	this.instance_40.setTransform(34.6,40.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_41 = new lib.nucleo("synched",0);
	this.instance_41.setTransform(-34.6,40.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_42 = new lib.nucleo("synched",0);
	this.instance_42.setTransform(39.4,33.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_43 = new lib.nucleo("synched",0);
	this.instance_43.setTransform(-39.7,61.1,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_44 = new lib.nucleo("synched",0);
	this.instance_44.setTransform(-29.4,62.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_45 = new lib.nucleo("synched",0);
	this.instance_45.setTransform(-19.2,62.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_46 = new lib.nucleo("synched",0);
	this.instance_46.setTransform(-10.1,62.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_47 = new lib.nucleo("synched",0);
	this.instance_47.setTransform(0.2,63.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_48 = new lib.nucleo("synched",0);
	this.instance_48.setTransform(9.1,64.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_49 = new lib.nucleo("synched",0);
	this.instance_49.setTransform(18.6,64.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_50 = new lib.nucleo("synched",0);
	this.instance_50.setTransform(27.9,63.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_51 = new lib.nucleo("synched",0);
	this.instance_51.setTransform(35.3,63.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_52 = new lib.nucleo("synched",0);
	this.instance_52.setTransform(43.5,66.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_53 = new lib.nucleo("synched",0);
	this.instance_53.setTransform(44,57.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_54 = new lib.nucleo("synched",0);
	this.instance_54.setTransform(41.5,56.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_55 = new lib.nucleo("synched",0);
	this.instance_55.setTransform(32.5,55.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_56 = new lib.nucleo("synched",0);
	this.instance_56.setTransform(23.6,56.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_57 = new lib.nucleo("synched",0);
	this.instance_57.setTransform(14.1,55.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_58 = new lib.nucleo("synched",0);
	this.instance_58.setTransform(5.3,54.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_59 = new lib.nucleo("synched",0);
	this.instance_59.setTransform(-3.2,54.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_60 = new lib.nucleo("synched",0);
	this.instance_60.setTransform(-12,54,0.221,0.224,0,0,0,26,25.1);

	this.instance_61 = new lib.nucleo("synched",0);
	this.instance_61.setTransform(-19.4,52.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_62 = new lib.nucleo("synched",0);
	this.instance_62.setTransform(-26.2,56.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_63 = new lib.nucleo("synched",0);
	this.instance_63.setTransform(-33.1,56.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_64 = new lib.nucleo("synched",0);
	this.instance_64.setTransform(-25.2,47.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_65 = new lib.nucleo("synched",0);
	this.instance_65.setTransform(-34.1,47.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_66 = new lib.nucleo("synched",0);
	this.instance_66.setTransform(-39.9,52.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_67 = new lib.nucleo("synched",0);
	this.instance_67.setTransform(-41,43.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_68 = new lib.nucleo("synched",0);
	this.instance_68.setTransform(-33.1,43,0.221,0.224,0,0,0,26,25.1);

	this.instance_69 = new lib.nucleo("synched",0);
	this.instance_69.setTransform(-15.1,46.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_70 = new lib.nucleo("synched",0);
	this.instance_70.setTransform(-7.1,46.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_71 = new lib.nucleo("synched",0);
	this.instance_71.setTransform(0.9,47.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_72 = new lib.nucleo("synched",0);
	this.instance_72.setTransform(10,46.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_73 = new lib.nucleo("synched",0);
	this.instance_73.setTransform(19.5,47.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_74 = new lib.nucleo("synched",0);
	this.instance_74.setTransform(27.9,49.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_75 = new lib.nucleo("synched",0);
	this.instance_75.setTransform(43.9,49.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_76 = new lib.nucleo("synched",0);
	this.instance_76.setTransform(36,47.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_77 = new lib.nucleo("synched",0);
	this.instance_77.setTransform(26.8,40.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_78 = new lib.nucleo("synched",0);
	this.instance_78.setTransform(18.7,39.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_79 = new lib.nucleo("synched",0);
	this.instance_79.setTransform(6.4,40.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_80 = new lib.nucleo("synched",0);
	this.instance_80.setTransform(-1,38.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_81 = new lib.nucleo("synched",0);
	this.instance_81.setTransform(-10.6,40.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_82 = new lib.nucleo("synched",0);
	this.instance_82.setTransform(-21.8,40.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_83 = new lib.nucleo("synched",0);
	this.instance_83.setTransform(-18.3,34.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_84 = new lib.nucleo("synched",0);
	this.instance_84.setTransform(-8.4,31.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_85 = new lib.nucleo("synched",0);
	this.instance_85.setTransform(30.6,29.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_86 = new lib.nucleo("synched",0);
	this.instance_86.setTransform(19.5,29.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_87 = new lib.nucleo("synched",0);
	this.instance_87.setTransform(10,29.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_88 = new lib.nucleo("synched",0);
	this.instance_88.setTransform(0.9,29.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_89 = new lib.nucleo("synched",0);
	this.instance_89.setTransform(25,36.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_90 = new lib.nucleo("synched",0);
	this.instance_90.setTransform(16.3,38,0.221,0.224,0,0,0,26,25.1);

	this.instance_91 = new lib.nucleo("synched",0);
	this.instance_91.setTransform(9,36.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_92 = new lib.nucleo("synched",0);
	this.instance_92.setTransform(0.6,35.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_93 = new lib.nucleo("synched",0);
	this.instance_93.setTransform(35.4,38.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_94 = new lib.nucleo("synched",0);
	this.instance_94.setTransform(42.6,42.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_95 = new lib.nucleo("synched",0);
	this.instance_95.setTransform(46.1,33.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_96 = new lib.nucleo("synched",0);
	this.instance_96.setTransform(35.3,33.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_97 = new lib.nucleo("synched",0);
	this.instance_97.setTransform(30.4,32.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_98 = new lib.nucleo("synched",0);
	this.instance_98.setTransform(22.6,31,0.221,0.224,0,0,0,26,25.1);

	this.instance_99 = new lib.nucleo("synched",0);
	this.instance_99.setTransform(15,30,0.221,0.224,0,0,0,26,25.1);

	this.instance_100 = new lib.nucleo("synched",0);
	this.instance_100.setTransform(7.7,29.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_101 = new lib.nucleo("synched",0);
	this.instance_101.setTransform(-29.3,35.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_102 = new lib.nucleo("synched",0);
	this.instance_102.setTransform(-22.2,32.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_103 = new lib.nucleo("synched",0);
	this.instance_103.setTransform(-14.3,29.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_104 = new lib.nucleo("synched",0);
	this.instance_104.setTransform(-7.3,30.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_105 = new lib.nucleo("synched",0);
	this.instance_105.setTransform(0.3,28.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_106 = new lib.nucleo("synched",0);
	this.instance_106.setTransform(-40.3,34.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_107 = new lib.nucleo("synched",0);
	this.instance_107.setTransform(-40.3,27.1,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_108 = new lib.nucleo("synched",0);
	this.instance_108.setTransform(-34,29.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_109 = new lib.nucleo("synched",0);
	this.instance_109.setTransform(-29.3,25.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_110 = new lib.nucleo("synched",0);
	this.instance_110.setTransform(-23.1,24.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_111 = new lib.nucleo("synched",0);
	this.instance_111.setTransform(-15.2,23.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_112 = new lib.nucleo("synched",0);
	this.instance_112.setTransform(46.6,26.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_113 = new lib.nucleo("synched",0);
	this.instance_113.setTransform(42.7,25.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_114 = new lib.nucleo("synched",0);
	this.instance_114.setTransform(34.7,24.2,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_115 = new lib.nucleo("synched",0);
	this.instance_115.setTransform(28,23.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_116 = new lib.nucleo("synched",0);
	this.instance_116.setTransform(21.5,23.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_117 = new lib.nucleo("synched",0);
	this.instance_117.setTransform(13.9,22.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_118 = new lib.nucleo("synched",0);
	this.instance_118.setTransform(7.2,22,0.221,0.224,0,0,0,23.5,23.7);

	this.instance_119 = new lib.nucleo("synched",0);
	this.instance_119.setTransform(-8,21.9,0.221,0.224,0,0,0,23.5,23.7);

	this.instance_120 = new lib.nucleo("synched",0);
	this.instance_120.setTransform(-0.1,21.9,0.221,0.224,0,0,0,23.5,23.7);

	this.instance_121 = new lib.Animar7("synched",0);
	this.instance_121.setTransform(74.8,18.7,1,1,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F0F1F4").ss(2.3,1,1).p("AgEssQAWgBAaABQAXAAAZACQFJAQBWAoQAdANASAUQAKAKAFALQAEAIABAJQAAABAAABQAFAfgCALQgBACAAABAItpaQgMAagBAHQABAOgBAVQAAAqAFPhQgBBlhABLQhvCDkOAFQgZABgZgBAo2pqQgBgBAAAAIgFgCQgCgCgDgB");
	this.shape_10.setTransform(-3.2,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E8F4").s().p("AiSBvQg6gGhCgIIhNgPIAbAEIBzAIQA6AGA6gCIAyAAQAhgBAggDIBdgDIAiAAICogNIAFgBIhHAPQhNAQhvgCIhZAEIhPADQgaAAgTgCgAEnhhIgSgCIgIgBIgEAAIgCgBIibgIIgWAAIgQAAIgXAAIgFAAIgWAAIhEABIBDgEIAaAAIBvACQB4AGBIAPIg1gIg");
	this.shape_11.setTransform(-5,-45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0F1F4").s().p("AhxBWIjSgWIgFgBIgGgCIgGgBIgHgCIgCAAQhagQg1gRIgXgIQAjAKAcAGIA3AMQBwAVCLADIAQABIAFAAIAdgBIAQABIAFAAIAdgBQBrgBB4gLQBugLAQgFIADgCIABAAIABAAIABgBIBjgbIALgCQgbANgqAMQgbAIgjAHQhDAPhMAJQhGAJgtgBIiLAFIgIAAgAHtgVIABgDQAGgGAAgIQABgRgJgLIgBgCQgBgJgEgIQALAHAJAPQAFAJADALIACAJQAAAGgCAFIAAABIgBABIgeAZIgGADQAIgPAIgNg");
	this.shape_12.setTransform(0.1,-47.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(199,205,231,0.451)").s().p("AA/MtIgUAAQlQgMhzhkQgrgmgPg1QgIgegCg6IgOorQgNnfgDgFIgSgyQgOglgNgLIgFgDIgBgBIgFgCIgEgDQgRgJgEgMQApggBfgtQBfgtB+gSICTgVQAqgFAtgBIAyAAIAwACQFJAQBWAoQAdANASAUQAKAKAFALQAEAIABAJIABACQAEAfgCALIgBADIgNAWIgEAIIgCAEQgMAagBAHIABAjQgBAqAFPhQgBBlhABLQhvCDkOAFIgZAAIgZAAgAm7oUIgNABQAbAMAsAKIAeAGIBMAPQBDAJA5AFQAUACAaAAIAyAAIBMgCIBbgFQBvACBOgQIBHgPIB/gfQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQheAWhRAMIgFABIioAOIgjgBIhdADQgfAEghAAIgyAAQghAAgigEIhzgIIhqgSIgcgHQgagIgEAAIAAAAgAoKqJIAAAKQAAAIAGAHQAHAJAPAJIAWAKIAXAIQA1ARBaAPIACABIAHACIAGABIAGACIAFABIDSAWIARAAIAQABIAEAAIAVgBICLgFQAtAABGgIQBMgJBDgPQAjgHAbgIQArgMAagNIAEgCIAGgEIAegaIABgBIAAgBQACgFAAgGIgCgJQgDgLgFgKQgJgOgLgHQgJgGgMgCIAAALQAHACAJAFQAGAEAFAFQAJALgBARQAAAHgGAHQgPASgzAPIgFACIgLACIhjAbIgBABIgBAAIgBAAIgDABQgQAGhuALQh4ALhrABIgdAAIgFAAIgQAAQiLgDhwgVIg3gMQgbgGgkgKIgXgHIgEgBQgZgIgTgNQgDgCgHgNQgFgMgGAAIAAAAQgGAAgCADgAAlq7IgaAAIhDAEIgXABIgPABIgEAAQhlAJhLAVQgpAMgeAPQgQAIgLAHIAAABQB5g8DLgNQAogCAqgBIAEAAIAXAAIARAAIAKAAIAMAAICaAIIACABIAEAAIAJABIASACIA1AIIAYAFQATAAApANQAoAMAPAKIABgDIgTgMQgVgMgigJIgQgEQhIgPh4gGIh5gCIgOAAIgaAAg");
	this.shape_13.setTransform(-4.2,13.7);

	this.instance_122 = new lib.nucleocopia("synched",2);
	this.instance_122.setTransform(34.6,80.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_123 = new lib.nucleocopia("synched",2);
	this.instance_123.setTransform(16.8,85.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_124 = new lib.nucleocopia("synched",2);
	this.instance_124.setTransform(-1.6,85.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_125 = new lib.nucleocopia("synched",2);
	this.instance_125.setTransform(-19.9,83.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_126 = new lib.nucleocopia("synched",2);
	this.instance_126.setTransform(-36.2,80,0.221,0.224,0,0,0,26,25.1);

	this.instance_127 = new lib.nucleocopia("synched",2);
	this.instance_127.setTransform(32.7,71.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_128 = new lib.nucleocopia("synched",2);
	this.instance_128.setTransform(-26.9,69.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_129 = new lib.nucleocopia("synched",2);
	this.instance_129.setTransform(5.8,40.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_130 = new lib.nucleocopia("synched",2);
	this.instance_130.setTransform(24,30.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_131 = new lib.nucleocopia("synched",2);
	this.instance_131.setTransform(-43.1,61.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_132 = new lib.nucleocopia("synched",2);
	this.instance_132.setTransform(-13.5,62.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_133 = new lib.nucleocopia("synched",2);
	this.instance_133.setTransform(31.9,63.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_134 = new lib.nucleocopia("synched",2);
	this.instance_134.setTransform(40.1,66.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_135 = new lib.nucleocopia("synched",2);
	this.instance_135.setTransform(29.1,55.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_136 = new lib.nucleocopia("synched",2);
	this.instance_136.setTransform(-36.5,56.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_137 = new lib.nucleocopia("synched",2);
	this.instance_137.setTransform(-43.3,52.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_138 = new lib.nucleocopia("synched",2);
	this.instance_138.setTransform(6.6,46.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_139 = new lib.nucleocopia("synched",2);
	this.instance_139.setTransform(16.1,29.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_140 = new lib.nucleocopia("synched",2);
	this.instance_140.setTransform(-2.7,27.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_141 = new lib.nucleocopia("synched",2);
	this.instance_141.setTransform(32,38.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_142 = new lib.nucleocopia("synched",2);
	this.instance_142.setTransform(-10.7,30.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_143 = new lib.nucleocopia("synched",2);
	this.instance_143.setTransform(-22.4,24.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_144 = new lib.nucleocopia("synched",2);
	this.instance_144.setTransform(34.4,22.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_145 = new lib.nucleocopia("synched",2);
	this.instance_145.setTransform(0.2,21.6,0.221,0.224,0,0,0,23.5,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahjl/IBeAAAhjiXIBeAAAhjA+IBeAAAhjEQIBeAAAhjkGQBnANBggNAhjgtQBvANBYgNAhjF6QBmAMBfgMAhjCqIDCAA");
	this.shape_14.setTransform(-1,31.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F0F1F4").ss(2.3,1,1).p("AJIqrQAGAlgEAKQgKAOgJAUQgMAagBAIQABAOAAAUQgBAqAFPhQgBBmhABKQh9CTlGgLQlQgMhzhkQgrgmgPg1QgJgegBg5QgIk4gGj0QgNnegDgFQgCgFgQguQgSgtgPgHQgZgLgFgOQApghBfgsQBeguB/gSQCOgVAFAAQBTgKBmAGQFJAQBWAoQAdAOASATQASATACATg");
	this.shape_15.setTransform(-9.4,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E8F4").s().p("AitBvQg7gGhBgIIhrgVQgrgKgcgNIANAAQAEAAAaAHIAcAIIBrASIBzAIQBbAJBbgJIBZgDQCdAFDkg1QAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQh4AehOAQQhOAPhvgBIhZAEQg+ADgsAAQgpAAgagCgAmHgiQAMgIAPgHQAegPApgMQCBglDQABQDsgBBrAcQAiAJAVALIATANIgBADQgPgKgogNQgogNgTAAQghgGgtgGQhZgMiIAAQkaAAiXBMg");
	this.shape_16.setTransform(-7.5,-47.6);

	this.instance_146 = new lib.nucleocopia("synched",5);
	this.instance_146.setTransform(31.2,14.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_147 = new lib.nucleocopia("synched",5);
	this.instance_147.setTransform(-5.8,17.8,0.221,0.224,0,0,0,23.5,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("AhjCqIDCAAAhjA+IBeAAAhjEQIBeAAAhjF6QBmAMBfgMAhjiXIBeAAAhjgtQBvANBYgNAhjkGQBnANBggNAhjl/IBeAA");
	this.shape_17.setTransform(4.5,34.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6E8F4").s().p("AiuBvQg6gGhBgIIhqgVQgsgKgcgNIANAAQAEAAAaAHIAdAIIBqASIByAIQBcAJBbgJIBagDQCcAFDkg1QAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQh4AehOAQQhOAPhugBIhaAEQg+ADgsAAQgpAAgbgCgAmHgiQAMgIAPgHQAegPApgMQCCglDPABQDsgBBrAcQAiAJAVALIATANIgBADQgPgKgogNQgogNgUAAQghgGgsgGQhZgMiIAAQkaAAiYBMg");
	this.shape_18.setTransform(-2,-44.8);

	this.instance_148 = new lib.nucleocopia("synched",7);
	this.instance_148.setTransform(-10.6,23.7,0.221,0.224,0,0,0,23.5,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahjl/IBfAAAhjkGQBnAOBggOAhjgtQBvANBYgNAhjiXIBfAAAhjA+IBeAAAhjF6QBmAMBfgMAhjEQIBfAAAhjCqIDBAA");
	this.shape_19.setTransform(10.2,32.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E8F4").s().p("AiuBvQg5gGhDgIIhpgVQgtgKgbgNIANAAQAEAAAaAHIAdAIIBpASIBzAIQBcAJBbgJIBagDQCcAFDkg1QABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQh4AehOAQQhOAPhugBIhaAEQg+ADgsAAQgpAAgbgCgAmHgiQALgIAQgHQAegPAqgMQCAglDQABQDrgBBsAcQAiAJAVALIAUANIgCADQgPgKgogNQgpgNgSAAQghgGgtgGQhZgMiJAAQkZAAiYBMg");
	this.shape_20.setTransform(3.7,-46.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahil/IBeAAAhiCqIDBAAAhjA9IBeAAAhiiYIBeAAAhigtQBvAMBXgMAhikGQBmANBggNAhiEQIBeAAAhiF6QBlAMBfgM");
	this.shape_21.setTransform(16.9,31.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6E8F4").s().p("AitBvQg7gGhBgIIhrgVQgrgKgcgNIANAAQAEAAAaAHIAcAIIBrASIBzAIQBbAJBbgJIBagDQCcAFDkg1QAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQh4AehOAQQhNAPhvgBIhaAEQg+ADgsAAQgpAAgagCgAmHgiQAMgIAPgHQAegPApgMQCCglDPABQDsgBBrAcQAiAJAVALIATANIgBADQgPgKgogNQgogNgUAAQgggGgtgGQhZgMiIAAQkaAAiYBMg");
	this.shape_22.setTransform(10.4,-47.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahjl/IBfAAAhjkGQBnANBggNAhjgtQBvAMBYgMAhjiYIBfAAAhjF6QBmAMBfgMAhjEQIBfAAAhjA9IBeAAAhjCpIDCAA");
	this.shape_23.setTransform(4.8,37.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahjl/IBfAAAhjA+IBeAAAhjiXIBfAAAhjEQIBfAAAhjCqIDCAAAhjF6QBmAMBfgMAhjgtQBwANBXgNAhjkGQBnAOBggO");
	this.shape_24.setTransform(-2.4,37.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E8F4").s().p("AiuBvQg5gGhDgIIhpgVQgtgKgbgNIANAAQAEAAAaAHIAdAIIBpASIBzAIQBcAJBbgJIBagDQCcAFDkg1QABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQh4AehOAQQhOAPhugBIhaAEQg+ADgsAAQgpAAgbgCgAmHgiQALgIAQgHQAegPAqgMQCAglDQABQDrgBBsAcQAiAJAVALIAUANIgCADQgPgKgogNQgpgNgTAAQgggGgtgGQhZgMiJAAQkZAAiYBMg");
	this.shape_25.setTransform(-8.9,-41.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahjl/IBfAAAhjiXIBfAAAhjA+IBeAAAhjEQIBfAAAhjkFQBnANBggNAhjgtQBwANBXgNAhjF6QBmAMBfgMAhjCqIDCAA");
	this.shape_26.setTransform(-6.5,35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E8F4").s().p("AitBvQg7gGhBgIIhrgVQgrgKgcgNIANAAQAEAAAaAHIAcAIIBrASIBzAIQBbAJBbgJIBZgDQCdAFDkg1QAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQh4AehOAQQhNAPhwgBIhZAEQg+ADgsAAQgpAAgagCgAmHgiQAMgIAPgHQAegPApgMQCCglDPABQDsgBBrAcQAiAJAVALIATANIgBADQgPgKgogNQgogNgUAAQgggGgtgGQhZgMiIAAQkaAAiYBMg");
	this.shape_27.setTransform(-13,-44.5);

	this.instance_149 = new lib.nucleocopia("synched",1);
	this.instance_149.setTransform(-41.4,19.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_150 = new lib.nucleocopia("synched",1);
	this.instance_150.setTransform(-14,22.7,0.221,0.224,0,0,0,23.5,23.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("AhjCqIDCAAAhjA9IBeAAAhjEQIBeAAAhjF6QBmAMBfgMAhjiYIBeAAAhjgtQBvAMBYgMAhjkGQBnANBggNAhjl/IBeAA");
	this.shape_28.setTransform(2.4,40.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E8F4").s().p("AiuBvQg5gGhCgIIhqgVQgtgKgbgNIANAAQAEAAAaAHIAdAIIBqASIByAIQBcAJBbgJIBagDQCcAFDkg1QAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQh4AehOAQQhNAPhvgBIhaAEQg+ADgsAAQgpAAgbgCgAmHgiQAMgIAPgHQAegPApgMQCCglDPABQDsgBBrAcQAiAJAVALIATANIgBADQgPgKgogNQgogNgUAAQgggGgtgGQhZgMiIAAQkaAAiYBMg");
	this.shape_29.setTransform(-4.1,-39);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahjl/IBfAAAhjkGQBnANBggNAhjgtQBwAMBXgMAhjiYIBfAAAhjA9IBeAAAhjF6QBmAMBfgMAhjEQIBfAAAhjCqIDCAA");
	this.shape_30.setTransform(10.3,38.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E8F4").s().p("AiuBvQg6gGhCgIIhpgVQgtgKgbgNIANAAQAEAAAaAHIAdAIIBpASIBzAIQBcAJBbgJIBagDQCcAFDkg1QABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQh4AehOAQQhOAPhugBIhaAEQg+ADgsAAQgpAAgbgCgAmHgiQALgIAQgHQAegPApgMQCCglDPABQDsgBBrAcQAiAJAVALIAUANIgCADQgPgKgogNQgogNgUAAQgggGgtgGQhZgMiJAAQkZAAiYBMg");
	this.shape_31.setTransform(3.8,-41.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahil/IBeAAAhjA9IBeAAAhiiYIBeAAAhigtQBvAMBXgMAhikGQBmANBggNAhiCqIDBAAAhiEQIBeAAAhiF6QBlAMBfgM");
	this.shape_32.setTransform(17.9,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_121,p:{x:74.8,y:18.7}},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114,p:{regX:25.8,regY:25.1,x:34.7,y:24.2,startPosition:0}},{t:this.instance_113,p:{regX:25.8,regY:25.1,x:42.7,startPosition:0,y:25.4}},{t:this.instance_112,p:{x:46.6,y:26.5,startPosition:0,regX:26,regY:25.1}},{t:this.instance_111,p:{regX:26,regY:25.1,x:-15.2,y:23.3,startPosition:0}},{t:this.instance_110,p:{regX:26,regY:25.1,x:-23.1,y:24.7,startPosition:0}},{t:this.instance_109,p:{x:-29.3,y:25.4,startPosition:0,regX:26}},{t:this.instance_108,p:{regX:26,x:-34,y:29.2,startPosition:0,regY:25.1}},{t:this.instance_107,p:{regX:25.8,x:-40.3,y:27.1,startPosition:0,regY:25.1}},{t:this.instance_106,p:{x:-40.3,y:34.4,startPosition:0,regX:25.8,regY:25.1}},{t:this.instance_105,p:{x:0.3,y:28.4,startPosition:0,regX:26}},{t:this.instance_104,p:{x:-7.3,y:30.4,startPosition:0,regX:26}},{t:this.instance_103,p:{x:-14.3,y:29.9,startPosition:0,regX:26,regY:25.1}},{t:this.instance_102,p:{x:-22.2,y:32.5,startPosition:0,regX:25.8,regY:25.1}},{t:this.instance_101,p:{regX:26,x:-29.3,y:35.9,startPosition:0,regY:25.1}},{t:this.instance_100,p:{regX:26,x:7.7,y:29.1,startPosition:0,regY:25.1}},{t:this.instance_99,p:{x:15,y:30,startPosition:0,regX:26}},{t:this.instance_98,p:{x:22.6,y:31,startPosition:0,regX:26}},{t:this.instance_97,p:{x:30.4,y:32.5,startPosition:0,regX:25.8}},{t:this.instance_96,p:{x:35.3,y:33.4,startPosition:0,regX:26,regY:25.1}},{t:this.instance_95,p:{x:46.1,y:33.3,startPosition:0,regX:26,regY:25.1}},{t:this.instance_94,p:{x:42.6,y:42.1,startPosition:0,regX:26}},{t:this.instance_93,p:{x:35.4,y:38.3,startPosition:0,regX:26}},{t:this.instance_92,p:{x:0.6,y:35.2,startPosition:0,regX:26}},{t:this.instance_91,p:{x:9,y:36.4,startPosition:0,regX:25.8}},{t:this.instance_90,p:{x:16.3,y:38,startPosition:0,regX:26}},{t:this.instance_89,p:{x:25,y:36.4,startPosition:0,regX:26}},{t:this.instance_88,p:{x:0.9,y:29.8,startPosition:0,regX:26}},{t:this.instance_87,p:{x:10,y:29.2,startPosition:0,regX:26}},{t:this.instance_86,p:{regX:26,x:19.5,y:29.1,startPosition:0}},{t:this.instance_85,p:{regX:25.8,x:30.6,y:29.9,startPosition:0}},{t:this.instance_84,p:{x:-8.4,y:31.1,startPosition:0,regX:26}},{t:this.instance_83,p:{regX:25.8,x:-18.3,y:34.4,startPosition:0}},{t:this.instance_82,p:{x:-21.8,y:40.4,startPosition:0,regX:25.8}},{t:this.instance_81,p:{x:-10.6,y:40.1,startPosition:0,regX:26}},{t:this.instance_80,p:{x:-1,y:38.4,startPosition:0,regX:25.8}},{t:this.instance_79,p:{x:6.4,y:40.2,startPosition:0,regX:26}},{t:this.instance_78,p:{x:18.7,y:39.4,startPosition:0,regX:26}},{t:this.instance_77,p:{regX:26,x:26.8,y:40.9,startPosition:0}},{t:this.instance_76,p:{regX:26,x:36,y:47.5,startPosition:0}},{t:this.instance_75,p:{regX:25.8,x:43.9,y:49.4,startPosition:0}},{t:this.instance_74,p:{x:27.9,y:49.4,startPosition:0,regX:26}},{t:this.instance_73,p:{x:19.5,y:47.5,startPosition:0,regX:26}},{t:this.instance_72,p:{regX:26,x:10,y:46.2,startPosition:0}},{t:this.instance_71,p:{x:0.9,y:47.5,startPosition:0,regX:26}},{t:this.instance_70,p:{x:-7.1,y:46.2,startPosition:0,regX:26}},{t:this.instance_69,p:{x:-15.1,y:46.1,startPosition:0}},{t:this.instance_68,p:{x:-33.1,y:43,startPosition:0,regX:26}},{t:this.instance_67,p:{x:-41,y:43.5,startPosition:0,regX:26}},{t:this.instance_66,p:{regX:25.8,x:-39.9,y:52.3,startPosition:0}},{t:this.instance_65,p:{x:-34.1,y:47.5,startPosition:0,regX:26}},{t:this.instance_64,p:{x:-25.2,y:47.5,startPosition:0,regX:26}},{t:this.instance_63,p:{x:-33.1,y:56.6,startPosition:0,regX:26}},{t:this.instance_62,p:{x:-26.2,y:56.5,startPosition:0,regX:25.8}},{t:this.instance_61,p:{x:-19.4,y:52.3,startPosition:0,regX:26}},{t:this.instance_60,p:{x:-12,y:54,startPosition:0,regX:26}},{t:this.instance_59,p:{x:-3.2,y:54.6,startPosition:0}},{t:this.instance_58,p:{x:5.3,y:54.6,startPosition:0}},{t:this.instance_57,p:{x:14.1,y:55.6,startPosition:0}},{t:this.instance_56,p:{x:23.6,y:56.5,startPosition:0,regX:26}},{t:this.instance_55,p:{x:32.5,y:55.6,startPosition:0,regX:26}},{t:this.instance_54,p:{x:41.5,y:56.6,startPosition:0}},{t:this.instance_53,p:{x:44,y:57.3,startPosition:0,regX:26}},{t:this.instance_52,p:{regX:25.8,x:43.5,y:66.7,startPosition:0}},{t:this.instance_51,p:{x:35.3,y:63.4,startPosition:0}},{t:this.instance_50,p:{regX:26,x:27.9,y:63.3,startPosition:0}},{t:this.instance_49,p:{x:18.6,y:64.1,startPosition:0,regX:26}},{t:this.instance_48,p:{x:9.1,y:64.1,startPosition:0,regX:26}},{t:this.instance_47,p:{regX:25.8,x:0.2,y:63.3,startPosition:0}},{t:this.instance_46,p:{x:-10.1,y:62.3,startPosition:0}},{t:this.instance_45,p:{x:-19.2,y:62.3,startPosition:0,regX:26}},{t:this.instance_44,p:{regX:26,x:-29.4,y:62.2,startPosition:0}},{t:this.instance_43,p:{regX:25.8,x:-39.7,y:61.1,startPosition:0}},{t:this.instance_42,p:{x:39.4,y:33.7,startPosition:0,regX:25.8}},{t:this.instance_41,p:{regX:26,x:-34.6,y:40.2,startPosition:0}},{t:this.instance_40,p:{regX:25.8,x:34.6,y:40.4,startPosition:0}},{t:this.instance_39,p:{x:46.3,y:41.5,startPosition:0,regX:26}},{t:this.instance_38,p:{x:-41,y:49.5,startPosition:0,regX:26}},{t:this.instance_37,p:{x:38.1,y:50.1,startPosition:0,regX:26}},{t:this.instance_36,p:{x:46.3,y:48.5,startPosition:0,regX:26}},{t:this.instance_35,p:{x:46.5,y:57.4,startPosition:0}},{t:this.instance_34,p:{regX:26,x:-25,y:60.6,startPosition:0}},{t:this.instance_33,p:{regX:25.8,x:-40.2,y:59.5,startPosition:0}},{t:this.instance_32,p:{regX:25.8,x:-40,y:69.4,startPosition:0}},{t:this.instance_31,p:{x:-31.9,y:70.1,startPosition:0,regX:26}},{t:this.instance_30,p:{regX:26,x:-23.5,y:69.4,startPosition:0}},{t:this.instance_29,p:{x:-16,y:70.1,startPosition:0}},{t:this.instance_28,p:{x:-7,y:70.6,startPosition:0}},{t:this.instance_27,p:{x:3.1,y:69.5,startPosition:0}},{t:this.instance_26,p:{x:10.5,y:69.4,startPosition:0,regX:26}},{t:this.instance_25,p:{regX:26,x:18.5,y:70.1,startPosition:0}},{t:this.instance_24,p:{x:28.3,y:70.7,startPosition:0,regX:26}},{t:this.instance_23,p:{x:36.1,y:71.6,startPosition:0}},{t:this.instance_22,p:{x:46.2,y:67.7,startPosition:0}},{t:this.instance_21,p:{regX:25.8,x:43.9,y:75.8,startPosition:0}},{t:this.instance_20,p:{regX:25.8,x:30.3,y:76.9,startPosition:0}},{t:this.instance_19,p:{regX:25.8,x:21.1,y:75.8,startPosition:0}},{t:this.instance_18,p:{x:-38.7,y:74.4,startPosition:0}},{t:this.instance_17,p:{x:-29.9,y:75.8,startPosition:0}},{t:this.instance_16,p:{x:-22.8,y:77,startPosition:0}},{t:this.instance_15,p:{x:-13.5,y:77,startPosition:0}},{t:this.instance_14,p:{regX:26,x:-2.5,y:77.7,startPosition:0}},{t:this.instance_13,p:{x:5.6,y:77.7,startPosition:0}},{t:this.instance_12,p:{x:11.9,y:77.8,startPosition:0}},{t:this.instance_11,p:{regX:26,x:-32.8,y:79.8,startPosition:0}},{t:this.instance_10,p:{regX:26,x:-23.6,y:81.6,startPosition:0}},{t:this.instance_9,p:{x:-16.5,y:83.2,startPosition:0}},{t:this.instance_8,p:{x:-7.5,y:84.3,startPosition:0}},{t:this.instance_7,p:{x:1.8,y:85.4,startPosition:0}},{t:this.instance_6,p:{x:11.6,y:85.4,startPosition:0}},{t:this.instance_5,p:{x:20.2,y:85.5,startPosition:0}},{t:this.instance_4,p:{regX:25.8,x:30.7,y:83.3,startPosition:0}},{t:this.instance_3,p:{regX:26,x:38,y:80.4,startPosition:0}},{t:this.instance_2,p:{x:28.5,y:84.3,startPosition:0}},{t:this.shape_9,p:{x:-0.2,y:12.9}},{t:this.shape_8},{t:this.shape_7,p:{x:1.6,y:-48.9}},{t:this.shape_6,p:{x:-0.2,y:12.9}},{t:this.shape_5},{t:this.instance_1,p:{x:54.9,y:-11.6}}]},47).to({state:[{t:this.instance_121,p:{x:70.7,y:19.5}},{t:this.instance_145,p:{regX:23.5,regY:23.7,x:0.2,y:21.6,startPosition:2}},{t:this.instance_111,p:{regX:23.5,regY:23.7,x:-9.2,y:22.1,startPosition:2}},{t:this.instance_110,p:{regX:23.5,regY:23.7,x:3.8,y:22.2,startPosition:2}},{t:this.instance_109,p:{x:14,y:22.4,startPosition:2,regX:26}},{t:this.instance_108,p:{regX:25.8,x:21,y:22.6,startPosition:2,regY:25.1}},{t:this.instance_107,p:{regX:26,x:27.6,y:22.7,startPosition:2,regY:25.1}},{t:this.instance_144,p:{regX:25.8,x:34.4,y:22.8,startPosition:2}},{t:this.instance_106,p:{x:42.1,y:23.8,startPosition:2,regX:25.8,regY:25.1}},{t:this.instance_105,p:{x:43.8,y:22,startPosition:2,regX:26}},{t:this.instance_104,p:{x:-14.5,y:23.5,startPosition:2,regX:26}},{t:this.instance_143,p:{x:-22.4,y:24.5,startPosition:2,regX:26}},{t:this.instance_103,p:{x:9.5,y:21.9,startPosition:2,regX:26,regY:25.1}},{t:this.instance_102,p:{x:-39,y:27.2,startPosition:2,regX:25.8,regY:25.1}},{t:this.instance_101,p:{regX:25.8,x:-29.4,y:27.3,startPosition:2,regY:25.1}},{t:this.instance_100,p:{regX:25.8,x:-43.7,y:34.6,startPosition:2,regY:25.1}},{t:this.instance_99,p:{x:-3.1,y:28.6,startPosition:2,regX:26}},{t:this.instance_142,p:{x:-10.7,y:30.6,startPosition:2}},{t:this.instance_98,p:{x:-17.7,y:30.1,startPosition:2,regX:26}},{t:this.instance_97,p:{x:-25.6,y:32.7,startPosition:2,regX:25.8}},{t:this.instance_96,p:{x:-33.4,y:33.5,startPosition:2,regX:26,regY:25.1}},{t:this.instance_95,p:{x:-38,y:34.8,startPosition:2,regX:26,regY:25.1}},{t:this.instance_94,p:{x:4.3,y:29.3,startPosition:2,regX:26}},{t:this.instance_93,p:{x:11.6,y:30.2,startPosition:2,regX:26}},{t:this.instance_92,p:{x:19.2,y:31.2,startPosition:2,regX:26}},{t:this.instance_91,p:{x:27,y:32.7,startPosition:2,regX:25.8}},{t:this.instance_90,p:{x:31.9,y:33.6,startPosition:2,regX:26}},{t:this.instance_89,p:{x:42.7,y:33.5,startPosition:2,regX:26}},{t:this.instance_88,p:{x:39.2,y:42.3,startPosition:2,regX:26}},{t:this.instance_141,p:{x:32,y:38.5,startPosition:2}},{t:this.instance_87,p:{x:-2.8,y:35.4,startPosition:2,regX:26}},{t:this.instance_86,p:{regX:25.8,x:5.6,y:36.6,startPosition:2}},{t:this.instance_85,p:{regX:26,x:12.9,y:38.2,startPosition:2}},{t:this.instance_84,p:{x:21.6,y:36.6,startPosition:2,regX:26}},{t:this.instance_140,p:{x:-2.7,y:27.2,startPosition:2,regX:26}},{t:this.instance_83,p:{regX:26,x:9.7,y:27.8,startPosition:2}},{t:this.instance_139,p:{regX:26,x:16.1,y:29.3,startPosition:2}},{t:this.instance_82,p:{x:27.2,y:30.1,startPosition:2,regX:25.8}},{t:this.instance_81,p:{x:-11.8,y:31.3,startPosition:2,regX:26}},{t:this.instance_80,p:{x:-21.7,y:34.6,startPosition:2,regX:25.8}},{t:this.instance_79,p:{x:-28.7,y:37.7,startPosition:2,regX:26}},{t:this.instance_78,p:{x:-14,y:40.3,startPosition:2,regX:26}},{t:this.instance_77,p:{regX:25.8,x:-4.4,y:38.6,startPosition:2}},{t:this.instance_76,p:{regX:25.8,x:5.1,y:38.6,startPosition:2}},{t:this.instance_75,p:{regX:26,x:15.3,y:39.6,startPosition:2}},{t:this.instance_74,p:{x:27.8,y:40.7,startPosition:2,regX:26}},{t:this.instance_73,p:{x:32.6,y:47.7,startPosition:2,regX:26}},{t:this.instance_72,p:{regX:25.8,x:40.5,y:49.6,startPosition:2}},{t:this.instance_71,p:{x:24.5,y:49.6,startPosition:2,regX:26}},{t:this.instance_70,p:{x:16.1,y:47.7,startPosition:2,regX:26}},{t:this.instance_138,p:{x:6.6,y:46.4,startPosition:2,regX:26}},{t:this.instance_69,p:{x:-2.5,y:47.7,startPosition:2}},{t:this.instance_68,p:{x:-10.5,y:46.4,startPosition:2,regX:26}},{t:this.instance_67,p:{x:-20.2,y:43.7,startPosition:2,regX:26}},{t:this.instance_66,p:{regX:26,x:-36.5,y:43.2,startPosition:2}},{t:this.instance_65,p:{x:-44.4,y:43.7,startPosition:2,regX:26}},{t:this.instance_137,p:{regX:25.8,x:-43.3,y:52.5,startPosition:2}},{t:this.instance_64,p:{x:-37.5,y:47.7,startPosition:2,regX:26}},{t:this.instance_63,p:{x:-28.6,y:47.7,startPosition:2,regX:26}},{t:this.instance_136,p:{regX:26,x:-36.5,y:56.8,startPosition:2}},{t:this.instance_62,p:{x:-29.6,y:56.7,startPosition:2,regX:25.8}},{t:this.instance_61,p:{x:-22.8,y:52.5,startPosition:2,regX:26}},{t:this.instance_60,p:{x:-15.4,y:54.2,startPosition:2,regX:26}},{t:this.instance_59,p:{x:-6.6,y:54.8,startPosition:2}},{t:this.instance_58,p:{x:1.9,y:54.8,startPosition:2}},{t:this.instance_57,p:{x:10.7,y:55.8,startPosition:2}},{t:this.instance_56,p:{x:20.2,y:56.7,startPosition:2,regX:26}},{t:this.instance_135,p:{x:29.1,y:55.8,startPosition:2,regX:26}},{t:this.instance_55,p:{x:38.1,y:56.8,startPosition:2,regX:26}},{t:this.instance_54,p:{x:40.6,y:57.5,startPosition:2}},{t:this.instance_134,p:{regX:25.8,x:40.1,y:66.9,startPosition:2}},{t:this.instance_133,p:{regX:26,x:31.9,y:63.6,startPosition:2}},{t:this.instance_53,p:{x:24.5,y:63.5,startPosition:2,regX:26}},{t:this.instance_52,p:{regX:26,x:15.2,y:64.3,startPosition:2}},{t:this.instance_51,p:{x:5.7,y:64.3,startPosition:2}},{t:this.instance_50,p:{regX:25.8,x:-3.2,y:63.5,startPosition:2}},{t:this.instance_132,p:{x:-13.5,y:62.5,startPosition:2,regX:26}},{t:this.instance_49,p:{x:-22.6,y:62.5,startPosition:2,regX:26}},{t:this.instance_48,p:{x:-32.8,y:62.4,startPosition:2,regX:26}},{t:this.instance_131,p:{regX:25.8,x:-43.1,y:61.3,startPosition:2}},{t:this.instance_47,p:{regX:26,x:-42.4,y:31.2,startPosition:2}},{t:this.instance_46,p:{x:17,y:31.4,startPosition:2}},{t:this.instance_130,p:{x:24,y:30.3,startPosition:2,regX:26}},{t:this.instance_45,p:{x:31.8,y:29.3,startPosition:2,regX:26}},{t:this.instance_44,p:{regX:25.8,x:37.9,y:29.6,startPosition:2}},{t:this.instance_43,p:{regX:26,x:-40.6,y:40.4,startPosition:2}},{t:this.instance_129,p:{x:5.8,y:40.3,startPosition:2,regX:26}},{t:this.instance_42,p:{x:13.5,y:43.2,startPosition:2,regX:25.8}},{t:this.instance_41,p:{regX:25.8,x:38.4,y:40.5,startPosition:2}},{t:this.instance_40,p:{regX:26,x:43.7,y:39.7,startPosition:2}},{t:this.instance_39,p:{x:-44.4,y:49.7,startPosition:2,regX:26}},{t:this.instance_38,p:{x:-35.2,y:51.4,startPosition:2,regX:26}},{t:this.instance_37,p:{x:-26.9,y:51.4,startPosition:2,regX:26}},{t:this.instance_36,p:{x:-10.9,y:50.7,startPosition:2,regX:26}},{t:this.instance_35,p:{x:7.9,y:51.4,startPosition:2}},{t:this.instance_34,p:{regX:25.8,x:30.2,y:50.8,startPosition:2}},{t:this.instance_33,p:{regX:26,x:34.7,y:50.3,startPosition:2}},{t:this.instance_32,p:{regX:26,x:42.9,y:48.7,startPosition:2}},{t:this.instance_31,p:{x:43.1,y:57.6,startPosition:2,regX:26}},{t:this.instance_30,p:{regX:25.8,x:31.1,y:60.7,startPosition:2}},{t:this.instance_29,p:{x:10.4,y:59.7,startPosition:2}},{t:this.instance_28,p:{x:-8.9,y:59.8,startPosition:2}},{t:this.instance_27,p:{x:-28.4,y:60.8,startPosition:2}},{t:this.instance_26,p:{x:-36.4,y:61.7,startPosition:2,regX:26}},{t:this.instance_25,p:{regX:25.8,x:-43.4,y:69.6,startPosition:2}},{t:this.instance_24,p:{x:-35.3,y:70.3,startPosition:2,regX:26}},{t:this.instance_128,p:{x:-26.9,y:69.6,startPosition:2}},{t:this.instance_23,p:{x:-19.4,y:70.3,startPosition:2}},{t:this.instance_22,p:{x:-10.4,y:70.8,startPosition:2}},{t:this.instance_21,p:{regX:26,x:-0.3,y:69.7,startPosition:2}},{t:this.instance_20,p:{regX:26,x:7.1,y:69.6,startPosition:2}},{t:this.instance_19,p:{regX:26,x:15.1,y:70.3,startPosition:2}},{t:this.instance_18,p:{x:24.9,y:70.9,startPosition:2}},{t:this.instance_127,p:{x:32.7,y:71.8,startPosition:2}},{t:this.instance_17,p:{x:42.8,y:67.9,startPosition:2}},{t:this.instance_16,p:{x:40.5,y:76,startPosition:2}},{t:this.instance_15,p:{x:26.9,y:77.1,startPosition:2}},{t:this.instance_14,p:{regX:25.8,x:17.7,y:76,startPosition:2}},{t:this.instance_13,p:{x:-42.1,y:74.6,startPosition:2}},{t:this.instance_12,p:{x:-33.3,y:76,startPosition:2}},{t:this.instance_11,p:{regX:25.8,x:-26.2,y:77.2,startPosition:2}},{t:this.instance_10,p:{regX:25.8,x:-16.9,y:77.2,startPosition:2}},{t:this.instance_9,p:{x:-5.9,y:77.9,startPosition:2}},{t:this.instance_8,p:{x:2.2,y:77.9,startPosition:2}},{t:this.instance_7,p:{x:8.5,y:78,startPosition:2}},{t:this.instance_126,p:{x:-36.2,y:80,startPosition:2}},{t:this.instance_6,p:{x:-27,y:81.8,startPosition:2}},{t:this.instance_125,p:{x:-19.9,y:83.4,startPosition:2}},{t:this.instance_5,p:{x:-10.9,y:84.5,startPosition:2}},{t:this.instance_124,p:{x:-1.6,y:85.6,startPosition:2}},{t:this.instance_4,p:{regX:26,x:8.2,y:85.6,startPosition:2}},{t:this.instance_123,p:{x:16.8,y:85.7,startPosition:2}},{t:this.instance_3,p:{regX:25.8,x:27.3,y:83.5,startPosition:2}},{t:this.instance_122,p:{x:34.6,y:80.6,startPosition:2}},{t:this.instance_2,p:{x:25.1,y:84.5,startPosition:2}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_1,p:{x:50.7,y:-10.8}}]},2).to({state:[{t:this.instance_121,p:{x:65.7,y:17.3}},{t:this.instance_147,p:{regX:23.5,regY:23.7,x:-5.8,y:17.8,startPosition:5}},{t:this.instance_96,p:{x:-18.2,y:21.3,startPosition:5,regX:23.5,regY:23.7}},{t:this.instance_95,p:{x:0.8,y:17.8,startPosition:5,regX:23.5,regY:23.7}},{t:this.instance_94,p:{x:9,y:18,startPosition:5,regX:26}},{t:this.instance_93,p:{x:15.3,y:17.9,startPosition:5,regX:25.8}},{t:this.instance_92,p:{x:23.1,y:19.3,startPosition:5,regX:26}},{t:this.instance_146,p:{regX:25.8,x:31.2,y:14.5,startPosition:5,regY:25.1}},{t:this.instance_91,p:{x:37,y:20.3,startPosition:5,regX:25.8}},{t:this.instance_90,p:{x:38.6,y:19.5,startPosition:5,regX:26}},{t:this.instance_89,p:{x:-10.4,y:19.5,startPosition:5,regX:26}},{t:this.instance_145,p:{regX:26,regY:25.1,x:35.6,y:6.9,startPosition:5}},{t:this.instance_88,p:{x:-13.8,y:23.3,startPosition:5,regX:26}},{t:this.instance_87,p:{x:-23.3,y:32,startPosition:5,regX:25.8}},{t:this.instance_86,p:{regX:25.8,x:23.1,y:11.1,startPosition:5}},{t:this.instance_85,p:{regX:26,x:-3.4,y:25,startPosition:5}},{t:this.instance_144,p:{regX:26,x:-19.6,y:29.4,startPosition:5}},{t:this.instance_84,p:{x:-25.2,y:38.9,startPosition:5,regX:26}},{t:this.instance_83,p:{regX:25.8,x:-32.5,y:36,startPosition:5}},{t:this.instance_82,p:{x:-0.7,y:27.1,startPosition:5,regX:26}},{t:this.instance_81,p:{x:6.6,y:28,startPosition:5,regX:26}},{t:this.instance_80,p:{x:14.2,y:29,startPosition:5,regX:26}},{t:this.instance_79,p:{x:22.1,y:30.5,startPosition:5,regX:25.8}},{t:this.instance_78,p:{x:26.9,y:31.4,startPosition:5,regX:26}},{t:this.instance_77,p:{regX:26,x:37.8,y:31.3,startPosition:5}},{t:this.instance_76,p:{regX:26,x:34.3,y:40.1,startPosition:5}},{t:this.instance_143,p:{x:27.1,y:36.3,startPosition:5,regX:26}},{t:this.instance_75,p:{regX:26,x:-7.8,y:33.2,startPosition:5}},{t:this.instance_74,p:{x:0.6,y:34.4,startPosition:5,regX:25.8}},{t:this.instance_73,p:{x:8,y:36,startPosition:5,regX:26}},{t:this.instance_72,p:{regX:26,x:16.6,y:34.4,startPosition:5}},{t:this.instance_142,p:{x:3.7,y:19,startPosition:5}},{t:this.instance_71,p:{x:1.6,y:27.2,startPosition:5,regX:26}},{t:this.instance_141,p:{x:18.9,y:21.6,startPosition:5}},{t:this.instance_70,p:{x:22.2,y:27.9,startPosition:5,regX:25.8}},{t:this.instance_69,p:{x:-19,y:38.1,startPosition:5}},{t:this.instance_68,p:{x:2.4,y:34.3,startPosition:5,regX:25.8}},{t:this.instance_67,p:{x:0.1,y:36.4,startPosition:5,regX:25.8}},{t:this.instance_66,p:{regX:26,x:10.3,y:37.4,startPosition:5}},{t:this.instance_65,p:{x:19.8,y:37.4,startPosition:5,regX:26}},{t:this.instance_64,p:{x:27.6,y:45.5,startPosition:5,regX:26}},{t:this.instance_63,p:{x:35.5,y:47.4,startPosition:5,regX:25.8}},{t:this.instance_62,p:{x:19.6,y:47.4,startPosition:5,regX:26}},{t:this.instance_61,p:{x:11.1,y:45.5,startPosition:5,regX:26}},{t:this.instance_140,p:{x:1.7,y:44.2,startPosition:5,regX:26}},{t:this.instance_60,p:{x:-7.5,y:45.5,startPosition:5,regX:26}},{t:this.instance_59,p:{x:-15.5,y:44.2,startPosition:5}},{t:this.instance_58,p:{x:-41.5,y:41,startPosition:5}},{t:this.instance_139,p:{regX:25.8,x:-48.2,y:50.3,startPosition:5}},{t:this.instance_57,p:{x:-42.4,y:45.5,startPosition:5}},{t:this.instance_56,p:{x:-33.5,y:45.5,startPosition:5,regX:26}},{t:this.instance_138,p:{x:-41.5,y:54.6,startPosition:5,regX:26}},{t:this.instance_55,p:{x:-34.6,y:54.5,startPosition:5,regX:25.8}},{t:this.instance_54,p:{x:-27.7,y:50.3,startPosition:5}},{t:this.instance_53,p:{x:-20.3,y:52,startPosition:5,regX:26}},{t:this.instance_52,p:{regX:26,x:-11.6,y:52.6,startPosition:5}},{t:this.instance_51,p:{x:-3,y:52.6,startPosition:5}},{t:this.instance_50,p:{regX:26,x:5.7,y:53.6,startPosition:5}},{t:this.instance_49,p:{x:15.2,y:54.5,startPosition:5,regX:26}},{t:this.instance_137,p:{regX:26,x:24.2,y:53.6,startPosition:5}},{t:this.instance_48,p:{x:33.1,y:54.6,startPosition:5,regX:26}},{t:this.instance_47,p:{regX:26,x:35.7,y:55.3,startPosition:5}},{t:this.instance_136,p:{regX:25.8,x:35.2,y:64.7,startPosition:5}},{t:this.instance_135,p:{x:27,y:61.4,startPosition:5,regX:26}},{t:this.instance_46,p:{x:19.6,y:61.3,startPosition:5}},{t:this.instance_45,p:{x:10.2,y:62.1,startPosition:5,regX:26}},{t:this.instance_44,p:{regX:26,x:0.8,y:62.1,startPosition:5}},{t:this.instance_43,p:{regX:25.8,x:-8.1,y:61.3,startPosition:5}},{t:this.instance_134,p:{regX:26,x:-18.4,y:60.3,startPosition:5}},{t:this.instance_42,p:{x:-23.1,y:58.4,startPosition:5,regX:26}},{t:this.instance_41,p:{regX:26,x:-37.8,y:60.2,startPosition:5}},{t:this.instance_133,p:{regX:25.8,x:-48.1,y:59.1,startPosition:5}},{t:this.instance_40,p:{regX:26,x:30.7,y:10.5,startPosition:5}},{t:this.instance_132,p:{x:11.3,y:14.4,startPosition:5,regX:26}},{t:this.instance_39,p:{x:-9.5,y:36.8,startPosition:5,regX:26}},{t:this.instance_131,p:{regX:26,x:28,y:23,startPosition:5}},{t:this.instance_38,p:{x:11.7,y:23.7,startPosition:5,regX:26}},{t:this.instance_37,p:{x:26.1,y:38,startPosition:5,regX:26}},{t:this.instance_36,p:{x:33.9,y:32.5,startPosition:5,regX:25.8}},{t:this.instance_35,p:{x:38,y:39.5,startPosition:5}},{t:this.instance_34,p:{regX:26,x:38.6,y:25.9,startPosition:5}},{t:this.instance_130,p:{x:37,y:12.8,startPosition:5,regX:26}},{t:this.instance_33,p:{regX:26,x:2.9,y:49.2,startPosition:5}},{t:this.instance_32,p:{regX:26,x:29.7,y:48.1,startPosition:5}},{t:this.instance_31,p:{x:38,y:46.5,startPosition:5,regX:26}},{t:this.instance_30,p:{regX:26,x:38.1,y:55.4,startPosition:5}},{t:this.instance_29,p:{x:5.5,y:57.5,startPosition:5}},{t:this.instance_28,p:{x:-7.3,y:65.6,startPosition:5}},{t:this.instance_129,p:{x:-13.8,y:68.5,startPosition:5,regX:26}},{t:this.instance_27,p:{x:-31.6,y:59,startPosition:5}},{t:this.instance_26,p:{x:-41.3,y:59.5,startPosition:5,regX:26}},{t:this.instance_25,p:{regX:25.8,x:-48.5,y:57.5,startPosition:5}},{t:this.instance_24,p:{x:-48.3,y:67.4,startPosition:5,regX:25.8}},{t:this.instance_23,p:{x:-40.2,y:68.1,startPosition:5}},{t:this.instance_128,p:{x:-31.9,y:67.4,startPosition:5}},{t:this.instance_22,p:{x:-24.3,y:68.1,startPosition:5}},{t:this.instance_21,p:{regX:26,x:-0.7,y:71.1,startPosition:5}},{t:this.instance_20,p:{regX:26,x:6.3,y:66.2,startPosition:5}},{t:this.instance_19,p:{regX:26,x:12,y:66.8,startPosition:5}},{t:this.instance_18,p:{x:20,y:68.7,startPosition:5}},{t:this.instance_127,p:{x:27.8,y:69.6,startPosition:5}},{t:this.instance_17,p:{x:37.9,y:65.7,startPosition:5}},{t:this.instance_16,p:{x:35.6,y:73.8,startPosition:5}},{t:this.instance_15,p:{x:22,y:74.9,startPosition:5}},{t:this.instance_14,p:{regX:25.8,x:12.1,y:75,startPosition:5}},{t:this.instance_13,p:{x:-47.1,y:72.4,startPosition:5}},{t:this.instance_12,p:{x:-38.2,y:73.8,startPosition:5}},{t:this.instance_11,p:{regX:25.8,x:-31.2,y:75,startPosition:5}},{t:this.instance_10,p:{regX:25.8,x:-21.9,y:75,startPosition:5}},{t:this.instance_9,p:{x:-10.8,y:75.7,startPosition:5}},{t:this.instance_8,p:{x:-2.7,y:75.7,startPosition:5}},{t:this.instance_7,p:{x:3.6,y:75.8,startPosition:5}},{t:this.instance_126,p:{x:-41.2,y:77.8,startPosition:5}},{t:this.instance_6,p:{x:-32,y:79.6,startPosition:5}},{t:this.instance_125,p:{x:-24.8,y:81.2,startPosition:5}},{t:this.instance_5,p:{x:-15.9,y:82.3,startPosition:5}},{t:this.instance_124,p:{x:-6.5,y:83.4,startPosition:5}},{t:this.instance_4,p:{regX:26,x:3.3,y:83.4,startPosition:5}},{t:this.instance_123,p:{x:11.8,y:83.5,startPosition:5}},{t:this.instance_3,p:{regX:25.8,x:22.4,y:81.3,startPosition:5}},{t:this.instance_122,p:{x:29.6,y:78.4,startPosition:5}},{t:this.instance_2,p:{x:20.1,y:82.3,startPosition:5}},{t:this.shape_9,p:{x:-9.4,y:11.1}},{t:this.shape_7,p:{x:-7.6,y:-50.7}},{t:this.shape_16,p:{x:-7.5,y:-47.6}},{t:this.shape_15},{t:this.shape_14},{t:this.instance_1,p:{x:45.8,y:-13}}]},2).to({state:[{t:this.instance_121,p:{x:70.7,y:19.1}},{t:this.instance_148,p:{x:-10.6,y:23.7,startPosition:7,regX:23.5,regY:23.7}},{t:this.instance_108,p:{regX:23.5,x:-19.3,y:20.9,startPosition:7,regY:23.7}},{t:this.instance_107,p:{regX:23.5,x:-36,y:21,startPosition:7,regY:23.7}},{t:this.instance_106,p:{x:-35.5,y:19.8,startPosition:7,regX:26,regY:25.1}},{t:this.instance_105,p:{x:-39.9,y:17.9,startPosition:7,regX:25.8}},{t:this.instance_104,p:{x:14.9,y:28.1,startPosition:7,regX:26}},{t:this.instance_147,p:{regX:25.8,regY:25.1,x:26,y:25.3,startPosition:7}},{t:this.instance_103,p:{x:37.1,y:26.4,startPosition:7,regX:25.8,regY:25.1}},{t:this.instance_102,p:{x:42.4,y:24,startPosition:7,regX:26,regY:25.1}},{t:this.instance_101,p:{regX:26,x:-25.2,y:22.1,startPosition:7,regY:25.1}},{t:this.instance_146,p:{regX:26,x:-31.4,y:21.6,startPosition:7,regY:25.1}},{t:this.instance_100,p:{regX:26,x:-44.7,y:15.2,startPosition:7,regY:25.1}},{t:this.instance_99,p:{x:-39,y:26.8,startPosition:7,regX:25.8}},{t:this.instance_98,p:{x:-43.7,y:26.9,startPosition:7,regX:25.8}},{t:this.instance_97,p:{x:-43.7,y:34.2,startPosition:7,regX:25.8}},{t:this.instance_96,p:{x:-3.1,y:28.2,startPosition:7,regX:26,regY:25.1}},{t:this.instance_145,p:{regX:26,regY:25.1,x:-10.7,y:30.2,startPosition:7}},{t:this.instance_95,p:{x:-20,y:26.3,startPosition:7,regX:26,regY:25.1}},{t:this.instance_94,p:{x:-25.6,y:32.3,startPosition:7,regX:25.8}},{t:this.instance_93,p:{x:-33.4,y:33.1,startPosition:7,regX:26}},{t:this.instance_92,p:{x:-38,y:34.4,startPosition:7,regX:26}},{t:this.instance_91,p:{x:4.3,y:28.9,startPosition:7,regX:26}},{t:this.instance_90,p:{x:11.6,y:29.9,startPosition:7,regX:26}},{t:this.instance_89,p:{x:19.2,y:30.9,startPosition:7,regX:26}},{t:this.instance_88,p:{x:27,y:32.3,startPosition:7,regX:25.8}},{t:this.instance_87,p:{x:31.9,y:33.2,startPosition:7,regX:26}},{t:this.instance_86,p:{regX:26,x:42.7,y:33.1,startPosition:7}},{t:this.instance_85,p:{regX:26,x:39.2,y:41.9,startPosition:7}},{t:this.instance_144,p:{regX:26,x:32,y:38.1,startPosition:7}},{t:this.instance_84,p:{x:-2.8,y:35,startPosition:7,regX:26}},{t:this.instance_83,p:{regX:25.8,x:5.6,y:36.3,startPosition:7}},{t:this.instance_82,p:{x:12.9,y:37.9,startPosition:7,regX:26}},{t:this.instance_81,p:{x:21.6,y:36.3,startPosition:7,regX:26}},{t:this.instance_143,p:{x:-13.1,y:28.9,startPosition:7,regX:26}},{t:this.instance_80,p:{x:6.6,y:29,startPosition:7,regX:26}},{t:this.instance_142,p:{x:16.1,y:28.9,startPosition:7}},{t:this.instance_79,p:{x:27.2,y:29.8,startPosition:7,regX:25.8}},{t:this.instance_78,p:{x:-11.8,y:31,startPosition:7,regX:26}},{t:this.instance_77,p:{regX:25.8,x:-25.5,y:30.8,startPosition:7}},{t:this.instance_76,p:{regX:26,x:-28.7,y:37.3,startPosition:7}},{t:this.instance_75,p:{regX:26,x:-14,y:40,startPosition:7}},{t:this.instance_74,p:{x:-4.4,y:38.2,startPosition:7,regX:25.8}},{t:this.instance_73,p:{x:5.1,y:38.2,startPosition:7,regX:25.8}},{t:this.instance_72,p:{regX:26,x:15.3,y:39.3,startPosition:7}},{t:this.instance_71,p:{x:24.8,y:39.3,startPosition:7,regX:26}},{t:this.instance_70,p:{x:32.6,y:47.3,startPosition:7,regX:26}},{t:this.instance_69,p:{x:24.5,y:49.3,startPosition:7}},{t:this.instance_68,p:{x:16.1,y:47.3,startPosition:7,regX:26}},{t:this.instance_141,p:{x:6.6,y:46.1,startPosition:7}},{t:this.instance_67,p:{x:-2.5,y:47.3,startPosition:7,regX:26}},{t:this.instance_66,p:{regX:26,x:-10.5,y:46.1,startPosition:7}},{t:this.instance_65,p:{x:-20.2,y:43.4,startPosition:7,regX:26}},{t:this.instance_64,p:{x:-36.5,y:42.8,startPosition:7,regX:26}},{t:this.instance_63,p:{x:-44.4,y:43.4,startPosition:7,regX:26}},{t:this.instance_140,p:{x:-43.3,y:52.1,startPosition:7,regX:25.8}},{t:this.instance_62,p:{x:-37.5,y:47.3,startPosition:7,regX:26}},{t:this.instance_61,p:{x:-28.6,y:47.3,startPosition:7,regX:26}},{t:this.instance_139,p:{regX:26,x:-36.5,y:56.5,startPosition:7}},{t:this.instance_60,p:{x:-29.6,y:56.4,startPosition:7,regX:25.8}},{t:this.instance_59,p:{x:-22.8,y:52.1,startPosition:7}},{t:this.instance_58,p:{x:-15.4,y:53.9,startPosition:7}},{t:this.instance_57,p:{x:-6.6,y:54.4,startPosition:7}},{t:this.instance_56,p:{x:1.9,y:54.4,startPosition:7,regX:26}},{t:this.instance_55,p:{x:10.7,y:55.5,startPosition:7,regX:26}},{t:this.instance_54,p:{x:20.2,y:56.4,startPosition:7}},{t:this.instance_138,p:{x:29.1,y:55.5,startPosition:7,regX:26}},{t:this.instance_53,p:{x:38.1,y:56.5,startPosition:7,regX:26}},{t:this.instance_52,p:{regX:26,x:40.6,y:57.1,startPosition:7}},{t:this.instance_137,p:{regX:25.8,x:40.1,y:66.5,startPosition:7}},{t:this.instance_136,p:{regX:26,x:31.9,y:63.3,startPosition:7}},{t:this.instance_51,p:{x:24.5,y:63.2,startPosition:7}},{t:this.instance_50,p:{regX:26,x:15.2,y:63.9,startPosition:7}},{t:this.instance_49,p:{x:5.7,y:63.9,startPosition:7,regX:26}},{t:this.instance_48,p:{x:-3.2,y:63.2,startPosition:7,regX:25.8}},{t:this.instance_135,p:{x:-13.5,y:62.1,startPosition:7,regX:26}},{t:this.instance_47,p:{regX:26,x:-22.6,y:62.1,startPosition:7}},{t:this.instance_46,p:{x:-32.8,y:62,startPosition:7}},{t:this.instance_134,p:{regX:25.8,x:-43.1,y:60.9,startPosition:7}},{t:this.instance_45,p:{x:-42.4,y:30.9,startPosition:7,regX:26}},{t:this.instance_44,p:{regX:26,x:-35.1,y:32.4,startPosition:7}},{t:this.instance_43,p:{regX:26,x:-35.1,y:28.2,startPosition:7}},{t:this.instance_133,p:{regX:26,x:-40.6,y:17.8,startPosition:7}},{t:this.instance_42,p:{x:-14.7,y:34.1,startPosition:7,regX:26}},{t:this.instance_132,p:{x:-32.4,y:17.8,startPosition:7,regX:26}},{t:this.instance_41,p:{regX:26,x:5.6,y:38.9,startPosition:7}},{t:this.instance_131,p:{regX:26,x:16.2,y:31.9,startPosition:7}},{t:this.instance_40,p:{regX:26,x:24.7,y:32.5,startPosition:7}},{t:this.instance_39,p:{x:34.2,y:27.2,startPosition:7,regX:25.8}},{t:this.instance_38,p:{x:-40.6,y:40.1,startPosition:7,regX:26}},{t:this.instance_37,p:{x:-30.3,y:40.8,startPosition:7,regX:25.8}},{t:this.instance_36,p:{x:31.2,y:40.3,startPosition:7,regX:25.8}},{t:this.instance_35,p:{x:42.9,y:41.4,startPosition:7}},{t:this.instance_34,p:{regX:26,x:-44.4,y:49.4,startPosition:7}},{t:this.instance_130,p:{x:-42.3,y:40.1,startPosition:7,regX:26}},{t:this.instance_129,p:{x:-31.4,y:40.8,startPosition:7,regX:26}},{t:this.instance_33,p:{regX:26,x:-36.7,y:48.4,startPosition:7}},{t:this.instance_32,p:{regX:26,x:14.8,y:52.9,startPosition:7}},{t:this.instance_31,p:{x:26.3,y:50.3,startPosition:7,regX:25.8}},{t:this.instance_30,p:{regX:26,x:42.9,y:48.4,startPosition:7}},{t:this.instance_29,p:{x:43.1,y:57.2,startPosition:7}},{t:this.instance_28,p:{x:-28.4,y:60.4,startPosition:7}},{t:this.instance_27,p:{x:-36.4,y:61.4,startPosition:7}},{t:this.instance_26,p:{x:-43.6,y:59.4,startPosition:7,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-43.4,y:69.2,startPosition:7}},{t:this.instance_24,p:{x:-35.3,y:69.9,startPosition:7,regX:26}},{t:this.instance_128,p:{x:-26.9,y:69.2,startPosition:7}},{t:this.instance_23,p:{x:-19.4,y:69.9,startPosition:7}},{t:this.instance_22,p:{x:-10.4,y:70.4,startPosition:7}},{t:this.instance_21,p:{regX:26,x:-0.3,y:69.3,startPosition:7}},{t:this.instance_20,p:{regX:26,x:7.1,y:69.2,startPosition:7}},{t:this.instance_19,p:{regX:26,x:15.1,y:69.9,startPosition:7}},{t:this.instance_18,p:{x:24.9,y:70.5,startPosition:7}},{t:this.instance_127,p:{x:32.7,y:71.5,startPosition:7}},{t:this.instance_17,p:{x:42.8,y:67.5,startPosition:7}},{t:this.instance_16,p:{x:40.5,y:75.6,startPosition:7}},{t:this.instance_15,p:{x:26.9,y:76.7,startPosition:7}},{t:this.instance_14,p:{regX:25.8,x:17.7,y:75.6,startPosition:7}},{t:this.instance_13,p:{x:-42.1,y:74.2,startPosition:7}},{t:this.instance_12,p:{x:-33.3,y:75.6,startPosition:7}},{t:this.instance_11,p:{regX:25.8,x:-26.2,y:76.8,startPosition:7}},{t:this.instance_10,p:{regX:25.8,x:-16.9,y:76.8,startPosition:7}},{t:this.instance_9,p:{x:-5.9,y:77.6,startPosition:7}},{t:this.instance_8,p:{x:2.2,y:77.6,startPosition:7}},{t:this.instance_7,p:{x:8.5,y:77.7,startPosition:7}},{t:this.instance_126,p:{x:-36.2,y:79.7,startPosition:7}},{t:this.instance_6,p:{x:-27,y:81.5,startPosition:7}},{t:this.instance_125,p:{x:-19.9,y:83,startPosition:7}},{t:this.instance_5,p:{x:-10.9,y:84.2,startPosition:7}},{t:this.instance_124,p:{x:-1.6,y:85.3,startPosition:7}},{t:this.instance_4,p:{regX:26,x:8.2,y:85.3,startPosition:7}},{t:this.instance_123,p:{x:16.8,y:85.4,startPosition:7}},{t:this.instance_3,p:{regX:25.8,x:27.3,y:83.1,startPosition:7}},{t:this.instance_122,p:{x:34.6,y:80.3,startPosition:7}},{t:this.instance_2,p:{x:25.1,y:84.2,startPosition:7}},{t:this.shape_7,p:{x:-2.1,y:-48}},{t:this.shape_9,p:{x:-3.9,y:13.8}},{t:this.shape_18},{t:this.shape_6,p:{x:-3.9,y:13.8}},{t:this.shape_17},{t:this.instance_1,p:{x:50.7,y:-11.1}}]},2).to({state:[{t:this.instance_121,p:{x:76.8,y:17.9}},{t:this.instance_146,p:{regX:23.5,x:-13.7,y:19.4,startPosition:9,regY:23.7}},{t:this.instance_103,p:{x:-18.9,y:20,startPosition:9,regX:23.5,regY:23.7}},{t:this.instance_102,p:{x:1.2,y:24,startPosition:9,regX:23.5,regY:23.7}},{t:this.instance_101,p:{regX:26,x:-20.6,y:14.8,startPosition:9,regY:25.1}},{t:this.instance_100,p:{regX:25.8,x:16.6,y:24,startPosition:9,regY:25.1}},{t:this.instance_99,p:{x:-22.4,y:23,startPosition:9,regX:26}},{t:this.instance_145,p:{regX:26,regY:25.1,x:-29.9,y:17.6,startPosition:9}},{t:this.instance_98,p:{x:-33.6,y:22,startPosition:9,regX:26}},{t:this.instance_97,p:{x:-32.9,y:25.6,startPosition:9,regX:25.8}},{t:this.instance_96,p:{x:-37.6,y:25.7,startPosition:9,regX:25.8,regY:25.1}},{t:this.instance_95,p:{x:-37.6,y:33,startPosition:9,regX:25.8,regY:25.1}},{t:this.instance_94,p:{x:-6.3,y:21.1,startPosition:9,regX:26}},{t:this.instance_144,p:{regX:26,x:-4.6,y:29,startPosition:9}},{t:this.instance_93,p:{x:-11.6,y:28.6,startPosition:9,regX:26}},{t:this.instance_92,p:{x:-19.5,y:31.1,startPosition:9,regX:25.8}},{t:this.instance_91,p:{x:-27.3,y:31.9,startPosition:9,regX:26}},{t:this.instance_90,p:{x:-31.9,y:33.2,startPosition:9,regX:26}},{t:this.instance_89,p:{x:10.4,y:27.7,startPosition:9,regX:26}},{t:this.instance_88,p:{x:17.7,y:28.7,startPosition:9,regX:26}},{t:this.instance_87,p:{x:25.3,y:29.7,startPosition:9,regX:26}},{t:this.instance_86,p:{regX:26,x:45.3,y:40.7,startPosition:9}},{t:this.instance_143,p:{x:38.1,y:36.9,startPosition:9,regX:26}},{t:this.instance_85,p:{regX:26,x:3.3,y:33.8,startPosition:9}},{t:this.instance_84,p:{x:11.7,y:35.1,startPosition:9,regX:25.8}},{t:this.instance_83,p:{regX:26,x:19,y:36.7,startPosition:9}},{t:this.instance_82,p:{x:27.7,y:35.1,startPosition:9,regX:26}},{t:this.instance_142,p:{x:-4.7,y:28.8,startPosition:9}},{t:this.instance_81,p:{x:-36.4,y:12,startPosition:9,regX:26}},{t:this.instance_80,p:{x:-26.4,y:11.9,startPosition:9,regX:26}},{t:this.instance_79,p:{x:-15.6,y:33,startPosition:9,regX:25.8}},{t:this.instance_78,p:{x:-22.6,y:36.1,startPosition:9,regX:26}},{t:this.instance_77,p:{regX:26,x:-7.9,y:38.8,startPosition:9}},{t:this.instance_76,p:{regX:25.8,x:1.7,y:37,startPosition:9}},{t:this.instance_75,p:{regX:25.8,x:11.2,y:37,startPosition:9}},{t:this.instance_74,p:{x:21.4,y:38.1,startPosition:9,regX:26}},{t:this.instance_73,p:{x:30.9,y:38.1,startPosition:9,regX:26}},{t:this.instance_72,p:{regX:26,x:38.7,y:46.1,startPosition:9}},{t:this.instance_71,p:{x:46.6,y:48.1,startPosition:9,regX:25.8}},{t:this.instance_70,p:{x:30.6,y:48.1,startPosition:9,regX:26}},{t:this.instance_69,p:{x:22.2,y:46.1,startPosition:9}},{t:this.instance_141,p:{x:12.7,y:44.9,startPosition:9}},{t:this.instance_68,p:{x:3.6,y:46.1,startPosition:9,regX:26}},{t:this.instance_67,p:{x:-4.4,y:44.9,startPosition:9,regX:26}},{t:this.instance_66,p:{regX:26,x:-14.1,y:42.2,startPosition:9}},{t:this.instance_65,p:{x:-30.4,y:41.6,startPosition:9,regX:26}},{t:this.instance_64,p:{x:-38.3,y:42.2,startPosition:9,regX:26}},{t:this.instance_140,p:{x:-37.2,y:50.9,startPosition:9,regX:25.8}},{t:this.instance_63,p:{x:-31.4,y:46.1,startPosition:9,regX:26}},{t:this.instance_62,p:{x:-22.5,y:46.1,startPosition:9,regX:26}},{t:this.instance_139,p:{regX:26,x:-30.4,y:55.3,startPosition:9}},{t:this.instance_61,p:{x:-23.5,y:55.2,startPosition:9,regX:25.8}},{t:this.instance_60,p:{x:-16.7,y:50.9,startPosition:9,regX:26}},{t:this.instance_59,p:{x:-9.3,y:52.7,startPosition:9}},{t:this.instance_58,p:{x:-0.5,y:53.2,startPosition:9}},{t:this.instance_57,p:{x:8,y:53.2,startPosition:9}},{t:this.instance_56,p:{x:16.8,y:54.3,startPosition:9,regX:26}},{t:this.instance_55,p:{x:26.3,y:55.2,startPosition:9,regX:26}},{t:this.instance_138,p:{x:35.2,y:54.3,startPosition:9,regX:26}},{t:this.instance_54,p:{x:44.2,y:55.3,startPosition:9}},{t:this.instance_53,p:{x:46.7,y:55.9,startPosition:9,regX:26}},{t:this.instance_137,p:{regX:25.8,x:46.2,y:65.3,startPosition:9}},{t:this.instance_136,p:{regX:26,x:38,y:62.1,startPosition:9}},{t:this.instance_52,p:{regX:26,x:30.6,y:62,startPosition:9}},{t:this.instance_51,p:{x:21.3,y:62.7,startPosition:9}},{t:this.instance_50,p:{regX:26,x:11.8,y:62.7,startPosition:9}},{t:this.instance_49,p:{x:2.9,y:62,startPosition:9,regX:25.8}},{t:this.instance_135,p:{x:-7.4,y:60.9,startPosition:9,regX:26}},{t:this.instance_48,p:{x:-16.5,y:60.9,startPosition:9,regX:26}},{t:this.instance_47,p:{regX:26,x:-26.7,y:60.8,startPosition:9}},{t:this.instance_134,p:{regX:25.8,x:-37,y:59.7,startPosition:9}},{t:this.instance_46,p:{x:-36.3,y:29.7,startPosition:9}},{t:this.instance_45,p:{x:-34.9,y:14.2,startPosition:9,regX:26}},{t:this.instance_133,p:{regX:26,x:-27.6,y:24.2,startPosition:9}},{t:this.instance_44,p:{regX:26,x:-37.7,y:18.1,startPosition:9}},{t:this.instance_132,p:{x:4.4,y:31.2,startPosition:9,regX:26}},{t:this.instance_43,p:{regX:26,x:-34.5,y:38.9,startPosition:9}},{t:this.instance_42,p:{x:-24.2,y:39.6,startPosition:9,regX:25.8}},{t:this.instance_41,p:{regX:26,x:-16.5,y:39.7,startPosition:9}},{t:this.instance_40,p:{regX:26,x:-8,y:39.6,startPosition:9}},{t:this.instance_39,p:{x:-1.5,y:39,startPosition:9,regX:25.8}},{t:this.instance_38,p:{x:49,y:40.2,startPosition:9,regX:26}},{t:this.instance_37,p:{x:-38.3,y:48.2,startPosition:9,regX:26}},{t:this.instance_131,p:{regX:26,x:-36.2,y:38.9,startPosition:9}},{t:this.instance_130,p:{x:-25.3,y:39.6,startPosition:9,regX:26}},{t:this.instance_36,p:{x:-35.8,y:7.1,startPosition:9,regX:26}},{t:this.instance_35,p:{x:-29.1,y:49.8,startPosition:9}},{t:this.instance_34,p:{regX:26,x:-20.8,y:49.8,startPosition:9}},{t:this.instance_33,p:{regX:26,x:-13,y:48.8,startPosition:9}},{t:this.instance_32,p:{regX:26,x:-4.8,y:49.1,startPosition:9}},{t:this.instance_31,p:{x:40.8,y:48.8,startPosition:9,regX:26}},{t:this.instance_30,p:{regX:26,x:49,y:47.2,startPosition:9}},{t:this.instance_29,p:{x:49.2,y:56,startPosition:9}},{t:this.instance_129,p:{x:-11.7,y:59.1,startPosition:9,regX:26}},{t:this.instance_28,p:{x:-22.3,y:59.2,startPosition:9}},{t:this.instance_27,p:{x:-30.3,y:60.2,startPosition:9}},{t:this.instance_26,p:{x:-37.5,y:58.2,startPosition:9,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-37.3,y:68,startPosition:9}},{t:this.instance_24,p:{x:-29.2,y:68.7,startPosition:9,regX:26}},{t:this.instance_128,p:{x:-20.8,y:68,startPosition:9}},{t:this.instance_23,p:{x:-13.3,y:68.7,startPosition:9}},{t:this.instance_22,p:{x:-4.3,y:69.2,startPosition:9}},{t:this.instance_21,p:{regX:26,x:5.8,y:68.1,startPosition:9}},{t:this.instance_20,p:{regX:26,x:13.2,y:68,startPosition:9}},{t:this.instance_19,p:{regX:26,x:21.2,y:68.7,startPosition:9}},{t:this.instance_18,p:{x:31,y:69.3,startPosition:9}},{t:this.instance_127,p:{x:38.8,y:70.3,startPosition:9}},{t:this.instance_17,p:{x:48.9,y:66.3,startPosition:9}},{t:this.instance_16,p:{x:46.6,y:74.4,startPosition:9}},{t:this.instance_15,p:{x:33,y:75.5,startPosition:9}},{t:this.instance_14,p:{regX:25.8,x:23.8,y:74.4,startPosition:9}},{t:this.instance_13,p:{x:-36,y:73,startPosition:9}},{t:this.instance_12,p:{x:-27.2,y:74.4,startPosition:9}},{t:this.instance_11,p:{regX:25.8,x:-20.1,y:75.6,startPosition:9}},{t:this.instance_10,p:{regX:25.8,x:-10.8,y:75.6,startPosition:9}},{t:this.instance_9,p:{x:0.2,y:76.4,startPosition:9}},{t:this.instance_8,p:{x:8.3,y:76.4,startPosition:9}},{t:this.instance_7,p:{x:14.6,y:76.5,startPosition:9}},{t:this.instance_126,p:{x:-30.1,y:78.5,startPosition:9}},{t:this.instance_6,p:{x:-20.9,y:80.3,startPosition:9}},{t:this.instance_125,p:{x:-13.8,y:81.8,startPosition:9}},{t:this.instance_5,p:{x:-4.8,y:83,startPosition:9}},{t:this.instance_124,p:{x:4.5,y:84.1,startPosition:9}},{t:this.instance_4,p:{regX:26,x:14.3,y:84.1,startPosition:9}},{t:this.instance_123,p:{x:22.9,y:84.2,startPosition:9}},{t:this.instance_3,p:{regX:25.8,x:33.4,y:81.9,startPosition:9}},{t:this.instance_122,p:{x:40.7,y:79.1,startPosition:9}},{t:this.instance_2,p:{x:31.2,y:83,startPosition:9}},{t:this.shape_9,p:{x:1.8,y:12}},{t:this.shape_20},{t:this.shape_7,p:{x:3.6,y:-49.8}},{t:this.shape_6,p:{x:1.8,y:12}},{t:this.shape_19},{t:this.instance_1,p:{x:56.8,y:-12.3}}]},2).to({state:[{t:this.instance_121,p:{x:83.6,y:16.7}},{t:this.instance_145,p:{regX:23.5,regY:23.7,x:9.4,y:19.3,startPosition:11}},{t:this.instance_101,p:{regX:23.5,x:1.6,y:19.3,startPosition:11,regY:23.7}},{t:this.instance_100,p:{regX:23.5,x:16.8,y:19.4,startPosition:11,regY:23.7}},{t:this.instance_99,p:{x:23.5,y:19.7,startPosition:11,regX:26}},{t:this.instance_98,p:{x:31,y:20.7,startPosition:11,regX:25.8}},{t:this.instance_97,p:{x:37.6,y:20.9,startPosition:11,regX:26}},{t:this.instance_144,p:{regX:25.8,x:44.3,y:21.6,startPosition:11}},{t:this.instance_96,p:{x:52.3,y:22.8,startPosition:11,regX:25.8,regY:25.1}},{t:this.instance_95,p:{x:56.2,y:23.9,startPosition:11,regX:26,regY:25.1}},{t:this.instance_94,p:{x:-5.7,y:20.7,startPosition:11,regX:26}},{t:this.instance_143,p:{x:-13.5,y:22.1,startPosition:11,regX:26}},{t:this.instance_93,p:{x:-19.8,y:22.8,startPosition:11,regX:26}},{t:this.instance_92,p:{x:-26,y:24.4,startPosition:11,regX:25.8}},{t:this.instance_91,p:{x:-30.8,y:24.5,startPosition:11,regX:25.8}},{t:this.instance_90,p:{x:-30.8,y:31.8,startPosition:11,regX:25.8}},{t:this.instance_89,p:{x:9.9,y:25.8,startPosition:11,regX:26}},{t:this.instance_142,p:{x:2.3,y:27.8,startPosition:11}},{t:this.instance_88,p:{x:-4.8,y:27.3,startPosition:11,regX:26}},{t:this.instance_87,p:{x:-12.6,y:29.9,startPosition:11,regX:25.8}},{t:this.instance_86,p:{regX:26,x:-20.5,y:30.7,startPosition:11}},{t:this.instance_85,p:{regX:26,x:-17,y:36,startPosition:11}},{t:this.instance_84,p:{x:17.2,y:26.5,startPosition:11,regX:26}},{t:this.instance_83,p:{regX:26,x:24.5,y:27.4,startPosition:11}},{t:this.instance_82,p:{x:32.1,y:28.4,startPosition:11,regX:26}},{t:this.instance_81,p:{x:40,y:29.9,startPosition:11,regX:25.8}},{t:this.instance_80,p:{x:44.8,y:30.8,startPosition:11,regX:26}},{t:this.instance_79,p:{x:55.7,y:30.7,startPosition:11,regX:26}},{t:this.instance_78,p:{x:52.2,y:39.5,startPosition:11,regX:26}},{t:this.instance_141,p:{x:45,y:35.7,startPosition:11}},{t:this.instance_77,p:{regX:26,x:10.1,y:32.6,startPosition:11}},{t:this.instance_76,p:{regX:25.8,x:18.5,y:33.8,startPosition:11}},{t:this.instance_75,p:{regX:26,x:25.9,y:35.4,startPosition:11}},{t:this.instance_74,p:{x:34.5,y:33.8,startPosition:11,regX:26}},{t:this.instance_140,p:{x:10.3,y:24.4,startPosition:11,regX:26}},{t:this.instance_73,p:{x:19.5,y:26.6,startPosition:11,regX:26}},{t:this.instance_72,p:{regX:25.8,x:40.1,y:27.3,startPosition:11}},{t:this.instance_71,p:{x:1.1,y:28.5,startPosition:11,regX:26}},{t:this.instance_70,p:{x:-8.7,y:31.8,startPosition:11,regX:25.8}},{t:this.instance_69,p:{x:-1.1,y:37.5,startPosition:11}},{t:this.instance_68,p:{x:8.5,y:35.8,startPosition:11,regX:25.8}},{t:this.instance_67,p:{x:18,y:35.8,startPosition:11,regX:25.8}},{t:this.instance_66,p:{regX:26,x:28.2,y:36.8,startPosition:11}},{t:this.instance_65,p:{x:37.7,y:36.8,startPosition:11,regX:26}},{t:this.instance_64,p:{x:45.5,y:44.9,startPosition:11,regX:26}},{t:this.instance_63,p:{x:53.4,y:46.8,startPosition:11,regX:25.8}},{t:this.instance_62,p:{x:37.5,y:46.8,startPosition:11,regX:26}},{t:this.instance_61,p:{x:29,y:44.9,startPosition:11,regX:26}},{t:this.instance_139,p:{regX:26,x:19.6,y:43.6,startPosition:11}},{t:this.instance_60,p:{x:10.4,y:44.9,startPosition:11,regX:26}},{t:this.instance_59,p:{x:2.4,y:43.6,startPosition:11}},{t:this.instance_58,p:{x:-7.2,y:40.9,startPosition:11}},{t:this.instance_57,p:{x:-23.6,y:40.4,startPosition:11}},{t:this.instance_56,p:{x:-31.4,y:40.9,startPosition:11,regX:26}},{t:this.instance_138,p:{x:-30.3,y:49.7,startPosition:11,regX:25.8}},{t:this.instance_55,p:{x:-24.5,y:44.9,startPosition:11,regX:26}},{t:this.instance_54,p:{x:-15.6,y:44.9,startPosition:11}},{t:this.instance_137,p:{regX:26,x:-23.6,y:54,startPosition:11}},{t:this.instance_53,p:{x:-16.7,y:53.9,startPosition:11,regX:25.8}},{t:this.instance_52,p:{regX:26,x:-9.8,y:49.7,startPosition:11}},{t:this.instance_51,p:{x:-2.4,y:51.4,startPosition:11}},{t:this.instance_50,p:{regX:26,x:6.3,y:52,startPosition:11}},{t:this.instance_49,p:{x:14.9,y:52,startPosition:11,regX:26}},{t:this.instance_48,p:{x:23.6,y:53,startPosition:11,regX:26}},{t:this.instance_47,p:{regX:26,x:33.1,y:53.9,startPosition:11}},{t:this.instance_136,p:{regX:26,x:42.1,y:53,startPosition:11}},{t:this.instance_46,p:{x:51,y:54,startPosition:11}},{t:this.instance_45,p:{x:53.6,y:54.7,startPosition:11,regX:26}},{t:this.instance_135,p:{x:53.1,y:64.1,startPosition:11,regX:25.8}},{t:this.instance_134,p:{regX:26,x:44.9,y:60.8,startPosition:11}},{t:this.instance_44,p:{regX:26,x:37.5,y:60.7,startPosition:11}},{t:this.instance_43,p:{regX:26,x:28.1,y:61.5,startPosition:11}},{t:this.instance_42,p:{x:18.7,y:61.5,startPosition:11,regX:26}},{t:this.instance_41,p:{regX:25.8,x:9.8,y:60.7,startPosition:11}},{t:this.instance_133,p:{regX:26,x:-0.5,y:59.7,startPosition:11}},{t:this.instance_40,p:{regX:26,x:-9.7,y:59.7,startPosition:11}},{t:this.instance_39,p:{x:-19.9,y:59.6,startPosition:11,regX:26}},{t:this.instance_132,p:{x:-30.2,y:58.5,startPosition:11,regX:25.8}},{t:this.instance_38,p:{x:48.7,y:28.4,startPosition:11,regX:25.8}},{t:this.instance_37,p:{x:44.1,y:37.8,startPosition:11,regX:25.8}},{t:this.instance_36,p:{x:55.9,y:38.9,startPosition:11,regX:26}},{t:this.instance_35,p:{x:-31.4,y:46.9,startPosition:11}},{t:this.instance_131,p:{regX:26,x:-29.3,y:37.6,startPosition:11}},{t:this.instance_34,p:{regX:26,x:20.8,y:48.6,startPosition:11}},{t:this.instance_130,p:{x:30.5,y:48.6,startPosition:11,regX:25.8}},{t:this.instance_33,p:{regX:26,x:47.6,y:47.5,startPosition:11}},{t:this.instance_32,p:{regX:26,x:55.9,y:45.9,startPosition:11}},{t:this.instance_31,p:{x:56,y:54.8,startPosition:11,regX:26}},{t:this.instance_30,p:{regX:25.8,x:44,y:57.9,startPosition:11}},{t:this.instance_29,p:{x:33.4,y:57.9,startPosition:11}},{t:this.instance_129,p:{x:-4.9,y:57.9,startPosition:11,regX:26}},{t:this.instance_28,p:{x:-15.5,y:58,startPosition:11}},{t:this.instance_27,p:{x:-23.4,y:58.9,startPosition:11}},{t:this.instance_26,p:{x:-30.6,y:56.9,startPosition:11,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-30.4,y:66.8,startPosition:11}},{t:this.instance_24,p:{x:-22.3,y:67.5,startPosition:11,regX:26}},{t:this.instance_128,p:{x:-14,y:66.8,startPosition:11}},{t:this.instance_23,p:{x:-6.4,y:67.5,startPosition:11}},{t:this.instance_22,p:{x:2.6,y:68,startPosition:11}},{t:this.instance_21,p:{regX:26,x:12.7,y:66.9,startPosition:11}},{t:this.instance_20,p:{regX:26,x:20.1,y:66.8,startPosition:11}},{t:this.instance_19,p:{regX:26,x:28,y:67.5,startPosition:11}},{t:this.instance_18,p:{x:37.9,y:68.1,startPosition:11}},{t:this.instance_127,p:{x:45.7,y:69,startPosition:11}},{t:this.instance_17,p:{x:55.8,y:65.1,startPosition:11}},{t:this.instance_16,p:{x:53.5,y:73.2,startPosition:11}},{t:this.instance_15,p:{x:39.9,y:74.3,startPosition:11}},{t:this.instance_14,p:{regX:25.8,x:30.7,y:73.2,startPosition:11}},{t:this.instance_13,p:{x:-29.2,y:71.8,startPosition:11}},{t:this.instance_12,p:{x:-20.3,y:73.2,startPosition:11}},{t:this.instance_11,p:{regX:25.8,x:-13.3,y:74.4,startPosition:11}},{t:this.instance_10,p:{regX:25.8,x:-4,y:74.4,startPosition:11}},{t:this.instance_9,p:{x:7.1,y:75.1,startPosition:11}},{t:this.instance_8,p:{x:15.2,y:75.1,startPosition:11}},{t:this.instance_7,p:{x:21.5,y:75.2,startPosition:11}},{t:this.instance_126,p:{x:-23.3,y:77.2,startPosition:11}},{t:this.instance_6,p:{x:-14.1,y:79,startPosition:11}},{t:this.instance_125,p:{x:-6.9,y:80.6,startPosition:11}},{t:this.instance_5,p:{x:2,y:81.7,startPosition:11}},{t:this.instance_124,p:{x:11.4,y:82.8,startPosition:11}},{t:this.instance_4,p:{regX:26,x:21.2,y:82.8,startPosition:11}},{t:this.instance_123,p:{x:29.7,y:82.9,startPosition:11}},{t:this.instance_3,p:{regX:25.8,x:40.3,y:80.7,startPosition:11}},{t:this.instance_122,p:{x:47.5,y:77.8,startPosition:11}},{t:this.instance_2,p:{x:38,y:81.7,startPosition:11}},{t:this.shape_7,p:{x:10.3,y:-50.9}},{t:this.shape_9,p:{x:8.5,y:10.9}},{t:this.shape_22},{t:this.shape_6,p:{x:8.5,y:10.9}},{t:this.shape_21},{t:this.instance_1,p:{x:63.7,y:-13.6}}]},2).to({state:[{t:this.instance_121,p:{x:71.6,y:23.3}},{t:this.instance_148,p:{x:-2.6,y:25.9,startPosition:13,regX:23.5,regY:23.7}},{t:this.instance_106,p:{x:4.7,y:26,startPosition:13,regX:23.5,regY:23.7}},{t:this.instance_105,p:{x:27.6,y:18.2,startPosition:13,regX:26}},{t:this.instance_104,p:{x:19,y:27.3,startPosition:13,regX:25.8}},{t:this.instance_103,p:{x:25.5,y:27.5,startPosition:13,regX:26,regY:25.1}},{t:this.instance_147,p:{regX:25.8,regY:25.1,x:40.1,y:20.3,startPosition:13}},{t:this.instance_102,p:{x:40.2,y:29.4,startPosition:13,regX:25.8,regY:25.1}},{t:this.instance_101,p:{regX:26,x:44.1,y:30.5,startPosition:13,regY:25.1}},{t:this.instance_146,p:{regX:26,x:21,y:17.2,startPosition:13,regY:25.1}},{t:this.instance_100,p:{regX:25.8,x:3.3,y:25.5,startPosition:13,regY:25.1}},{t:this.instance_99,p:{x:-2.2,y:32.4,startPosition:13,regX:26}},{t:this.instance_145,p:{regX:26,regY:25.1,x:-9.8,y:34.4,startPosition:13}},{t:this.instance_98,p:{x:-16.8,y:33.9,startPosition:13,regX:26}},{t:this.instance_97,p:{x:-29,y:42.8,startPosition:13,regX:26}},{t:this.instance_96,p:{x:5.2,y:33.1,startPosition:13,regX:26,regY:25.1}},{t:this.instance_95,p:{x:12.5,y:34,startPosition:13,regX:26,regY:25.1}},{t:this.instance_94,p:{x:20.1,y:35,startPosition:13,regX:26}},{t:this.instance_93,p:{x:27.9,y:36.5,startPosition:13,regX:25.8}},{t:this.instance_92,p:{x:32.8,y:37.4,startPosition:13,regX:26}},{t:this.instance_91,p:{x:43.6,y:37.3,startPosition:13,regX:26}},{t:this.instance_90,p:{x:40.1,y:46.1,startPosition:13,regX:26}},{t:this.instance_144,p:{regX:26,x:32.9,y:42.3,startPosition:13}},{t:this.instance_89,p:{x:-1.9,y:39.2,startPosition:13,regX:26}},{t:this.instance_88,p:{x:6.5,y:40.4,startPosition:13,regX:25.8}},{t:this.instance_87,p:{x:13.8,y:42,startPosition:13,regX:26}},{t:this.instance_86,p:{regX:26,x:22.5,y:40.4,startPosition:13}},{t:this.instance_143,p:{x:-1.8,y:31,startPosition:13,regX:26}},{t:this.instance_85,p:{regX:26,x:13.8,y:27.4,startPosition:13}},{t:this.instance_142,p:{x:17,y:33.1,startPosition:13}},{t:this.instance_84,p:{x:28.1,y:33.9,startPosition:13,regX:25.8}},{t:this.instance_83,p:{regX:26,x:-13.9,y:40.1,startPosition:13}},{t:this.instance_82,p:{x:-19.6,y:41.1,startPosition:13,regX:26}},{t:this.instance_81,p:{x:-3.5,y:42.4,startPosition:13,regX:25.8}},{t:this.instance_80,p:{x:6,y:42.4,startPosition:13,regX:25.8}},{t:this.instance_79,p:{x:16.2,y:43.4,startPosition:13,regX:26}},{t:this.instance_78,p:{x:25.7,y:43.4,startPosition:13,regX:26}},{t:this.instance_77,p:{regX:26,x:33.5,y:51.5,startPosition:13}},{t:this.instance_76,p:{regX:25.8,x:41.4,y:53.4,startPosition:13}},{t:this.instance_75,p:{regX:26,x:25.4,y:53.4,startPosition:13}},{t:this.instance_74,p:{x:17,y:51.5,startPosition:13,regX:26}},{t:this.instance_141,p:{x:7.5,y:50.2,startPosition:13}},{t:this.instance_73,p:{x:-1.6,y:51.5,startPosition:13,regX:26}},{t:this.instance_72,p:{regX:26,x:-9.6,y:50.2,startPosition:13}},{t:this.instance_71,p:{x:-19.3,y:47.5,startPosition:13,regX:26}},{t:this.instance_70,p:{x:-35.6,y:47,startPosition:13,regX:26}},{t:this.instance_140,p:{x:-42.4,y:56.3,startPosition:13,regX:25.8}},{t:this.instance_69,p:{x:-36.6,y:51.5,startPosition:13}},{t:this.instance_68,p:{x:-27.7,y:51.5,startPosition:13,regX:26}},{t:this.instance_139,p:{regX:26,x:-35.6,y:60.6,startPosition:13}},{t:this.instance_67,p:{x:-28.7,y:60.5,startPosition:13,regX:25.8}},{t:this.instance_66,p:{regX:26,x:-21.9,y:56.3,startPosition:13}},{t:this.instance_65,p:{x:-14.5,y:58,startPosition:13,regX:26}},{t:this.instance_64,p:{x:-5.7,y:58.6,startPosition:13,regX:26}},{t:this.instance_63,p:{x:2.8,y:58.6,startPosition:13,regX:26}},{t:this.instance_62,p:{x:11.6,y:59.6,startPosition:13,regX:26}},{t:this.instance_61,p:{x:21.1,y:60.5,startPosition:13,regX:26}},{t:this.instance_138,p:{x:30,y:59.6,startPosition:13,regX:26}},{t:this.instance_60,p:{x:39,y:60.6,startPosition:13,regX:26}},{t:this.instance_59,p:{x:41.5,y:61.3,startPosition:13}},{t:this.instance_137,p:{regX:25.8,x:41,y:70.7,startPosition:13}},{t:this.instance_136,p:{regX:26,x:32.8,y:67.4,startPosition:13}},{t:this.instance_58,p:{x:25.4,y:67.3,startPosition:13}},{t:this.instance_57,p:{x:16.1,y:68.1,startPosition:13}},{t:this.instance_56,p:{x:6.6,y:68.1,startPosition:13,regX:26}},{t:this.instance_55,p:{x:-2.3,y:67.3,startPosition:13,regX:25.8}},{t:this.instance_135,p:{x:-12.6,y:66.3,startPosition:13,regX:26}},{t:this.instance_54,p:{x:-21.7,y:66.3,startPosition:13}},{t:this.instance_53,p:{x:-31.9,y:66.2,startPosition:13,regX:26}},{t:this.instance_134,p:{regX:25.8,x:-42.2,y:65.1,startPosition:13}},{t:this.instance_52,p:{regX:26,x:11.3,y:24.1,startPosition:13}},{t:this.instance_51,p:{x:25.7,y:25.7,startPosition:13}},{t:this.instance_133,p:{regX:26,x:30.4,y:29.2,startPosition:13}},{t:this.instance_50,p:{regX:26,x:35.5,y:25.4,startPosition:13}},{t:this.instance_49,p:{x:36.7,y:35,startPosition:13,regX:25.8}},{t:this.instance_48,p:{x:5.6,y:25.7,startPosition:13,regX:25.8}},{t:this.instance_132,p:{x:41.2,y:16.3,startPosition:13,regX:26}},{t:this.instance_47,p:{regX:25.8,x:21.2,y:40.2,startPosition:13}},{t:this.instance_46,p:{x:41.9,y:19.4,startPosition:13}},{t:this.instance_45,p:{x:32.1,y:44.4,startPosition:13,regX:25.8}},{t:this.instance_44,p:{regX:26,x:43.8,y:45.5,startPosition:13}},{t:this.instance_43,p:{regX:26,x:-43.5,y:53.5,startPosition:13}},{t:this.instance_42,p:{x:46.7,y:23.3,startPosition:13,regX:26}},{t:this.instance_131,p:{regX:26,x:10.2,y:27.2,startPosition:13}},{t:this.instance_41,p:{regX:26,x:15.2,y:23,startPosition:13}},{t:this.instance_40,p:{regX:26,x:5.3,y:64.4,startPosition:13}},{t:this.instance_39,p:{x:24.1,y:48.4,startPosition:13,regX:26}},{t:this.instance_38,p:{x:33.3,y:17.2,startPosition:13,regX:26}},{t:this.instance_37,p:{x:4.4,y:49.6,startPosition:13,regX:26}},{t:this.instance_36,p:{x:30,y:12.3,startPosition:13,regX:26}},{t:this.instance_35,p:{x:8.8,y:55.2,startPosition:13}},{t:this.instance_130,p:{x:40.2,y:5.2,startPosition:13,regX:25.8}},{t:this.instance_34,p:{regX:25.8,x:27.2,y:54.5,startPosition:13}},{t:this.instance_33,p:{regX:26,x:35.6,y:54.1,startPosition:13}},{t:this.instance_32,p:{regX:26,x:43.8,y:52.5,startPosition:13}},{t:this.instance_31,p:{x:44,y:61.4,startPosition:13,regX:26}},{t:this.instance_30,p:{regX:25.8,x:32,y:64.5,startPosition:13}},{t:this.instance_29,p:{x:21.4,y:64.5,startPosition:13}},{t:this.instance_28,p:{x:15,y:58.5,startPosition:13}},{t:this.instance_27,p:{x:40.3,y:14.4,startPosition:13}},{t:this.instance_129,p:{x:-16.9,y:64.5,startPosition:13,regX:26}},{t:this.instance_26,p:{x:-36.9,y:68.1,startPosition:13,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-42.5,y:73.4,startPosition:13}},{t:this.instance_24,p:{x:-34.4,y:74.1,startPosition:13,regX:26}},{t:this.instance_128,p:{x:-26,y:73.4,startPosition:13}},{t:this.instance_23,p:{x:-18.5,y:74.1,startPosition:13}},{t:this.instance_22,p:{x:-9.5,y:74.6,startPosition:13}},{t:this.instance_21,p:{regX:26,x:0.6,y:73.5,startPosition:13}},{t:this.instance_20,p:{regX:26,x:8,y:73.4,startPosition:13}},{t:this.instance_19,p:{regX:26,x:16,y:74.1,startPosition:13}},{t:this.instance_18,p:{x:25.8,y:74.7,startPosition:13}},{t:this.instance_127,p:{x:33.6,y:75.6,startPosition:13}},{t:this.instance_17,p:{x:43.7,y:71.7,startPosition:13}},{t:this.instance_16,p:{x:41.4,y:79.8,startPosition:13}},{t:this.instance_15,p:{x:24.1,y:80,startPosition:13}},{t:this.instance_14,p:{regX:25.8,x:15.5,y:81.7,startPosition:13}},{t:this.instance_13,p:{x:-41.2,y:78.4,startPosition:13}},{t:this.instance_12,p:{x:-32.4,y:79.8,startPosition:13}},{t:this.instance_11,p:{regX:25.8,x:-23.4,y:79.1,startPosition:13}},{t:this.instance_10,p:{regX:25.8,x:-16,y:81,startPosition:13}},{t:this.instance_9,p:{x:-5,y:81.7,startPosition:13}},{t:this.instance_8,p:{x:3.1,y:81.7,startPosition:13}},{t:this.instance_7,p:{x:9.4,y:81.8,startPosition:13}},{t:this.instance_126,p:{x:-35.3,y:83.8,startPosition:13}},{t:this.instance_6,p:{x:-26.1,y:85.6,startPosition:13}},{t:this.instance_125,p:{x:-19,y:87.2,startPosition:13}},{t:this.instance_5,p:{x:-10,y:88.3,startPosition:13}},{t:this.instance_124,p:{x:-0.7,y:89.4,startPosition:13}},{t:this.instance_4,p:{regX:26,x:9.1,y:89.4,startPosition:13}},{t:this.instance_123,p:{x:17.7,y:89.5,startPosition:13}},{t:this.instance_3,p:{regX:25.8,x:28.2,y:87.3,startPosition:13}},{t:this.instance_122,p:{x:35.5,y:84.4,startPosition:13}},{t:this.instance_2,p:{x:26,y:88.3,startPosition:13}},{t:this.shape_7,p:{x:-1.8,y:-45}},{t:this.shape_9,p:{x:-3.6,y:16.8}},{t:this.shape_16,p:{x:-1.7,y:-41.9}},{t:this.shape_6,p:{x:-3.6,y:16.8}},{t:this.shape_23},{t:this.instance_1,p:{x:51.6,y:-7}}]},2).to({state:[{t:this.instance_121,p:{x:64.4,y:22.6}},{t:this.instance_146,p:{regX:23.5,x:-9.8,y:25.3,startPosition:15,regY:23.7}},{t:this.instance_114,p:{regX:23.5,regY:23.7,x:-17.7,y:25.3,startPosition:15}},{t:this.instance_113,p:{regX:23.5,regY:23.7,x:-2.5,startPosition:15,y:25.4}},{t:this.instance_112,p:{x:4.2,y:25.7,startPosition:15,regX:26,regY:25.1}},{t:this.instance_111,p:{regX:25.8,regY:25.1,x:11.8,y:26.7,startPosition:15}},{t:this.instance_110,p:{regX:26,regY:25.1,x:18.3,y:26.9,startPosition:15}},{t:this.instance_145,p:{regX:25.8,regY:25.1,x:26.4,y:23.7,startPosition:15}},{t:this.instance_109,p:{x:33,y:28.7,startPosition:15,regX:25.8}},{t:this.instance_108,p:{regX:26,x:36.9,y:29.9,startPosition:15,regY:25.1}},{t:this.instance_107,p:{regX:26,x:-31.4,y:28.7,startPosition:15,regY:25.1}},{t:this.instance_144,p:{regX:26,x:-40.9,y:22.1,startPosition:15}},{t:this.instance_106,p:{x:-39,y:28.7,startPosition:15,regX:26,regY:25.1}},{t:this.instance_105,p:{x:-45.3,y:30.3,startPosition:15,regX:25.8}},{t:this.instance_104,p:{x:-50,y:30.4,startPosition:15,regX:25.8}},{t:this.instance_103,p:{x:-50,y:37.7,startPosition:15,regX:25.8,regY:25.1}},{t:this.instance_102,p:{x:-9.4,y:31.7,startPosition:15,regX:26,regY:25.1}},{t:this.instance_143,p:{x:-8.8,y:34.4,startPosition:15,regX:26}},{t:this.instance_101,p:{regX:26,x:-24,y:33.3,startPosition:15,regY:25.1}},{t:this.instance_100,p:{regX:25.8,x:-31.9,y:35.8,startPosition:15,regY:25.1}},{t:this.instance_99,p:{x:-39.7,y:36.6,startPosition:15,regX:26}},{t:this.instance_98,p:{x:-44.3,y:37.9,startPosition:15,regX:26}},{t:this.instance_97,p:{x:-2,y:32.4,startPosition:15,regX:26}},{t:this.instance_96,p:{x:5.3,y:33.4,startPosition:15,regX:26,regY:25.1}},{t:this.instance_95,p:{x:12.9,y:34.4,startPosition:15,regX:26,regY:25.1}},{t:this.instance_94,p:{x:20.7,y:35.8,startPosition:15,regX:25.8}},{t:this.instance_93,p:{x:25.6,y:36.7,startPosition:15,regX:26}},{t:this.instance_92,p:{x:36.4,y:36.6,startPosition:15,regX:26}},{t:this.instance_91,p:{x:32.9,y:45.4,startPosition:15,regX:26}},{t:this.instance_142,p:{x:25.7,y:41.6,startPosition:15}},{t:this.instance_90,p:{x:-9.1,y:38.5,startPosition:15,regX:26}},{t:this.instance_89,p:{x:-0.7,y:39.8,startPosition:15,regX:25.8}},{t:this.instance_88,p:{x:6.6,y:41.4,startPosition:15,regX:26}},{t:this.instance_87,p:{x:15.3,y:39.8,startPosition:15,regX:26}},{t:this.instance_141,p:{x:-1.2,y:72.7,startPosition:15}},{t:this.instance_86,p:{regX:26,x:0.3,y:32.5,startPosition:15}},{t:this.instance_140,p:{x:9.8,y:32.4,startPosition:15,regX:26}},{t:this.instance_85,p:{regX:25.8,x:20.9,y:33.3,startPosition:15}},{t:this.instance_84,p:{x:-18.1,y:34.5,startPosition:15,regX:26}},{t:this.instance_83,p:{regX:25.8,x:-28,y:37.7,startPosition:15}},{t:this.instance_82,p:{x:-35,y:40.8,startPosition:15,regX:26}},{t:this.instance_81,p:{x:-20.3,y:43.5,startPosition:15,regX:26}},{t:this.instance_80,p:{x:-10.7,y:41.7,startPosition:15,regX:25.8}},{t:this.instance_79,p:{x:-1.2,y:41.7,startPosition:15,regX:25.8}},{t:this.instance_78,p:{x:9,y:42.8,startPosition:15,regX:26}},{t:this.instance_77,p:{regX:26,x:18.5,y:42.8,startPosition:15}},{t:this.instance_76,p:{regX:26,x:26.3,y:50.8,startPosition:15}},{t:this.instance_75,p:{regX:25.8,x:34.2,y:52.8,startPosition:15}},{t:this.instance_74,p:{x:18.2,y:52.8,startPosition:15,regX:26}},{t:this.instance_73,p:{x:9.8,y:50.8,startPosition:15,regX:26}},{t:this.instance_139,p:{regX:26,x:0.3,y:49.6,startPosition:15}},{t:this.instance_72,p:{regX:26,x:-8.8,y:50.8,startPosition:15}},{t:this.instance_71,p:{x:-16.8,y:49.6,startPosition:15,regX:26}},{t:this.instance_70,p:{x:-26.5,y:46.9,startPosition:15,regX:26}},{t:this.instance_69,p:{x:-42.8,y:46.3,startPosition:15}},{t:this.instance_68,p:{x:-50.7,y:46.9,startPosition:15,regX:26}},{t:this.instance_138,p:{x:-49.6,y:55.6,startPosition:15,regX:25.8}},{t:this.instance_67,p:{x:-43.8,y:50.8,startPosition:15,regX:26}},{t:this.instance_66,p:{regX:26,x:-34.9,y:50.8,startPosition:15}},{t:this.instance_137,p:{regX:26,x:-42.8,y:60,startPosition:15}},{t:this.instance_65,p:{x:-35.9,y:59.9,startPosition:15,regX:25.8}},{t:this.instance_64,p:{x:-29.1,y:55.6,startPosition:15,regX:26}},{t:this.instance_63,p:{x:-21.7,y:57.4,startPosition:15,regX:26}},{t:this.instance_62,p:{x:-12.9,y:57.9,startPosition:15,regX:26}},{t:this.instance_61,p:{x:-4.4,y:57.9,startPosition:15,regX:26}},{t:this.instance_60,p:{x:4.4,y:59,startPosition:15,regX:26}},{t:this.instance_59,p:{x:13.9,y:59.9,startPosition:15}},{t:this.instance_136,p:{regX:26,x:22.8,y:59,startPosition:15}},{t:this.instance_58,p:{x:31.8,y:60,startPosition:15}},{t:this.instance_57,p:{x:34.3,y:60.6,startPosition:15}},{t:this.instance_135,p:{x:33.8,y:70,startPosition:15,regX:25.8}},{t:this.instance_134,p:{regX:26,x:25.6,y:66.8,startPosition:15}},{t:this.instance_56,p:{x:18.2,y:66.7,startPosition:15,regX:26}},{t:this.instance_55,p:{x:8.9,y:67.4,startPosition:15,regX:26}},{t:this.instance_54,p:{x:-0.6,y:67.4,startPosition:15}},{t:this.instance_53,p:{x:-9.5,y:66.7,startPosition:15,regX:25.8}},{t:this.instance_133,p:{regX:26,x:-19.8,y:65.6,startPosition:15}},{t:this.instance_52,p:{regX:26,x:-28.9,y:65.6,startPosition:15}},{t:this.instance_51,p:{x:-39.1,y:65.5,startPosition:15}},{t:this.instance_132,p:{x:-49.4,y:64.4,startPosition:15,regX:25.8}},{t:this.instance_50,p:{regX:26,x:-27.8,y:33.2,startPosition:15}},{t:this.instance_49,p:{x:-27.6,y:34.5,startPosition:15,regX:26}},{t:this.instance_131,p:{regX:26,x:-18.4,y:75.4,startPosition:15}},{t:this.instance_48,p:{x:9.3,y:31.7,startPosition:15,regX:26}},{t:this.instance_130,p:{x:9.9,y:35.4,startPosition:15,regX:26}},{t:this.instance_47,p:{regX:25.8,x:29.5,y:34.4,startPosition:15}},{t:this.instance_46,p:{x:-46.9,y:43.6,startPosition:15}},{t:this.instance_45,p:{x:-36.6,y:44.3,startPosition:15,regX:25.8}},{t:this.instance_44,p:{regX:26,x:-28.9,y:44.4,startPosition:15}},{t:this.instance_43,p:{regX:25.8,x:3.3,y:35.3,startPosition:15}},{t:this.instance_129,p:{x:6.8,y:39.8,startPosition:15,regX:26}},{t:this.instance_42,p:{x:7.2,y:46.3,startPosition:15,regX:25.8}},{t:this.instance_41,p:{regX:26,x:36.6,y:44.9,startPosition:15}},{t:this.instance_40,p:{regX:26,x:-50.7,y:52.9,startPosition:15}},{t:this.instance_39,p:{x:23.4,y:29.8,startPosition:15,regX:26}},{t:this.instance_38,p:{x:-41.5,y:54.5,startPosition:15,regX:26}},{t:this.instance_37,p:{x:-33.2,y:54.5,startPosition:15,regX:26}},{t:this.instance_36,p:{x:4.1,y:50.7,startPosition:15,regX:26}},{t:this.instance_35,p:{x:28.4,y:53.5,startPosition:15}},{t:this.instance_34,p:{regX:26,x:36.6,y:51.9,startPosition:15}},{t:this.instance_33,p:{regX:26,x:36.8,y:60.7,startPosition:15}},{t:this.instance_32,p:{regX:25.8,x:24.8,y:63.8,startPosition:15}},{t:this.instance_31,p:{x:14.2,y:63.8,startPosition:15,regX:26}},{t:this.instance_30,p:{regX:26,x:4.1,y:62.9,startPosition:15}},{t:this.instance_29,p:{x:-4.5,y:63,startPosition:15}},{t:this.instance_28,p:{x:-34.7,y:63.9,startPosition:15}},{t:this.instance_27,p:{x:-42.7,y:64.9,startPosition:15}},{t:this.instance_26,p:{x:-49.9,y:62.9,startPosition:15,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-49.7,y:72.7,startPosition:15}},{t:this.instance_24,p:{x:-41.6,y:73.4,startPosition:15,regX:26}},{t:this.instance_128,p:{x:-33.2,y:72.7,startPosition:15}},{t:this.instance_23,p:{x:-25.7,y:73.4,startPosition:15}},{t:this.instance_22,p:{x:-7,y:70,startPosition:15}},{t:this.instance_21,p:{regX:26,x:-6.6,y:72.8,startPosition:15}},{t:this.instance_20,p:{regX:26,x:1,y:64.8,startPosition:15}},{t:this.instance_19,p:{regX:26,x:8.8,y:73.4,startPosition:15}},{t:this.instance_18,p:{x:18.6,y:74,startPosition:15}},{t:this.instance_127,p:{x:26.4,y:75,startPosition:15}},{t:this.instance_17,p:{x:36.5,y:71,startPosition:15}},{t:this.instance_16,p:{x:34.2,y:79.1,startPosition:15}},{t:this.instance_15,p:{x:20.6,y:80.2,startPosition:15}},{t:this.instance_14,p:{regX:25.8,x:11.4,y:79.1,startPosition:15}},{t:this.instance_13,p:{x:-48.4,y:77.7,startPosition:15}},{t:this.instance_12,p:{x:-39.6,y:79.1,startPosition:15}},{t:this.instance_11,p:{regX:25.8,x:-32.5,y:80.3,startPosition:15}},{t:this.instance_10,p:{regX:25.8,x:-23.2,y:80.3,startPosition:15}},{t:this.instance_9,p:{x:-12.2,y:81.1,startPosition:15}},{t:this.instance_8,p:{x:-4.1,y:81.1,startPosition:15}},{t:this.instance_7,p:{x:2.2,y:81.2,startPosition:15}},{t:this.instance_126,p:{x:-42.5,y:83.2,startPosition:15}},{t:this.instance_6,p:{x:-33.3,y:85,startPosition:15}},{t:this.instance_125,p:{x:-26.2,y:86.5,startPosition:15}},{t:this.instance_5,p:{x:-17.2,y:87.7,startPosition:15}},{t:this.instance_124,p:{x:-7.9,y:88.8,startPosition:15}},{t:this.instance_4,p:{regX:26,x:1.9,y:88.8,startPosition:15}},{t:this.instance_123,p:{x:10.5,y:88.9,startPosition:15}},{t:this.instance_3,p:{regX:25.8,x:21,y:86.6,startPosition:15}},{t:this.instance_122,p:{x:28.3,y:83.8,startPosition:15}},{t:this.instance_2,p:{x:18.8,y:87.7,startPosition:15}},{t:this.shape_9,p:{x:-10.8,y:17}},{t:this.shape_7,p:{x:-9,y:-44.8}},{t:this.shape_25},{t:this.shape_6,p:{x:-10.8,y:17}},{t:this.shape_24},{t:this.instance_1,p:{x:44.4,y:-7.6}}]},2).to({state:[{t:this.instance_121,p:{x:60.2,y:20}},{t:this.instance_150},{t:this.instance_108,p:{regX:23.5,x:-21.9,y:22.7,startPosition:1,regY:23.7}},{t:this.instance_149},{t:this.instance_107,p:{regX:25.8,x:-20.7,y:35.9,startPosition:1,regY:25.1}},{t:this.instance_106,p:{x:-29.1,y:24.1,startPosition:1,regX:26,regY:25.1}},{t:this.instance_148,p:{x:-37,y:25.5,startPosition:1,regX:26,regY:25.1}},{t:this.instance_105,p:{x:-43.2,y:26.1,startPosition:1,regX:26}},{t:this.instance_104,p:{x:-49.5,y:27.7,startPosition:1,regX:25.8}},{t:this.instance_103,p:{x:-54.2,y:27.8,startPosition:1,regX:25.8,regY:25.1}},{t:this.instance_102,p:{x:-54.2,y:35.1,startPosition:1,regX:25.8,regY:25.1}},{t:this.instance_101,p:{regX:26,x:-13.6,y:29.1,startPosition:1,regY:25.1}},{t:this.instance_147,p:{regX:26,regY:25.1,x:-21.2,y:31.1,startPosition:1}},{t:this.instance_100,p:{regX:26,x:-28.2,y:30.7,startPosition:1,regY:25.1}},{t:this.instance_99,p:{x:-36.1,y:33.2,startPosition:1,regX:25.8}},{t:this.instance_98,p:{x:-43.9,y:34,startPosition:1,regX:26}},{t:this.instance_97,p:{x:-48.5,y:35.3,startPosition:1,regX:26}},{t:this.instance_96,p:{x:-18.8,y:29.1,startPosition:1,regX:26,regY:25.1}},{t:this.instance_95,p:{x:1.1,y:30.8,startPosition:1,regX:26,regY:25.1}},{t:this.instance_94,p:{x:-13.3,y:35.9,startPosition:1,regX:26}},{t:this.instance_93,p:{x:-4.9,y:37.2,startPosition:1,regX:25.8}},{t:this.instance_92,p:{x:2.4,y:38.8,startPosition:1,regX:26}},{t:this.instance_146,p:{regX:26,x:-31.8,y:20.8,startPosition:1,regY:25.1}},{t:this.instance_91,p:{x:-17.2,y:29.1,startPosition:1,regX:26}},{t:this.instance_145,p:{regX:26,regY:25.1,x:-13.1,y:27.3,startPosition:1}},{t:this.instance_90,p:{x:-26,y:28.3,startPosition:1,regX:26}},{t:this.instance_89,p:{x:-32.2,y:35.1,startPosition:1,regX:25.8}},{t:this.instance_88,p:{x:-39.2,y:38.2,startPosition:1,regX:26}},{t:this.instance_87,p:{x:-24.5,y:40.9,startPosition:1,regX:26}},{t:this.instance_86,p:{regX:25.8,x:-14.9,y:39.1,startPosition:1}},{t:this.instance_85,p:{regX:25.8,x:-5.4,y:39.1,startPosition:1}},{t:this.instance_84,p:{x:4.8,y:40.2,startPosition:1,regX:26}},{t:this.instance_83,p:{regX:26,x:14.3,y:40.2,startPosition:1}},{t:this.instance_82,p:{x:22.1,y:48.2,startPosition:1,regX:26}},{t:this.instance_81,p:{x:14,y:50.2,startPosition:1,regX:26}},{t:this.instance_80,p:{x:5.6,y:48.2,startPosition:1,regX:26}},{t:this.instance_144,p:{regX:26,x:-3.9,y:47,startPosition:1}},{t:this.instance_79,p:{x:-13,y:48.2,startPosition:1,regX:26}},{t:this.instance_78,p:{x:-21,y:47,startPosition:1,regX:26}},{t:this.instance_77,p:{regX:26,x:-30.7,y:44.3,startPosition:1}},{t:this.instance_76,p:{regX:26,x:-47,y:43.7,startPosition:1}},{t:this.instance_75,p:{regX:26,x:-54.9,y:44.3,startPosition:1}},{t:this.instance_143,p:{x:-53.8,y:53,startPosition:1,regX:25.8}},{t:this.instance_74,p:{x:-48,y:48.2,startPosition:1,regX:26}},{t:this.instance_73,p:{x:-39.1,y:48.2,startPosition:1,regX:26}},{t:this.instance_142,p:{x:-47,y:57.4,startPosition:1}},{t:this.instance_72,p:{regX:25.8,x:-40.1,y:57.3,startPosition:1}},{t:this.instance_71,p:{x:-33.3,y:53,startPosition:1,regX:26}},{t:this.instance_70,p:{x:-25.9,y:54.8,startPosition:1,regX:26}},{t:this.instance_69,p:{x:-17.1,y:55.3,startPosition:1}},{t:this.instance_68,p:{x:-8.6,y:55.3,startPosition:1,regX:26}},{t:this.instance_67,p:{x:0.2,y:56.4,startPosition:1,regX:26}},{t:this.instance_66,p:{regX:26,x:9.7,y:57.3,startPosition:1}},{t:this.instance_141,p:{x:18.6,y:56.4,startPosition:1}},{t:this.instance_65,p:{x:27.6,y:57.4,startPosition:1,regX:26}},{t:this.instance_64,p:{x:30.1,y:58,startPosition:1,regX:26}},{t:this.instance_140,p:{x:29.6,y:67.4,startPosition:1,regX:25.8}},{t:this.instance_139,p:{regX:26,x:21.4,y:64.2,startPosition:1}},{t:this.instance_63,p:{x:14,y:64.1,startPosition:1,regX:26}},{t:this.instance_62,p:{x:4.7,y:64.8,startPosition:1,regX:26}},{t:this.instance_61,p:{x:-4.8,y:64.8,startPosition:1,regX:26}},{t:this.instance_60,p:{x:-13.7,y:64.1,startPosition:1,regX:25.8}},{t:this.instance_138,p:{x:-24,y:63,startPosition:1,regX:26}},{t:this.instance_59,p:{x:-33.1,y:63,startPosition:1}},{t:this.instance_58,p:{x:-43.3,y:62.9,startPosition:1}},{t:this.instance_137,p:{regX:25.8,x:-53.6,y:61.8,startPosition:1}},{t:this.instance_57,p:{x:-52.4,y:23.2,startPosition:1}},{t:this.instance_56,p:{x:-45.6,y:33.3,startPosition:1,regX:26}},{t:this.instance_55,p:{x:-48.4,y:26.1,startPosition:1,regX:26}},{t:this.instance_136,p:{regX:26,x:-42,y:8.8,startPosition:1}},{t:this.instance_54,p:{x:-45.8,y:16.3,startPosition:1}},{t:this.instance_135,p:{x:-12.2,y:33.3,startPosition:1,regX:26}},{t:this.instance_53,p:{x:-37.6,y:16.8,startPosition:1,regX:26}},{t:this.instance_134,p:{regX:26,x:-2.3,y:28.2,startPosition:1}},{t:this.instance_52,p:{regX:25.8,x:-49.4,y:-19.6,startPosition:1}},{t:this.instance_51,p:{x:-51.1,y:41,startPosition:1}},{t:this.instance_50,p:{regX:25.8,x:-40.8,y:41.7,startPosition:1}},{t:this.instance_49,p:{x:-33.1,y:41.8,startPosition:1,regX:26}},{t:this.instance_48,p:{x:-24.6,y:41.7,startPosition:1,regX:26}},{t:this.instance_133,p:{regX:26,x:-32,y:14,startPosition:1}},{t:this.instance_47,p:{regX:26,x:-54.9,y:50.3,startPosition:1}},{t:this.instance_46,p:{x:-50.8,y:-6.7,startPosition:1}},{t:this.instance_132,p:{x:-52.8,y:41,startPosition:1,regX:26}},{t:this.instance_131,p:{regX:26,x:-41.9,y:41.7,startPosition:1}},{t:this.instance_45,p:{x:-50,y:11.3,startPosition:1,regX:26}},{t:this.instance_44,p:{regX:26,x:-34,y:42.3,startPosition:1}},{t:this.instance_43,p:{regX:26,x:-55,y:18.2,startPosition:1}},{t:this.instance_42,p:{x:-38.7,y:26.2,startPosition:1,regX:26}},{t:this.instance_41,p:{regX:26,x:-45.7,y:51.9,startPosition:1}},{t:this.instance_40,p:{regX:26,x:-37.4,y:51.9,startPosition:1}},{t:this.instance_39,p:{x:-29.6,y:50.9,startPosition:1,regX:26}},{t:this.instance_38,p:{x:-21.4,y:51.2,startPosition:1,regX:26}},{t:this.instance_37,p:{x:-42.1,y:-3,startPosition:1,regX:26}},{t:this.instance_36,p:{x:-2.6,y:51.9,startPosition:1,regX:26}},{t:this.instance_130,p:{x:7.1,y:51.9,startPosition:1,regX:25.8}},{t:this.instance_35,p:{x:24.2,y:50.9,startPosition:1}},{t:this.instance_34,p:{regX:26,x:32.6,y:58.1,startPosition:1}},{t:this.instance_33,p:{regX:25.8,x:20.6,y:61.2,startPosition:1}},{t:this.instance_32,p:{regX:26,x:10,y:61.2,startPosition:1}},{t:this.instance_31,p:{x:-34.9,y:4.2,startPosition:1,regX:26}},{t:this.instance_30,p:{regX:26,x:-52.3,y:5.4,startPosition:1}},{t:this.instance_29,p:{x:-19.4,y:60.4,startPosition:1}},{t:this.instance_129,p:{x:-28.3,y:61.2,startPosition:1,regX:26}},{t:this.instance_28,p:{x:-38.9,y:61.3,startPosition:1}},{t:this.instance_27,p:{x:-46.9,y:62.3,startPosition:1}},{t:this.instance_26,p:{x:-54.1,y:60.3,startPosition:1,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-53.9,y:70.1,startPosition:1}},{t:this.instance_24,p:{x:-45.8,y:70.8,startPosition:1,regX:26}},{t:this.instance_128,p:{x:-37.4,y:70.1,startPosition:1}},{t:this.instance_23,p:{x:-29.9,y:70.8,startPosition:1}},{t:this.instance_22,p:{x:-20.9,y:71.3,startPosition:1}},{t:this.instance_21,p:{regX:26,x:-10.8,y:70.2,startPosition:1}},{t:this.instance_20,p:{regX:26,x:-3.4,y:70.1,startPosition:1}},{t:this.instance_19,p:{regX:26,x:4.6,y:70.8,startPosition:1}},{t:this.instance_18,p:{x:14.4,y:71.4,startPosition:1}},{t:this.instance_127,p:{x:22.2,y:72.4,startPosition:1}},{t:this.instance_17,p:{x:32.3,y:68.4,startPosition:1}},{t:this.instance_16,p:{x:30,y:76.5,startPosition:1}},{t:this.instance_15,p:{x:16.4,y:77.6,startPosition:1}},{t:this.instance_14,p:{regX:25.8,x:7.2,y:76.5,startPosition:1}},{t:this.instance_13,p:{x:-52.6,y:75.1,startPosition:1}},{t:this.instance_12,p:{x:-43.8,y:76.5,startPosition:1}},{t:this.instance_11,p:{regX:25.8,x:-36.7,y:77.7,startPosition:1}},{t:this.instance_10,p:{regX:25.8,x:-27.4,y:77.7,startPosition:1}},{t:this.instance_9,p:{x:-16.4,y:78.5,startPosition:1}},{t:this.instance_8,p:{x:-8.3,y:78.5,startPosition:1}},{t:this.instance_7,p:{x:-2,y:78.6,startPosition:1}},{t:this.instance_126,p:{x:-46.7,y:80.6,startPosition:1}},{t:this.instance_6,p:{x:-37.5,y:82.4,startPosition:1}},{t:this.instance_125,p:{x:-30.4,y:83.9,startPosition:1}},{t:this.instance_5,p:{x:-21.4,y:85.1,startPosition:1}},{t:this.instance_124,p:{x:-12.1,y:86.2,startPosition:1}},{t:this.instance_4,p:{regX:26,x:-2.3,y:86.2,startPosition:1}},{t:this.instance_123,p:{x:6.3,y:86.3,startPosition:1}},{t:this.instance_3,p:{regX:25.8,x:16.8,y:84,startPosition:1}},{t:this.instance_122,p:{x:24.1,y:81.2,startPosition:1}},{t:this.instance_2,p:{x:14.6,y:85.1,startPosition:1}},{t:this.shape_9,p:{x:-14.9,y:14.2}},{t:this.shape_7,p:{x:-13.1,y:-47.6}},{t:this.shape_27},{t:this.shape_6,p:{x:-14.9,y:14.2}},{t:this.shape_26},{t:this.instance_1,p:{x:40.2,y:-10.2}}]},2).to({state:[{t:this.instance_121,p:{x:69.3,y:25.6}},{t:this.instance_146,p:{regX:23.5,x:-4.9,y:28.3,startPosition:3,regY:23.7}},{t:this.instance_112,p:{x:-19.6,y:27.1,startPosition:3,regX:23.5,regY:23.7}},{t:this.instance_111,p:{regX:23.5,regY:23.7,x:2.5,y:28.4,startPosition:3}},{t:this.instance_110,p:{regX:26,regY:25.1,x:9.2,y:28.7,startPosition:3}},{t:this.instance_109,p:{x:-27.6,y:25.8,startPosition:3,regX:26}},{t:this.instance_145,p:{regX:26,regY:25.1,x:-27.8,y:31.1,startPosition:3}},{t:this.instance_108,p:{regX:26,x:-34.1,y:31.7,startPosition:3,regY:25.1}},{t:this.instance_107,p:{regX:25.8,x:-40.3,y:33.3,startPosition:3,regY:25.1}},{t:this.instance_106,p:{x:-43.9,y:27.9,startPosition:3,regX:25.8,regY:25.1}},{t:this.instance_105,p:{x:-45.1,y:40.7,startPosition:3,regX:25.8}},{t:this.instance_104,p:{x:-4.4,y:34.7,startPosition:3,regX:26}},{t:this.instance_144,p:{regX:26,x:-12,y:36.7,startPosition:3}},{t:this.instance_103,p:{x:-19.1,y:36.3,startPosition:3,regX:26,regY:25.1}},{t:this.instance_102,p:{x:-26.9,y:38.8,startPosition:3,regX:25.8,regY:25.1}},{t:this.instance_101,p:{regX:26,x:-34.8,y:39.6,startPosition:3,regY:25.1}},{t:this.instance_100,p:{regX:26,x:-39.3,y:40.9,startPosition:3,regY:25.1}},{t:this.instance_99,p:{x:2.9,y:35.4,startPosition:3,regX:26}},{t:this.instance_98,p:{x:10.2,y:36.4,startPosition:3,regX:26}},{t:this.instance_97,p:{x:17.8,y:37.4,startPosition:3,regX:26}},{t:this.instance_96,p:{x:25.7,y:38.8,startPosition:3,regX:25.8,regY:25.1}},{t:this.instance_95,p:{x:30.5,y:39.7,startPosition:3,regX:26,regY:25.1}},{t:this.instance_94,p:{x:37.9,y:48.4,startPosition:3,regX:26}},{t:this.instance_143,p:{x:30.7,y:44.6,startPosition:3,regX:26}},{t:this.instance_93,p:{x:-4.2,y:41.5,startPosition:3,regX:26}},{t:this.instance_92,p:{x:4.2,y:42.8,startPosition:3,regX:25.8}},{t:this.instance_91,p:{x:11.6,y:44.4,startPosition:3,regX:26}},{t:this.instance_90,p:{x:20.2,y:42.8,startPosition:3,regX:26}},{t:this.instance_89,p:{x:-3,y:46.9,startPosition:3,regX:26}},{t:this.instance_142,p:{x:4.5,y:31.9,startPosition:3}},{t:this.instance_88,p:{x:25.8,y:36.3,startPosition:3,regX:25.8}},{t:this.instance_87,p:{x:-13.2,y:37.5,startPosition:3,regX:26}},{t:this.instance_86,p:{regX:25.8,x:-23,y:40.7,startPosition:3}},{t:this.instance_85,p:{regX:26,x:-30.1,y:43.8,startPosition:3}},{t:this.instance_84,p:{x:-15.4,y:46.5,startPosition:3,regX:26}},{t:this.instance_83,p:{regX:25.8,x:-5.8,y:44.7,startPosition:3}},{t:this.instance_82,p:{x:3.7,y:44.7,startPosition:3,regX:25.8}},{t:this.instance_81,p:{x:13.9,y:45.8,startPosition:3,regX:26}},{t:this.instance_80,p:{x:23.4,y:45.8,startPosition:3,regX:26}},{t:this.instance_79,p:{x:31.2,y:53.8,startPosition:3,regX:26}},{t:this.instance_78,p:{x:39.1,y:55.8,startPosition:3,regX:25.8}},{t:this.instance_77,p:{regX:26,x:23.2,y:55.8,startPosition:3}},{t:this.instance_76,p:{regX:26,x:14.7,y:53.8,startPosition:3}},{t:this.instance_141,p:{x:5.3,y:52.6,startPosition:3}},{t:this.instance_75,p:{regX:26,x:-3.9,y:53.8,startPosition:3}},{t:this.instance_74,p:{x:-11.9,y:52.6,startPosition:3,regX:26}},{t:this.instance_73,p:{x:-21.5,y:49.9,startPosition:3,regX:26}},{t:this.instance_72,p:{regX:26,x:-37.9,y:49.3,startPosition:3}},{t:this.instance_71,p:{x:-45.7,y:49.9,startPosition:3,regX:26}},{t:this.instance_140,p:{x:-44.6,y:58.6,startPosition:3,regX:25.8}},{t:this.instance_70,p:{x:-38.8,y:53.8,startPosition:3,regX:26}},{t:this.instance_69,p:{x:-29.9,y:53.8,startPosition:3}},{t:this.instance_139,p:{regX:26,x:-37.9,y:63,startPosition:3}},{t:this.instance_68,p:{x:-31,y:62.9,startPosition:3,regX:25.8}},{t:this.instance_67,p:{x:-24.1,y:58.6,startPosition:3,regX:26}},{t:this.instance_66,p:{regX:26,x:-16.7,y:60.4,startPosition:3}},{t:this.instance_65,p:{x:-8,y:60.9,startPosition:3,regX:26}},{t:this.instance_64,p:{x:0.6,y:60.9,startPosition:3,regX:26}},{t:this.instance_63,p:{x:9.3,y:62,startPosition:3,regX:26}},{t:this.instance_62,p:{x:18.8,y:62.9,startPosition:3,regX:26}},{t:this.instance_138,p:{x:27.8,y:62,startPosition:3,regX:26}},{t:this.instance_61,p:{x:36.7,y:63,startPosition:3,regX:26}},{t:this.instance_60,p:{x:39.3,y:63.6,startPosition:3,regX:26}},{t:this.instance_137,p:{regX:25.8,x:38.8,y:73,startPosition:3}},{t:this.instance_136,p:{regX:26,x:30.6,y:69.8,startPosition:3}},{t:this.instance_59,p:{x:23.2,y:69.7,startPosition:3}},{t:this.instance_58,p:{x:13.8,y:70.4,startPosition:3}},{t:this.instance_57,p:{x:4.4,y:70.4,startPosition:3}},{t:this.instance_56,p:{x:-4.5,y:69.7,startPosition:3,regX:25.8}},{t:this.instance_135,p:{x:-14.8,y:68.6,startPosition:3,regX:26}},{t:this.instance_55,p:{x:-24,y:68.6,startPosition:3,regX:26}},{t:this.instance_54,p:{x:-34.2,y:68.5,startPosition:3}},{t:this.instance_134,p:{regX:25.8,x:-44.5,y:67.4,startPosition:3}},{t:this.instance_53,p:{x:-39.1,y:20.8,startPosition:3,regX:26}},{t:this.instance_52,p:{regX:26,x:-34.9,y:28,startPosition:3}},{t:this.instance_51,p:{x:-17.3,y:52.8,startPosition:3}},{t:this.instance_133,p:{regX:26,x:-11.7,y:28,startPosition:3}},{t:this.instance_50,p:{regX:26,x:-22.6,y:18.7,startPosition:3}},{t:this.instance_132,p:{x:-45.1,y:19,startPosition:3,regX:26}},{t:this.instance_49,p:{x:-28.4,y:18.9,startPosition:3,regX:26}},{t:this.instance_48,p:{x:-41.9,y:46.6,startPosition:3,regX:26}},{t:this.instance_47,p:{regX:25.8,x:-31.6,y:47.3,startPosition:3}},{t:this.instance_46,p:{x:-24,y:47.4,startPosition:3}},{t:this.instance_45,p:{x:12.2,y:49.3,startPosition:3,regX:25.8}},{t:this.instance_44,p:{regX:26,x:19,y:47.8,startPosition:3}},{t:this.instance_43,p:{regX:25.8,x:29.8,y:46.8,startPosition:3}},{t:this.instance_42,p:{x:41.6,y:47.9,startPosition:3,regX:26}},{t:this.instance_41,p:{regX:26,x:-45.7,y:55.9,startPosition:3}},{t:this.instance_131,p:{regX:26,x:-45.7,y:33.7,startPosition:3}},{t:this.instance_130,p:{x:-32.7,y:47.3,startPosition:3,regX:26}},{t:this.instance_40,p:{regX:26,x:-36.5,y:57.5,startPosition:3}},{t:this.instance_39,p:{x:-28.3,y:57.5,startPosition:3,regX:26}},{t:this.instance_38,p:{x:-34.4,y:14.8,startPosition:3,regX:26}},{t:this.instance_37,p:{x:6.5,y:57.5,startPosition:3,regX:26}},{t:this.instance_129,p:{x:16.2,y:57.5,startPosition:3,regX:25.8}},{t:this.instance_36,p:{x:24.9,y:56.8,startPosition:3,regX:25.8}},{t:this.instance_35,p:{x:33.3,y:56.5,startPosition:3}},{t:this.instance_34,p:{regX:26,x:41.6,y:54.9,startPosition:3}},{t:this.instance_33,p:{regX:26,x:41.7,y:63.7,startPosition:3}},{t:this.instance_32,p:{regX:25.8,x:29.7,y:66.8,startPosition:3}},{t:this.instance_31,p:{x:19.1,y:66.8,startPosition:3,regX:26}},{t:this.instance_30,p:{regX:26,x:9.1,y:65.9,startPosition:3}},{t:this.instance_29,p:{x:-8.7,y:79.7,startPosition:3}},{t:this.instance_28,p:{x:-29.8,y:66.9,startPosition:3}},{t:this.instance_27,p:{x:-37.7,y:67.9,startPosition:3}},{t:this.instance_26,p:{x:-44.9,y:65.9,startPosition:3,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-44.7,y:75.7,startPosition:3}},{t:this.instance_24,p:{x:-36.6,y:76.4,startPosition:3,regX:26}},{t:this.instance_128,p:{x:-28.3,y:75.7,startPosition:3}},{t:this.instance_23,p:{x:-20.7,y:76.4,startPosition:3}},{t:this.instance_22,p:{x:-12.9,y:74.7,startPosition:3}},{t:this.instance_21,p:{regX:26,x:-1.6,y:75.8,startPosition:3}},{t:this.instance_20,p:{regX:26,x:5.8,y:75.7,startPosition:3}},{t:this.instance_19,p:{regX:26,x:13.7,y:76.4,startPosition:3}},{t:this.instance_18,p:{x:23.6,y:77,startPosition:3}},{t:this.instance_127,p:{x:31.4,y:78,startPosition:3}},{t:this.instance_17,p:{x:41.5,y:74,startPosition:3}},{t:this.instance_16,p:{x:39.2,y:82.1,startPosition:3}},{t:this.instance_15,p:{x:25.6,y:83.2,startPosition:3}},{t:this.instance_14,p:{regX:25.8,x:16.4,y:82.1,startPosition:3}},{t:this.instance_13,p:{x:-43.5,y:80.7,startPosition:3}},{t:this.instance_12,p:{x:-34.6,y:82.1,startPosition:3}},{t:this.instance_11,p:{regX:25.8,x:-27.6,y:83.3,startPosition:3}},{t:this.instance_10,p:{regX:25.8,x:-18.3,y:83.3,startPosition:3}},{t:this.instance_9,p:{x:-7.2,y:84.1,startPosition:3}},{t:this.instance_8,p:{x:0.4,y:82.1,startPosition:3}},{t:this.instance_7,p:{x:7.2,y:84.2,startPosition:3}},{t:this.instance_126,p:{x:-37.6,y:86.2,startPosition:3}},{t:this.instance_6,p:{x:-28.4,y:88,startPosition:3}},{t:this.instance_125,p:{x:-21.2,y:89.5,startPosition:3}},{t:this.instance_5,p:{x:-12.3,y:90.7,startPosition:3}},{t:this.instance_124,p:{x:-2.9,y:91.8,startPosition:3}},{t:this.instance_4,p:{regX:26,x:6.9,y:91.8,startPosition:3}},{t:this.instance_123,p:{x:15.4,y:91.9,startPosition:3}},{t:this.instance_3,p:{regX:25.8,x:26,y:89.6,startPosition:3}},{t:this.instance_122,p:{x:33.2,y:86.8,startPosition:3}},{t:this.instance_2,p:{x:23.7,y:90.7,startPosition:3}},{t:this.shape_7,p:{x:-4.2,y:-42.2}},{t:this.shape_9,p:{x:-6,y:19.6}},{t:this.shape_29},{t:this.shape_6,p:{x:-6,y:19.6}},{t:this.shape_28},{t:this.instance_1,p:{x:49.4,y:-4.6}}]},2).to({state:[{t:this.instance_121,p:{x:76.9,y:23.6}},{t:this.instance_147,p:{regX:23.5,regY:23.7,x:2.7,y:26.3,startPosition:5}},{t:this.instance_113,p:{regX:23.5,regY:23.7,x:-5.2,startPosition:5,y:26.3}},{t:this.instance_112,p:{x:10,y:26.4,startPosition:5,regX:23.5,regY:23.7}},{t:this.instance_111,p:{regX:26,regY:25.1,x:16.7,y:26.7,startPosition:5}},{t:this.instance_110,p:{regX:25.8,regY:25.1,x:24.3,y:27.7,startPosition:5}},{t:this.instance_109,p:{x:30.8,y:27.9,startPosition:5,regX:26}},{t:this.instance_146,p:{regX:25.8,x:37.5,y:28.6,startPosition:5,regY:25.1}},{t:this.instance_108,p:{regX:25.8,x:48.9,y:21.7,startPosition:5,regY:25.1}},{t:this.instance_107,p:{regX:26,x:49.4,y:30.9,startPosition:5,regY:25.1}},{t:this.instance_106,p:{x:-12.4,y:27.7,startPosition:5,regX:26,regY:25.1}},{t:this.instance_145,p:{regX:26,regY:25.1,x:-20.3,y:29.1,startPosition:5}},{t:this.instance_105,p:{x:-26.5,y:29.7,startPosition:5,regX:26}},{t:this.instance_104,p:{x:-32.8,y:31.3,startPosition:5,regX:25.8}},{t:this.instance_103,p:{x:-37.5,y:31.4,startPosition:5,regX:25.8,regY:25.1}},{t:this.instance_102,p:{x:-37.5,y:38.7,startPosition:5,regX:25.8,regY:25.1}},{t:this.instance_101,p:{regX:26,x:3.1,y:32.7,startPosition:5,regY:25.1}},{t:this.instance_144,p:{regX:26,x:-4.5,y:34.7,startPosition:5}},{t:this.instance_100,p:{regX:26,x:-11.5,y:34.3,startPosition:5,regY:25.1}},{t:this.instance_99,p:{x:-19.4,y:36.8,startPosition:5,regX:25.8}},{t:this.instance_98,p:{x:-27.2,y:37.6,startPosition:5,regX:26}},{t:this.instance_97,p:{x:-31.8,y:38.9,startPosition:5,regX:26}},{t:this.instance_96,p:{x:10.5,y:33.4,startPosition:5,regX:26,regY:25.1}},{t:this.instance_95,p:{x:17.8,y:34.4,startPosition:5,regX:26,regY:25.1}},{t:this.instance_94,p:{x:25.4,y:35.4,startPosition:5,regX:26}},{t:this.instance_93,p:{x:33.2,y:36.8,startPosition:5,regX:25.8}},{t:this.instance_92,p:{x:38.1,y:37.7,startPosition:5,regX:26}},{t:this.instance_91,p:{x:48.9,y:37.6,startPosition:5,regX:26}},{t:this.instance_90,p:{x:45.4,y:46.4,startPosition:5,regX:26}},{t:this.instance_143,p:{x:38.2,y:42.6,startPosition:5,regX:26}},{t:this.instance_89,p:{x:3.4,y:39.5,startPosition:5,regX:26}},{t:this.instance_88,p:{x:11.8,y:40.8,startPosition:5,regX:25.8}},{t:this.instance_87,p:{x:19.1,y:42.4,startPosition:5,regX:26}},{t:this.instance_86,p:{regX:26,x:27.8,y:40.8,startPosition:5}},{t:this.instance_142,p:{x:3.5,y:31.3,startPosition:5}},{t:this.instance_85,p:{regX:26,x:12.8,y:33.5,startPosition:5}},{t:this.instance_141,p:{x:22.3,y:33.4,startPosition:5}},{t:this.instance_84,p:{x:33.4,y:34.3,startPosition:5,regX:25.8}},{t:this.instance_83,p:{regX:26,x:-5.6,y:35.5,startPosition:5}},{t:this.instance_82,p:{x:-15.5,y:38.7,startPosition:5,regX:25.8}},{t:this.instance_81,p:{x:-22.5,y:41.8,startPosition:5,regX:26}},{t:this.instance_80,p:{x:-7.8,y:44.5,startPosition:5,regX:26}},{t:this.instance_79,p:{x:1.8,y:42.7,startPosition:5,regX:25.8}},{t:this.instance_78,p:{x:11.3,y:42.7,startPosition:5,regX:25.8}},{t:this.instance_77,p:{regX:26,x:21.5,y:43.8,startPosition:5}},{t:this.instance_76,p:{regX:26,x:31,y:43.8,startPosition:5}},{t:this.instance_75,p:{regX:26,x:38.8,y:51.8,startPosition:5}},{t:this.instance_74,p:{x:46.7,y:53.8,startPosition:5,regX:25.8}},{t:this.instance_73,p:{x:30.7,y:53.8,startPosition:5,regX:26}},{t:this.instance_72,p:{regX:26,x:22.3,y:51.8,startPosition:5}},{t:this.instance_140,p:{x:12.8,y:50.6,startPosition:5,regX:26}},{t:this.instance_71,p:{x:3.7,y:51.8,startPosition:5,regX:26}},{t:this.instance_70,p:{x:-4.3,y:50.6,startPosition:5,regX:26}},{t:this.instance_69,p:{x:-14,y:47.9,startPosition:5}},{t:this.instance_68,p:{x:-30.3,y:47.3,startPosition:5,regX:26}},{t:this.instance_67,p:{x:-38.2,y:47.9,startPosition:5,regX:26}},{t:this.instance_139,p:{regX:25.8,x:-37.1,y:56.6,startPosition:5}},{t:this.instance_66,p:{regX:26,x:-31.3,y:51.8,startPosition:5}},{t:this.instance_65,p:{x:-22.4,y:51.8,startPosition:5,regX:26}},{t:this.instance_138,p:{x:-30.3,y:61,startPosition:5,regX:26}},{t:this.instance_64,p:{x:-23.4,y:60.9,startPosition:5,regX:25.8}},{t:this.instance_63,p:{x:-16.6,y:56.6,startPosition:5,regX:26}},{t:this.instance_62,p:{x:-9.2,y:58.4,startPosition:5,regX:26}},{t:this.instance_61,p:{x:-0.4,y:58.9,startPosition:5,regX:26}},{t:this.instance_60,p:{x:8.1,y:58.9,startPosition:5,regX:26}},{t:this.instance_59,p:{x:16.9,y:60,startPosition:5}},{t:this.instance_58,p:{x:26.4,y:60.9,startPosition:5}},{t:this.instance_137,p:{regX:26,x:35.3,y:60,startPosition:5}},{t:this.instance_57,p:{x:44.3,y:61,startPosition:5}},{t:this.instance_56,p:{x:46.8,y:61.6,startPosition:5,regX:26}},{t:this.instance_136,p:{regX:25.8,x:46.3,y:71,startPosition:5}},{t:this.instance_135,p:{x:38.1,y:67.8,startPosition:5,regX:26}},{t:this.instance_55,p:{x:30.7,y:67.7,startPosition:5,regX:26}},{t:this.instance_54,p:{x:21.4,y:68.4,startPosition:5}},{t:this.instance_53,p:{x:11.9,y:68.4,startPosition:5,regX:26}},{t:this.instance_52,p:{regX:25.8,x:3,y:67.7,startPosition:5}},{t:this.instance_134,p:{regX:26,x:-7.3,y:66.6,startPosition:5}},{t:this.instance_51,p:{x:-16.4,y:66.6,startPosition:5}},{t:this.instance_50,p:{regX:26,x:-26.6,y:66.5,startPosition:5}},{t:this.instance_133,p:{regX:25.8,x:-36.9,y:65.4,startPosition:5}},{t:this.instance_49,p:{x:-35.2,y:30.8,startPosition:5,regX:26}},{t:this.instance_48,p:{x:-31.3,y:25.8,startPosition:5,regX:26}},{t:this.instance_47,p:{regX:26,x:-37.5,y:21.7,startPosition:5}},{t:this.instance_46,p:{x:-4.7,y:37,startPosition:5}},{t:this.instance_132,p:{x:37.9,y:25.7,startPosition:5,regX:26}},{t:this.instance_45,p:{x:38.9,y:29.7,startPosition:5,regX:26}},{t:this.instance_44,p:{regX:25.8,x:48.4,y:29.6,startPosition:5}},{t:this.instance_43,p:{regX:26,x:-34.4,y:44.6,startPosition:5}},{t:this.instance_42,p:{x:37.2,y:19.6,startPosition:5,regX:25.8}},{t:this.instance_131,p:{regX:26,x:44.4,y:21.7,startPosition:5}},{t:this.instance_41,p:{regX:25.8,x:19.7,y:47.3,startPosition:5}},{t:this.instance_40,p:{regX:25.8,x:43.9,y:38.5,startPosition:5}},{t:this.instance_39,p:{x:49.1,y:45.9,startPosition:5,regX:26}},{t:this.instance_38,p:{x:-38.2,y:53.9,startPosition:5,regX:26}},{t:this.instance_37,p:{x:29.6,y:30.7,startPosition:5,regX:26}},{t:this.instance_130,p:{x:48.7,y:13.4,startPosition:5,regX:26}},{t:this.instance_36,p:{x:41.7,y:11.6,startPosition:5,regX:26}},{t:this.instance_35,p:{x:-29,y:55.5,startPosition:5}},{t:this.instance_34,p:{regX:26,x:14.1,y:55.5,startPosition:5}},{t:this.instance_129,p:{x:23.8,y:55.5,startPosition:5,regX:25.8}},{t:this.instance_33,p:{regX:26,x:40.9,y:54.5,startPosition:5}},{t:this.instance_32,p:{regX:26,x:49.1,y:52.9,startPosition:5}},{t:this.instance_31,p:{x:49.3,y:61.7,startPosition:5,regX:26}},{t:this.instance_30,p:{regX:25.8,x:37.3,y:64.8,startPosition:5}},{t:this.instance_29,p:{x:16.6,y:63.9,startPosition:5}},{t:this.instance_28,p:{x:-22.2,y:64.9,startPosition:5}},{t:this.instance_27,p:{x:-30.2,y:65.9,startPosition:5}},{t:this.instance_26,p:{x:-37.4,y:63.9,startPosition:5,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-37.2,y:73.7,startPosition:5}},{t:this.instance_24,p:{x:-29.1,y:74.4,startPosition:5,regX:26}},{t:this.instance_128,p:{x:-20.7,y:73.7,startPosition:5}},{t:this.instance_23,p:{x:-13.2,y:74.4,startPosition:5}},{t:this.instance_22,p:{x:-4.2,y:74.9,startPosition:5}},{t:this.instance_21,p:{regX:26,x:5.9,y:73.8,startPosition:5}},{t:this.instance_20,p:{regX:26,x:13.3,y:73.7,startPosition:5}},{t:this.instance_19,p:{regX:26,x:21.3,y:74.4,startPosition:5}},{t:this.instance_18,p:{x:31.1,y:75,startPosition:5}},{t:this.instance_127,p:{x:38.9,y:76,startPosition:5}},{t:this.instance_17,p:{x:49,y:72,startPosition:5}},{t:this.instance_16,p:{x:46.7,y:80.1,startPosition:5}},{t:this.instance_15,p:{x:33.1,y:81.2,startPosition:5}},{t:this.instance_14,p:{regX:25.8,x:23.9,y:80.1,startPosition:5}},{t:this.instance_13,p:{x:-35.9,y:78.7,startPosition:5}},{t:this.instance_12,p:{x:-27.1,y:80.1,startPosition:5}},{t:this.instance_11,p:{regX:25.8,x:-20,y:81.3,startPosition:5}},{t:this.instance_10,p:{regX:25.8,x:-10.7,y:81.3,startPosition:5}},{t:this.instance_9,p:{x:0.3,y:82.1,startPosition:5}},{t:this.instance_8,p:{x:8.4,y:82.1,startPosition:5}},{t:this.instance_7,p:{x:14.7,y:82.2,startPosition:5}},{t:this.instance_126,p:{x:-30,y:84.2,startPosition:5}},{t:this.instance_6,p:{x:-20.8,y:86,startPosition:5}},{t:this.instance_125,p:{x:-13.7,y:87.5,startPosition:5}},{t:this.instance_5,p:{x:-4.7,y:88.7,startPosition:5}},{t:this.instance_124,p:{x:4.6,y:89.8,startPosition:5}},{t:this.instance_4,p:{regX:26,x:14.4,y:89.8,startPosition:5}},{t:this.instance_123,p:{x:23,y:89.9,startPosition:5}},{t:this.instance_3,p:{regX:25.8,x:33.5,y:87.6,startPosition:5}},{t:this.instance_122,p:{x:40.8,y:84.8,startPosition:5}},{t:this.instance_2,p:{x:31.3,y:88.7,startPosition:5}},{t:this.shape_7,p:{x:3.7,y:-44.4}},{t:this.shape_9,p:{x:1.9,y:17.4}},{t:this.shape_31},{t:this.shape_6,p:{x:1.9,y:17.4}},{t:this.shape_30},{t:this.instance_1,p:{x:56.9,y:-6.6}}]},2).to({state:[{t:this.instance_121,p:{x:84.5,y:21.6}},{t:this.instance_147,p:{regX:23.5,regY:23.7,x:10.3,y:24.3,startPosition:7}},{t:this.instance_114,p:{regX:23.5,regY:23.7,x:2.4,y:24.3,startPosition:7}},{t:this.instance_113,p:{regX:23.5,regY:23.7,x:17.6,startPosition:7,y:24.4}},{t:this.instance_112,p:{x:24.3,y:24.7,startPosition:7,regX:26,regY:25.1}},{t:this.instance_111,p:{regX:25.8,regY:25.1,x:31.9,y:25.7,startPosition:7}},{t:this.instance_110,p:{regX:26,regY:25.1,x:38.4,y:25.9,startPosition:7}},{t:this.instance_146,p:{regX:25.8,x:45.1,y:26.6,startPosition:7,regY:25.1}},{t:this.instance_109,p:{x:53.1,y:27.7,startPosition:7,regX:25.8}},{t:this.instance_108,p:{regX:26,x:57,y:28.9,startPosition:7,regY:25.1}},{t:this.instance_107,p:{regX:26,x:-4.8,y:25.7,startPosition:7,regY:25.1}},{t:this.instance_145,p:{regX:26,regY:25.1,x:-12.7,y:27.1,startPosition:7}},{t:this.instance_106,p:{x:-18.9,y:27.7,startPosition:7,regX:26,regY:25.1}},{t:this.instance_105,p:{x:-25.2,y:29.3,startPosition:7,regX:25.8}},{t:this.instance_104,p:{x:-29.9,y:29.4,startPosition:7,regX:25.8}},{t:this.instance_103,p:{x:-29.9,y:36.7,startPosition:7,regX:25.8,regY:25.1}},{t:this.instance_102,p:{x:10.7,y:30.7,startPosition:7,regX:26,regY:25.1}},{t:this.instance_144,p:{regX:26,x:3.1,y:32.7,startPosition:7}},{t:this.instance_101,p:{regX:26,x:-3.9,y:32.3,startPosition:7,regY:25.1}},{t:this.instance_100,p:{regX:25.8,x:-11.8,y:34.8,startPosition:7,regY:25.1}},{t:this.instance_99,p:{x:-19.6,y:35.6,startPosition:7,regX:26}},{t:this.instance_98,p:{x:-24.2,y:36.9,startPosition:7,regX:26}},{t:this.instance_97,p:{x:18.1,y:31.4,startPosition:7,regX:26}},{t:this.instance_96,p:{x:25.4,y:32.4,startPosition:7,regX:26,regY:25.1}},{t:this.instance_95,p:{x:33,y:33.4,startPosition:7,regX:26,regY:25.1}},{t:this.instance_94,p:{x:40.8,y:34.8,startPosition:7,regX:25.8}},{t:this.instance_93,p:{x:45.7,y:35.7,startPosition:7,regX:26}},{t:this.instance_92,p:{x:56.5,y:35.6,startPosition:7,regX:26}},{t:this.instance_91,p:{x:53,y:44.4,startPosition:7,regX:26}},{t:this.instance_143,p:{x:44.1,y:36.7,startPosition:7,regX:26}},{t:this.instance_90,p:{x:11,y:37.5,startPosition:7,regX:26}},{t:this.instance_89,p:{x:19.4,y:38.8,startPosition:7,regX:25.8}},{t:this.instance_88,p:{x:26.7,y:40.4,startPosition:7,regX:26}},{t:this.instance_87,p:{x:35.4,y:38.8,startPosition:7,regX:26}},{t:this.instance_142,p:{x:11.1,y:29.3,startPosition:7}},{t:this.instance_86,p:{regX:26,x:20.4,y:31.5,startPosition:7}},{t:this.instance_141,p:{x:29.9,y:31.4,startPosition:7}},{t:this.instance_85,p:{regX:25.8,x:41,y:32.3,startPosition:7}},{t:this.instance_84,p:{x:2,y:33.5,startPosition:7,regX:26}},{t:this.instance_83,p:{regX:25.8,x:-7.9,y:36.7,startPosition:7}},{t:this.instance_82,p:{x:-14.9,y:39.8,startPosition:7,regX:26}},{t:this.instance_81,p:{x:-0.2,y:42.5,startPosition:7,regX:26}},{t:this.instance_80,p:{x:9.4,y:40.7,startPosition:7,regX:25.8}},{t:this.instance_79,p:{x:18.9,y:40.7,startPosition:7,regX:25.8}},{t:this.instance_78,p:{x:29.1,y:41.8,startPosition:7,regX:26}},{t:this.instance_77,p:{regX:26,x:38.6,y:41.8,startPosition:7}},{t:this.instance_76,p:{regX:26,x:46.4,y:49.8,startPosition:7}},{t:this.instance_75,p:{regX:25.8,x:54.3,y:51.8,startPosition:7}},{t:this.instance_74,p:{x:38.3,y:51.8,startPosition:7,regX:26}},{t:this.instance_73,p:{x:29.9,y:49.8,startPosition:7,regX:26}},{t:this.instance_140,p:{x:20.4,y:48.6,startPosition:7,regX:26}},{t:this.instance_72,p:{regX:26,x:11.3,y:49.8,startPosition:7}},{t:this.instance_71,p:{x:3.3,y:48.6,startPosition:7,regX:26}},{t:this.instance_70,p:{x:-6.4,y:45.9,startPosition:7,regX:26}},{t:this.instance_69,p:{x:-22.7,y:45.3,startPosition:7}},{t:this.instance_68,p:{x:-30.6,y:45.9,startPosition:7,regX:26}},{t:this.instance_139,p:{regX:25.8,x:-29.5,y:54.6,startPosition:7}},{t:this.instance_67,p:{x:-23.7,y:49.8,startPosition:7,regX:26}},{t:this.instance_66,p:{regX:26,x:-14.8,y:49.8,startPosition:7}},{t:this.instance_138,p:{x:-22.7,y:59,startPosition:7,regX:26}},{t:this.instance_65,p:{x:-15.8,y:58.9,startPosition:7,regX:25.8}},{t:this.instance_64,p:{x:-9,y:54.6,startPosition:7,regX:26}},{t:this.instance_63,p:{x:-1.6,y:56.4,startPosition:7,regX:26}},{t:this.instance_62,p:{x:7.2,y:56.9,startPosition:7,regX:26}},{t:this.instance_61,p:{x:15.7,y:56.9,startPosition:7,regX:26}},{t:this.instance_60,p:{x:24.5,y:58,startPosition:7,regX:26}},{t:this.instance_59,p:{x:34,y:58.9,startPosition:7}},{t:this.instance_137,p:{regX:26,x:42.9,y:58,startPosition:7}},{t:this.instance_58,p:{x:51.9,y:59,startPosition:7}},{t:this.instance_57,p:{x:54.4,y:59.6,startPosition:7}},{t:this.instance_136,p:{regX:25.8,x:53.9,y:69,startPosition:7}},{t:this.instance_135,p:{x:45.7,y:65.8,startPosition:7,regX:26}},{t:this.instance_56,p:{x:38.3,y:65.7,startPosition:7,regX:26}},{t:this.instance_55,p:{x:29,y:66.4,startPosition:7,regX:26}},{t:this.instance_54,p:{x:19.5,y:66.4,startPosition:7}},{t:this.instance_53,p:{x:10.6,y:65.7,startPosition:7,regX:25.8}},{t:this.instance_134,p:{regX:26,x:0.3,y:64.6,startPosition:7}},{t:this.instance_52,p:{regX:26,x:-8.8,y:64.6,startPosition:7}},{t:this.instance_51,p:{x:-19,y:64.5,startPosition:7}},{t:this.instance_133,p:{regX:25.8,x:-29.3,y:63.4,startPosition:7}},{t:this.instance_50,p:{regX:26,x:-19.9,y:25.6,startPosition:7}},{t:this.instance_49,p:{x:12.2,y:23.8,startPosition:7,regX:26}},{t:this.instance_48,p:{x:-14.1,y:34.9,startPosition:7,regX:26}},{t:this.instance_47,p:{regX:26,x:25.4,y:21.3,startPosition:7}},{t:this.instance_46,p:{x:20.1,y:28.8,startPosition:7}},{t:this.instance_132,p:{x:29.3,y:36.6,startPosition:7,regX:26}},{t:this.instance_45,p:{x:49.6,y:39.6,startPosition:7,regX:26}},{t:this.instance_44,p:{regX:25.8,x:55.7,y:28.6,startPosition:7}},{t:this.instance_43,p:{regX:26,x:-26.8,y:42.6,startPosition:7}},{t:this.instance_42,p:{x:-16.5,y:43.3,startPosition:7,regX:25.8}},{t:this.instance_41,p:{regX:26,x:-8.8,y:43.4,startPosition:7}},{t:this.instance_40,p:{regX:25.8,x:41.4,y:22.3,startPosition:7}},{t:this.instance_39,p:{x:27.3,y:45.3,startPosition:7,regX:25.8}},{t:this.instance_38,p:{x:52.7,y:24.7,startPosition:7,regX:25.8}},{t:this.instance_37,p:{x:56.7,y:43.9,startPosition:7,regX:26}},{t:this.instance_36,p:{x:-30.6,y:51.9,startPosition:7,regX:26}},{t:this.instance_131,p:{regX:26,x:-28.5,y:42.6,startPosition:7}},{t:this.instance_130,p:{x:-17.6,y:43.3,startPosition:7,regX:26}},{t:this.instance_35,p:{x:-16.1,y:50.8,startPosition:7}},{t:this.instance_34,p:{regX:26,x:-26.8,y:21.7,startPosition:7}},{t:this.instance_33,p:{regX:26,x:-4.3,y:51.7,startPosition:7}},{t:this.instance_129,p:{x:31.4,y:53.5,startPosition:7,regX:25.8}},{t:this.instance_32,p:{regX:25.8,x:49.1,y:43.9,startPosition:7}},{t:this.instance_31,p:{x:56.7,y:50.9,startPosition:7,regX:26}},{t:this.instance_30,p:{regX:26,x:56.9,y:59.7,startPosition:7}},{t:this.instance_29,p:{x:24.2,y:61.9,startPosition:7}},{t:this.instance_28,p:{x:15.6,y:62,startPosition:7}},{t:this.instance_27,p:{x:-22.6,y:63.9,startPosition:7}},{t:this.instance_26,p:{x:-29.8,y:61.9,startPosition:7,regX:25.8}},{t:this.instance_25,p:{regX:25.8,x:-29.6,y:71.7,startPosition:7}},{t:this.instance_24,p:{x:-21.5,y:72.4,startPosition:7,regX:26}},{t:this.instance_128,p:{x:-13.1,y:71.7,startPosition:7}},{t:this.instance_23,p:{x:-5.6,y:72.4,startPosition:7}},{t:this.instance_22,p:{x:3.4,y:72.9,startPosition:7}},{t:this.instance_21,p:{regX:26,x:13.5,y:71.8,startPosition:7}},{t:this.instance_20,p:{regX:26,x:20.9,y:71.7,startPosition:7}},{t:this.instance_19,p:{regX:26,x:28.9,y:72.4,startPosition:7}},{t:this.instance_18,p:{x:38.7,y:73,startPosition:7}},{t:this.instance_127,p:{x:46.5,y:74,startPosition:7}},{t:this.instance_17,p:{x:56.6,y:70,startPosition:7}},{t:this.instance_16,p:{x:54.3,y:78.1,startPosition:7}},{t:this.instance_15,p:{x:40.7,y:79.2,startPosition:7}},{t:this.instance_14,p:{regX:25.8,x:31.5,y:78.1,startPosition:7}},{t:this.instance_13,p:{x:-28.3,y:76.7,startPosition:7}},{t:this.instance_12,p:{x:-19.5,y:78.1,startPosition:7}},{t:this.instance_11,p:{regX:25.8,x:-12.4,y:79.3,startPosition:7}},{t:this.instance_10,p:{regX:25.8,x:-3.1,y:79.3,startPosition:7}},{t:this.instance_9,p:{x:7.9,y:80.1,startPosition:7}},{t:this.instance_8,p:{x:16,y:80.1,startPosition:7}},{t:this.instance_7,p:{x:22.3,y:80.2,startPosition:7}},{t:this.instance_126,p:{x:-22.4,y:82.2,startPosition:7}},{t:this.instance_6,p:{x:-13.2,y:84,startPosition:7}},{t:this.instance_125,p:{x:-6.1,y:85.5,startPosition:7}},{t:this.instance_5,p:{x:2.9,y:86.7,startPosition:7}},{t:this.instance_124,p:{x:12.2,y:87.8,startPosition:7}},{t:this.instance_4,p:{regX:26,x:22,y:87.8,startPosition:7}},{t:this.instance_123,p:{x:30.6,y:87.9,startPosition:7}},{t:this.instance_3,p:{regX:25.8,x:41.1,y:85.6,startPosition:7}},{t:this.instance_122,p:{x:48.4,y:82.8,startPosition:7}},{t:this.instance_2,p:{x:38.9,y:86.7,startPosition:7}},{t:this.shape_7,p:{x:11.3,y:-46.4}},{t:this.shape_9,p:{x:9.5,y:15.4}},{t:this.shape_16,p:{x:11.4,y:-43.3}},{t:this.shape_6,p:{x:9.5,y:15.4}},{t:this.shape_32},{t:this.instance_1,p:{x:64.5,y:-8.6}}]},2).wait(29));

	// Capa 4
	this.instance_151 = new lib.nucleo("synched",0);
	this.instance_151.setTransform(29.2,83.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_152 = new lib.nucleo("synched",0);
	this.instance_152.setTransform(38.7,79.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_153 = new lib.nucleo("synched",0);
	this.instance_153.setTransform(31.5,82.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_154 = new lib.nucleo("synched",0);
	this.instance_154.setTransform(20.9,84.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_155 = new lib.nucleo("synched",0);
	this.instance_155.setTransform(12.4,84.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_156 = new lib.nucleo("synched",0);
	this.instance_156.setTransform(2.6,84.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_157 = new lib.nucleo("synched",0);
	this.instance_157.setTransform(-6.8,83.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_158 = new lib.nucleo("synched",0);
	this.instance_158.setTransform(-15.7,82.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_159 = new lib.nucleo("synched",0);
	this.instance_159.setTransform(-22.9,81,0.221,0.224,0,0,0,26,25.1);

	this.instance_160 = new lib.nucleo("synched",0);
	this.instance_160.setTransform(-32.1,79.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_161 = new lib.nucleo("synched",0);
	this.instance_161.setTransform(12.7,77.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_162 = new lib.nucleo("synched",0);
	this.instance_162.setTransform(6.4,77.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_163 = new lib.nucleo("synched",0);
	this.instance_163.setTransform(-1.7,77.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_164 = new lib.nucleo("synched",0);
	this.instance_164.setTransform(-12.8,76.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_165 = new lib.nucleo("synched",0);
	this.instance_165.setTransform(-22.1,76.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_166 = new lib.nucleo("synched",0);
	this.instance_166.setTransform(-29.1,75.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_167 = new lib.nucleo("synched",0);
	this.instance_167.setTransform(-38,73.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_168 = new lib.nucleo("synched",0);
	this.instance_168.setTransform(21.9,75.2,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_169 = new lib.nucleo("synched",0);
	this.instance_169.setTransform(31.1,76.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_170 = new lib.nucleo("synched",0);
	this.instance_170.setTransform(44.7,75.2,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_171 = new lib.nucleo("synched",0);
	this.instance_171.setTransform(47,67.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_172 = new lib.nucleo("synched",0);
	this.instance_172.setTransform(36.9,71,0.221,0.224,0,0,0,26,25.1);

	this.instance_173 = new lib.nucleo("synched",0);
	this.instance_173.setTransform(29.1,70.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_174 = new lib.nucleo("synched",0);
	this.instance_174.setTransform(19.2,69.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_175 = new lib.nucleo("synched",0);
	this.instance_175.setTransform(11.3,68.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_176 = new lib.nucleo("synched",0);
	this.instance_176.setTransform(3.9,68.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_177 = new lib.nucleo("synched",0);
	this.instance_177.setTransform(-6.2,70,0.221,0.224,0,0,0,26,25.1);

	this.instance_178 = new lib.nucleo("synched",0);
	this.instance_178.setTransform(-15.2,69.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_179 = new lib.nucleo("synched",0);
	this.instance_179.setTransform(-22.8,68.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_180 = new lib.nucleo("synched",0);
	this.instance_180.setTransform(-31.1,69.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_181 = new lib.nucleo("synched",0);
	this.instance_181.setTransform(-39.2,68.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_182 = new lib.nucleo("synched",0);
	this.instance_182.setTransform(-39.4,58.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_183 = new lib.nucleo("synched",0);
	this.instance_183.setTransform(-24.3,60,0.221,0.224,0,0,0,26,25.1);

	this.instance_184 = new lib.nucleo("synched",0);
	this.instance_184.setTransform(47.2,56.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_185 = new lib.nucleo("synched",0);
	this.instance_185.setTransform(47.1,47.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_186 = new lib.nucleo("synched",0);
	this.instance_186.setTransform(38.8,49.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_187 = new lib.nucleo("synched",0);
	this.instance_187.setTransform(-40.2,48.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_188 = new lib.nucleo("synched",0);
	this.instance_188.setTransform(47.1,40.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_189 = new lib.nucleo("synched",0);
	this.instance_189.setTransform(35.3,39.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_190 = new lib.nucleo("synched",0);
	this.instance_190.setTransform(-33.8,39.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_191 = new lib.nucleo("synched",0);
	this.instance_191.setTransform(40.2,33.1,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_192 = new lib.nucleo("synched",0);
	this.instance_192.setTransform(-39,60.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_193 = new lib.nucleo("synched",0);
	this.instance_193.setTransform(-28.7,61.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_194 = new lib.nucleo("synched",0);
	this.instance_194.setTransform(-18.5,61.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_195 = new lib.nucleo("synched",0);
	this.instance_195.setTransform(-9.3,61.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_196 = new lib.nucleo("synched",0);
	this.instance_196.setTransform(1,62.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_197 = new lib.nucleo("synched",0);
	this.instance_197.setTransform(9.9,63.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_198 = new lib.nucleo("synched",0);
	this.instance_198.setTransform(19.3,63.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_199 = new lib.nucleo("synched",0);
	this.instance_199.setTransform(28.7,62.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_200 = new lib.nucleo("synched",0);
	this.instance_200.setTransform(36.1,62.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_201 = new lib.nucleo("synched",0);
	this.instance_201.setTransform(44.3,66.1,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_202 = new lib.nucleo("synched",0);
	this.instance_202.setTransform(44.8,56.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_203 = new lib.nucleo("synched",0);
	this.instance_203.setTransform(42.2,56,0.221,0.224,0,0,0,26,25.1);

	this.instance_204 = new lib.nucleo("synched",0);
	this.instance_204.setTransform(33.3,55,0.221,0.224,0,0,0,26,25.1);

	this.instance_205 = new lib.nucleo("synched",0);
	this.instance_205.setTransform(24.3,55.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_206 = new lib.nucleo("synched",0);
	this.instance_206.setTransform(14.8,55,0.221,0.224,0,0,0,26,25.1);

	this.instance_207 = new lib.nucleo("synched",0);
	this.instance_207.setTransform(6.1,54,0.221,0.224,0,0,0,26,25.1);

	this.instance_208 = new lib.nucleo("synched",0);
	this.instance_208.setTransform(-2.5,54,0.221,0.224,0,0,0,26,25.1);

	this.instance_209 = new lib.nucleo("synched",0);
	this.instance_209.setTransform(-11.2,53.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_210 = new lib.nucleo("synched",0);
	this.instance_210.setTransform(-18.6,51.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_211 = new lib.nucleo("synched",0);
	this.instance_211.setTransform(-25.5,55.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_212 = new lib.nucleo("synched",0);
	this.instance_212.setTransform(-32.4,56,0.221,0.224,0,0,0,26,25.1);

	this.instance_213 = new lib.nucleo("synched",0);
	this.instance_213.setTransform(-24.4,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_214 = new lib.nucleo("synched",0);
	this.instance_214.setTransform(-33.3,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_215 = new lib.nucleo("synched",0);
	this.instance_215.setTransform(-39.1,51.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_216 = new lib.nucleo("synched",0);
	this.instance_216.setTransform(-40.2,42.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_217 = new lib.nucleo("synched",0);
	this.instance_217.setTransform(-32.4,42.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_218 = new lib.nucleo("synched",0);
	this.instance_218.setTransform(-14.3,45.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_219 = new lib.nucleo("synched",0);
	this.instance_219.setTransform(-6.4,45.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_220 = new lib.nucleo("synched",0);
	this.instance_220.setTransform(1.6,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_221 = new lib.nucleo("synched",0);
	this.instance_221.setTransform(10.8,45.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_222 = new lib.nucleo("synched",0);
	this.instance_222.setTransform(20.2,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_223 = new lib.nucleo("synched",0);
	this.instance_223.setTransform(28.7,48.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_224 = new lib.nucleo("synched",0);
	this.instance_224.setTransform(44.6,48.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_225 = new lib.nucleo("synched",0);
	this.instance_225.setTransform(36.7,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_226 = new lib.nucleo("synched",0);
	this.instance_226.setTransform(27.6,40.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_227 = new lib.nucleo("synched",0);
	this.instance_227.setTransform(19.4,38.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_228 = new lib.nucleo("synched",0);
	this.instance_228.setTransform(7.2,39.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_229 = new lib.nucleo("synched",0);
	this.instance_229.setTransform(-0.3,37.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_230 = new lib.nucleo("synched",0);
	this.instance_230.setTransform(-9.9,39.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_231 = new lib.nucleo("synched",0);
	this.instance_231.setTransform(-21.1,39.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_232 = new lib.nucleo("synched",0);
	this.instance_232.setTransform(-17.5,33.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_233 = new lib.nucleo("synched",0);
	this.instance_233.setTransform(-7.7,30.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_234 = new lib.nucleo("synched",0);
	this.instance_234.setTransform(31.3,29.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_235 = new lib.nucleo("synched",0);
	this.instance_235.setTransform(20.2,28.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_236 = new lib.nucleo("synched",0);
	this.instance_236.setTransform(10.7,28.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_237 = new lib.nucleo("synched",0);
	this.instance_237.setTransform(1.7,29.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_238 = new lib.nucleo("synched",0);
	this.instance_238.setTransform(25.7,35.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_239 = new lib.nucleo("synched",0);
	this.instance_239.setTransform(17.1,37.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_240 = new lib.nucleo("synched",0);
	this.instance_240.setTransform(9.7,35.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_241 = new lib.nucleo("synched",0);
	this.instance_241.setTransform(1.3,34.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_242 = new lib.nucleo("synched",0);
	this.instance_242.setTransform(36.2,37.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_243 = new lib.nucleo("synched",0);
	this.instance_243.setTransform(43.4,41.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_244 = new lib.nucleo("synched",0);
	this.instance_244.setTransform(46.9,32.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_245 = new lib.nucleo("synched",0);
	this.instance_245.setTransform(36,32.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_246 = new lib.nucleo("synched",0);
	this.instance_246.setTransform(31.2,31.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_247 = new lib.nucleo("synched",0);
	this.instance_247.setTransform(23.3,30.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_248 = new lib.nucleo("synched",0);
	this.instance_248.setTransform(15.7,29.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_249 = new lib.nucleo("synched",0);
	this.instance_249.setTransform(8.4,28.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_250 = new lib.nucleo("synched",0);
	this.instance_250.setTransform(-28.6,35.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_251 = new lib.nucleo("synched",0);
	this.instance_251.setTransform(-21.4,31.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_252 = new lib.nucleo("synched",0);
	this.instance_252.setTransform(-13.6,29.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_253 = new lib.nucleo("synched",0);
	this.instance_253.setTransform(-6.5,29.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_254 = new lib.nucleo("synched",0);
	this.instance_254.setTransform(1.1,27.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_255 = new lib.nucleo("synched",0);
	this.instance_255.setTransform(-39.6,33.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_256 = new lib.nucleo("synched",0);
	this.instance_256.setTransform(-39.6,26.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_257 = new lib.nucleo("synched",0);
	this.instance_257.setTransform(-33.2,28.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_258 = new lib.nucleo("synched",0);
	this.instance_258.setTransform(-28.6,24.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_259 = new lib.nucleo("synched",0);
	this.instance_259.setTransform(-22.3,24.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_260 = new lib.nucleo("synched",0);
	this.instance_260.setTransform(-14.5,22.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_261 = new lib.nucleo("synched",0);
	this.instance_261.setTransform(47.4,25.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_262 = new lib.nucleo("synched",0);
	this.instance_262.setTransform(43.5,24.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_263 = new lib.nucleo("synched",0);
	this.instance_263.setTransform(35.5,23.6,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_264 = new lib.nucleo("synched",0);
	this.instance_264.setTransform(28.8,22.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_265 = new lib.nucleo("synched",0);
	this.instance_265.setTransform(22.2,22.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_266 = new lib.nucleo("synched",0);
	this.instance_266.setTransform(14.7,21.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_267 = new lib.nucleo("synched",0);
	this.instance_267.setTransform(8,21.4,0.221,0.224,0,0,0,23.5,23.7);

	this.instance_268 = new lib.nucleo("synched",0);
	this.instance_268.setTransform(-7.2,21.3,0.221,0.224,0,0,0,23.5,23.7);

	this.instance_269 = new lib.nucleo("synched",0);
	this.instance_269.setTransform(0.6,21.3,0.221,0.224,0,0,0,23.5,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151}]}).to({state:[]},47).wait(51));

	// Capa 3
	this.instance_270 = new lib.Animar7("synched",0);
	this.instance_270.setTransform(123.6,-11.6);
	this.instance_270._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_270).wait(34).to({_off:false},0).to({rotation:6.5,x:74.8,y:18.7},12).to({_off:true},1).wait(51));

	// Capa 6
	this.instance_271 = new lib.mano("synched",0);
	this.instance_271.setTransform(207.6,-52.9,1,1,-8,0,0,118.1,65);
	this.instance_271._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_271).wait(20).to({_off:false},0).to({x:121.7,y:-28.6},13).to({_off:true},1).wait(64));

	// Capa 2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(98,143,193,0.643)").s().p("AgkFtQgsgBgsgGQhIgDhQgOQg2gIgwgVQgVgKgRgMIgQgOQgWgVgMgZQgEgKgDgMQgDgNgBgNIgDg7IgFidQgFi+AEgcQADgXAFgWQAQgLAhgJQAigIClgZQClgYCzALQC2ALBLAWIBTAYIANAKQAFAHgBAHIABAOIACAQQAFAxACAxIABA9QgBBYADBVIAEBIQACAcgGAcQgCAMgEANQgGASgPAPIglAYQg/AmglAIQgwALhAAKIgYAFIgcACQg0AEgzAAQguAAgrgDg");
	this.shape_33.setTransform(2.5,52);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).to({_off:true},47).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-69.6,119.9,165);


// stage content:



(lib.Liquidos_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.animVASO2();
	this.instance.setTransform(252.5,162.6,1.544,1.544,0,0,0,-0.4,12.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(412,207.9,185.1,254.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;