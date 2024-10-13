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


(lib.Animar3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.nucleo("synched",0);
	this.instance.setTransform(27.7,30.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_1 = new lib.nucleo("synched",0);
	this.instance_1.setTransform(37.3,26.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_2 = new lib.nucleo("synched",0);
	this.instance_2.setTransform(30,29.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_3 = new lib.nucleo("synched",0);
	this.instance_3.setTransform(19.3,32,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_4 = new lib.nucleo("synched",0);
	this.instance_4.setTransform(10.6,31.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_5 = new lib.nucleo("synched",0);
	this.instance_5.setTransform(0.7,31.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_6 = new lib.nucleo("synched",0);
	this.instance_6.setTransform(-8.7,30.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_7 = new lib.nucleo("synched",0);
	this.instance_7.setTransform(-17.8,29.7,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_8 = new lib.nucleo("synched",0);
	this.instance_8.setTransform(-25,28.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_9 = new lib.nucleo("synched",0);
	this.instance_9.setTransform(-34.3,26.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_10 = new lib.nucleo("synched",0);
	this.instance_10.setTransform(10.9,24.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_11 = new lib.nucleo("synched",0);
	this.instance_11.setTransform(4.6,24.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_12 = new lib.nucleo("synched",0);
	this.instance_12.setTransform(-3.6,24.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_13 = new lib.nucleo("synched",0);
	this.instance_13.setTransform(-14.8,23.5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_14 = new lib.nucleo("synched",0);
	this.instance_14.setTransform(-24.2,23.5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_15 = new lib.nucleo("synched",0);
	this.instance_15.setTransform(-31.3,22.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_16 = new lib.nucleo("synched",0);
	this.instance_16.setTransform(-40.3,20.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_17 = new lib.nucleo("synched",0);
	this.instance_17.setTransform(20.3,22.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_18 = new lib.nucleo("synched",0);
	this.instance_18.setTransform(29.6,23.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_19 = new lib.nucleo("synched",0);
	this.instance_19.setTransform(43.3,22.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_20 = new lib.nucleo("synched",0);
	this.instance_20.setTransform(45.6,14.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_21 = new lib.nucleo("synched",0);
	this.instance_21.setTransform(35.4,18.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_22 = new lib.nucleo("synched",0);
	this.instance_22.setTransform(27.5,17.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_23 = new lib.nucleo("synched",0);
	this.instance_23.setTransform(17.6,16.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_24 = new lib.nucleo("synched",0);
	this.instance_24.setTransform(9.5,15.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_25 = new lib.nucleo("synched",0);
	this.instance_25.setTransform(2,16,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_26 = new lib.nucleo("synched",0);
	this.instance_26.setTransform(-8.2,17.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_27 = new lib.nucleo("synched",0);
	this.instance_27.setTransform(-17.3,16.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_28 = new lib.nucleo("synched",0);
	this.instance_28.setTransform(-24.9,15.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_29 = new lib.nucleo("synched",0);
	this.instance_29.setTransform(-33.4,16.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_30 = new lib.nucleo("synched",0);
	this.instance_30.setTransform(-41.5,15.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_31 = new lib.nucleo("synched",0);
	this.instance_31.setTransform(-41.7,6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_32 = new lib.nucleo("synched",0);
	this.instance_32.setTransform(-26.4,7.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_33 = new lib.nucleo("synched",0);
	this.instance_33.setTransform(45.9,3.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_34 = new lib.nucleo("synched",0);
	this.instance_34.setTransform(45.7,-5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_35 = new lib.nucleo("synched",0);
	this.instance_35.setTransform(37.4,-3.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_36 = new lib.nucleo("synched",0);
	this.instance_36.setTransform(-42.6,-4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_37 = new lib.nucleo("synched",0);
	this.instance_37.setTransform(45.7,-12,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_38 = new lib.nucleo("synched",0);
	this.instance_38.setTransform(33.9,-13.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_39 = new lib.nucleo("synched",0);
	this.instance_39.setTransform(-36.1,-13.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_40 = new lib.nucleo("synched",0);
	this.instance_40.setTransform(38.8,-19.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_41 = new lib.nucleo("synched",0);
	this.instance_41.setTransform(-41.3,7.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_42 = new lib.nucleo("synched",0);
	this.instance_42.setTransform(-30.9,8.7,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_43 = new lib.nucleo("synched",0);
	this.instance_43.setTransform(-20.6,8.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_44 = new lib.nucleo("synched",0);
	this.instance_44.setTransform(-11.3,8.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_45 = new lib.nucleo("synched",0);
	this.instance_45.setTransform(-0.9,9.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_46 = new lib.nucleo("synched",0);
	this.instance_46.setTransform(8.1,10.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_47 = new lib.nucleo("synched",0);
	this.instance_47.setTransform(17.7,10.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_48 = new lib.nucleo("synched",0);
	this.instance_48.setTransform(27.1,9.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_49 = new lib.nucleo("synched",0);
	this.instance_49.setTransform(34.6,9.9,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_50 = new lib.nucleo("synched",0);
	this.instance_50.setTransform(42.9,13.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_51 = new lib.nucleo("synched",0);
	this.instance_51.setTransform(43.4,3.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_52 = new lib.nucleo("synched",0);
	this.instance_52.setTransform(40.8,3.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_53 = new lib.nucleo("synched",0);
	this.instance_53.setTransform(31.8,2.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_54 = new lib.nucleo("synched",0);
	this.instance_54.setTransform(22.7,3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_55 = new lib.nucleo("synched",0);
	this.instance_55.setTransform(13.1,2.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_56 = new lib.nucleo("synched",0);
	this.instance_56.setTransform(4.3,1.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_57 = new lib.nucleo("synched",0);
	this.instance_57.setTransform(-4.4,1.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_58 = new lib.nucleo("synched",0);
	this.instance_58.setTransform(-13.2,0.5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_59 = new lib.nucleo("synched",0);
	this.instance_59.setTransform(-20.7,-1.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_60 = new lib.nucleo("synched",0);
	this.instance_60.setTransform(-27.6,3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_61 = new lib.nucleo("synched",0);
	this.instance_61.setTransform(-34.6,3.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_62 = new lib.nucleo("synched",0);
	this.instance_62.setTransform(-26.6,-6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_63 = new lib.nucleo("synched",0);
	this.instance_63.setTransform(-35.6,-6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_64 = new lib.nucleo("synched",0);
	this.instance_64.setTransform(-41.4,-1.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_65 = new lib.nucleo("synched",0);
	this.instance_65.setTransform(-42.6,-10,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_66 = new lib.nucleo("synched",0);
	this.instance_66.setTransform(-34.6,-10.5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_67 = new lib.nucleo("synched",0);
	this.instance_67.setTransform(-16.4,-7.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_68 = new lib.nucleo("synched",0);
	this.instance_68.setTransform(-8.3,-7.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_69 = new lib.nucleo("synched",0);
	this.instance_69.setTransform(-0.2,-6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_70 = new lib.nucleo("synched",0);
	this.instance_70.setTransform(9,-7.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_71 = new lib.nucleo("synched",0);
	this.instance_71.setTransform(18.6,-6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_72 = new lib.nucleo("synched",0);
	this.instance_72.setTransform(27.1,-4.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_73 = new lib.nucleo("synched",0);
	this.instance_73.setTransform(43.3,-4.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_74 = new lib.nucleo("synched",0);
	this.instance_74.setTransform(35.3,-6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_75 = new lib.nucleo("synched",0);
	this.instance_75.setTransform(26,-12.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_76 = new lib.nucleo("synched",0);
	this.instance_76.setTransform(17.8,-14.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_77 = new lib.nucleo("synched",0);
	this.instance_77.setTransform(5.4,-13.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_78 = new lib.nucleo("synched",0);
	this.instance_78.setTransform(-2.1,-15.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_79 = new lib.nucleo("synched",0);
	this.instance_79.setTransform(-11.9,-13.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_80 = new lib.nucleo("synched",0);
	this.instance_80.setTransform(-23.2,-13.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_81 = new lib.nucleo("synched",0);
	this.instance_81.setTransform(-19.6,-19.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_82 = new lib.nucleo("synched",0);
	this.instance_82.setTransform(-9.6,-22.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_83 = new lib.nucleo("synched",0);
	this.instance_83.setTransform(29.8,-23.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_84 = new lib.nucleo("synched",0);
	this.instance_84.setTransform(18.6,-24.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_85 = new lib.nucleo("synched",0);
	this.instance_85.setTransform(9,-24.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_86 = new lib.nucleo("synched",0);
	this.instance_86.setTransform(-0.2,-23.7,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_87 = new lib.nucleo("synched",0);
	this.instance_87.setTransform(24.1,-17.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_88 = new lib.nucleo("synched",0);
	this.instance_88.setTransform(15.4,-15.5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_89 = new lib.nucleo("synched",0);
	this.instance_89.setTransform(8,-17.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_90 = new lib.nucleo("synched",0);
	this.instance_90.setTransform(-0.5,-18.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_91 = new lib.nucleo("synched",0);
	this.instance_91.setTransform(34.7,-15.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_92 = new lib.nucleo("synched",0);
	this.instance_92.setTransform(42,-11.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_93 = new lib.nucleo("synched",0);
	this.instance_93.setTransform(45.5,-20.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_94 = new lib.nucleo("synched",0);
	this.instance_94.setTransform(34.6,-20.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_95 = new lib.nucleo("synched",0);
	this.instance_95.setTransform(29.7,-21,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_96 = new lib.nucleo("synched",0);
	this.instance_96.setTransform(21.7,-22.5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_97 = new lib.nucleo("synched",0);
	this.instance_97.setTransform(14,-23.5,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_98 = new lib.nucleo("synched",0);
	this.instance_98.setTransform(6.6,-24.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_99 = new lib.nucleo("synched",0);
	this.instance_99.setTransform(-30.8,-17.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_100 = new lib.nucleo("synched",0);
	this.instance_100.setTransform(-23.5,-21,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_101 = new lib.nucleo("synched",0);
	this.instance_101.setTransform(-15.6,-23.6,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_102 = new lib.nucleo("synched",0);
	this.instance_102.setTransform(-8.5,-23.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_103 = new lib.nucleo("synched",0);
	this.instance_103.setTransform(-0.8,-25.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_104 = new lib.nucleo("synched",0);
	this.instance_104.setTransform(-41.9,-19.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_105 = new lib.nucleo("synched",0);
	this.instance_105.setTransform(-41.9,-26.4,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_106 = new lib.nucleo("synched",0);
	this.instance_106.setTransform(-35.5,-24.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_107 = new lib.nucleo("synched",0);
	this.instance_107.setTransform(-30.8,-28.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_108 = new lib.nucleo("synched",0);
	this.instance_108.setTransform(-24.5,-28.8,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_109 = new lib.nucleo("synched",0);
	this.instance_109.setTransform(-16.5,-30.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_110 = new lib.nucleo("synched",0);
	this.instance_110.setTransform(46,-27,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_111 = new lib.nucleo("synched",0);
	this.instance_111.setTransform(42.1,-28.1,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_112 = new lib.nucleo("synched",0);
	this.instance_112.setTransform(34,-29.3,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_113 = new lib.nucleo("synched",0);
	this.instance_113.setTransform(27.2,-30,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_114 = new lib.nucleo("synched",0);
	this.instance_114.setTransform(20.6,-30.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_115 = new lib.nucleo("synched",0);
	this.instance_115.setTransform(13,-31.2,0.224,0.224,0,0,0,25.9,25.1);

	this.instance_116 = new lib.nucleo("synched",0);
	this.instance_116.setTransform(6.2,-31.5,0.224,0.224,0,0,0,23.5,23.7);

	this.instance_117 = new lib.nucleo("synched",0);
	this.instance_117.setTransform(-9.2,-31.6,0.224,0.224,0,0,0,23.5,23.7);

	this.instance_118 = new lib.nucleo("synched",0);
	this.instance_118.setTransform(-1.2,-31.6,0.224,0.224,0,0,0,23.5,23.7);

	this.addChild(this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.6,-37.1,99.6,74.3);


(lib.animVASO = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_63 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.3,1,1).p("Ahil/IBdAAAhikFQBmANBggNAhigtQBvANBXgNAhiiYIBdAAAhiF6QBlAMBfgMAhiEQIBdAAAhjA9IBeAAAhiCpIDBAA");
	this.shape.setTransform(8,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F0F1F4").ss(2.3,1,1).p("AJKp8QgJAOgKAUQgMAagBAHQABAOAAAVQgBAqAFPhQgBBlhABLQh9CTlGgLQlQgMhzhkQgrgmgPg1QgIgegCg6QgIk3gGj0QgNnfgDgFQgCgEgQguQgSgtgPgHQgZgLgFgPQApggBfgtQBfgtB+gSQCPgVAEAAQBTgKBmAGQFJAQBWAoQAdANASAUQASATACATQAGAlgEAKg");
	this.shape_1.setTransform(-0.3,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F1F4").s().p("AgzBaIgEAAIgQAAQiSgChpgbIgCAAQhagQg1gRQhJgXAAgZIAAgKQACgDAGAAQAGAAAFALQAHANADACQATALAZAIIAEABQAyAQAkAHIA3AMQBwAVCLADIAQABIAFAAQB4AACIgNQBugLAQgFQAPgGBqgbQBHgUABgaQACgZgVgLQgJgGgHgCIAAgKQAaADAPAaQAFAJADALIACAKQAAAjhwAgQgbAIgjAHQhDAPhMAJQhGAJgtAAIigAFIAAAAg");
	this.shape_2.setTransform(1.5,-48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E8F4").s().p("AitBvQg6gGhCgIIhrgVQgrgKgcgNIANAAQAEAAAaAHIAcAIIBrASIBzAIQBbAJBbgJIBagDQCcAFDkg1QAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQh4AehOAQQhNAQhvgCIhaAEQg8ADgsAAQgqAAgbgCgAmHgiQALgIAQgHQAegPAqgMQCBgkDPAAQDsAABrAbQAiAJAVALIAUANIgCADQgPgKgogNQgpgNgSAAQghgGgtgGQhZgMiIAAQkaAAiXBMg");
	this.shape_3.setTransform(1.5,-45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(199,205,231,0.451)").s().p("AArMtQlQgMhzhkQgrgmgPg1QgIgegCg6IgOorQgNnfgDgFIgSgyQgSgtgPgHQgZgLgFgPQApggBfgtQBfgtB+gSICTgVQBTgKBmAGQFJAQBWAoQAdANASAUQASATACATQAGAlgEAKQgJAOgKAUQgMAagBAHIABAjQgBAqAFPhQgBBlhABLQh0CIkiAAIgtAAgAC2JKQgwAGgxAAQgyAAgygGQAyAGAyAAQAxAAAwgGgABNHgIhcAAgACyF5IjBAAgABNENIhcAAgAC4ChQgsAGgyAAQgyAAg3gGQA3AGAyAAQAyAAAsgGgABNA2IhcAAgAC4g1QgwAGgyAAQgyAAgzgGQAzAGAyAAQAyAAAwgGgABNivIhcAAgAm7oUIgNABQAbAMAsAKIBqAVQBDAIA5AGQA4AFB0gFIBbgFQBvACBOgQQBOgQB4geQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQjkA1idgFIhbADQhZAJhcgJIhzgIIhqgSIgcgHQgagIgEAAIAAAAgAoKqJIAAAKQAAAbBJAYQA1ARBaAPIACABQBpAbCSABIAQABIAEAAICggGQAtAABGgIQBMgJBDgPQAjgHAbgIQBwggAAgmIgCgJQgDgLgFgKQgPgagagDIAAALQAHACAJAFQAVAMgCAZQgBAZhHAWQhqAbgPAGQgQAGhuALQiHAMh5AAIgFAAIgQAAQiLgDhwgVIg3gMQgkgIgygPIgEgBQgZgIgTgNQgDgCgHgNQgFgMgGAAIAAAAQgGAAgCADgAkSqXQgpAMgeAPQgQAHgLAIIAAABQCYhMEZAAQCJAABZAMQAsAHAhAGQATAAApANQAoAMAPAKIABgDIgTgMQgVgMgigJQhrgbjsAAIAAAAQjQAAiBAkg");
	this.shape_4.setTransform(-0.3,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(64));

	// Capa 4
	this.instance = new lib.nucleo("synched",0);
	this.instance.setTransform(29.2,83.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_1 = new lib.nucleo("synched",0);
	this.instance_1.setTransform(38.7,79.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_2 = new lib.nucleo("synched",0);
	this.instance_2.setTransform(31.5,82.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_3 = new lib.nucleo("synched",0);
	this.instance_3.setTransform(20.9,84.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_4 = new lib.nucleo("synched",0);
	this.instance_4.setTransform(12.4,84.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_5 = new lib.nucleo("synched",0);
	this.instance_5.setTransform(2.6,84.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_6 = new lib.nucleo("synched",0);
	this.instance_6.setTransform(-6.8,83.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_7 = new lib.nucleo("synched",0);
	this.instance_7.setTransform(-15.7,82.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_8 = new lib.nucleo("synched",0);
	this.instance_8.setTransform(-22.9,81,0.221,0.224,0,0,0,26,25.1);

	this.instance_9 = new lib.nucleo("synched",0);
	this.instance_9.setTransform(-32.1,79.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_10 = new lib.nucleo("synched",0);
	this.instance_10.setTransform(12.7,77.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_11 = new lib.nucleo("synched",0);
	this.instance_11.setTransform(6.4,77.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_12 = new lib.nucleo("synched",0);
	this.instance_12.setTransform(-1.7,77.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_13 = new lib.nucleo("synched",0);
	this.instance_13.setTransform(-12.8,76.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_14 = new lib.nucleo("synched",0);
	this.instance_14.setTransform(-22.1,76.4,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_15 = new lib.nucleo("synched",0);
	this.instance_15.setTransform(-29.1,75.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_16 = new lib.nucleo("synched",0);
	this.instance_16.setTransform(-38,73.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_17 = new lib.nucleo("synched",0);
	this.instance_17.setTransform(21.9,75.2,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_18 = new lib.nucleo("synched",0);
	this.instance_18.setTransform(31.1,76.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_19 = new lib.nucleo("synched",0);
	this.instance_19.setTransform(44.7,75.2,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_20 = new lib.nucleo("synched",0);
	this.instance_20.setTransform(47,67.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_21 = new lib.nucleo("synched",0);
	this.instance_21.setTransform(36.9,71,0.221,0.224,0,0,0,26,25.1);

	this.instance_22 = new lib.nucleo("synched",0);
	this.instance_22.setTransform(29.1,70.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_23 = new lib.nucleo("synched",0);
	this.instance_23.setTransform(19.2,69.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_24 = new lib.nucleo("synched",0);
	this.instance_24.setTransform(11.3,68.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_25 = new lib.nucleo("synched",0);
	this.instance_25.setTransform(3.9,68.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_26 = new lib.nucleo("synched",0);
	this.instance_26.setTransform(-6.2,70,0.221,0.224,0,0,0,26,25.1);

	this.instance_27 = new lib.nucleo("synched",0);
	this.instance_27.setTransform(-15.2,69.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_28 = new lib.nucleo("synched",0);
	this.instance_28.setTransform(-22.8,68.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_29 = new lib.nucleo("synched",0);
	this.instance_29.setTransform(-31.1,69.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_30 = new lib.nucleo("synched",0);
	this.instance_30.setTransform(-39.2,68.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_31 = new lib.nucleo("synched",0);
	this.instance_31.setTransform(-39.4,58.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_32 = new lib.nucleo("synched",0);
	this.instance_32.setTransform(-24.3,60,0.221,0.224,0,0,0,26,25.1);

	this.instance_33 = new lib.nucleo("synched",0);
	this.instance_33.setTransform(47.2,56.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_34 = new lib.nucleo("synched",0);
	this.instance_34.setTransform(47.1,47.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_35 = new lib.nucleo("synched",0);
	this.instance_35.setTransform(38.8,49.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_36 = new lib.nucleo("synched",0);
	this.instance_36.setTransform(-40.2,48.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_37 = new lib.nucleo("synched",0);
	this.instance_37.setTransform(47.1,40.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_38 = new lib.nucleo("synched",0);
	this.instance_38.setTransform(35.3,39.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_39 = new lib.nucleo("synched",0);
	this.instance_39.setTransform(-33.8,39.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_40 = new lib.nucleo("synched",0);
	this.instance_40.setTransform(40.2,33.1,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_41 = new lib.nucleo("synched",0);
	this.instance_41.setTransform(-39,60.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_42 = new lib.nucleo("synched",0);
	this.instance_42.setTransform(-28.7,61.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_43 = new lib.nucleo("synched",0);
	this.instance_43.setTransform(-18.5,61.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_44 = new lib.nucleo("synched",0);
	this.instance_44.setTransform(-9.3,61.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_45 = new lib.nucleo("synched",0);
	this.instance_45.setTransform(1,62.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_46 = new lib.nucleo("synched",0);
	this.instance_46.setTransform(9.9,63.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_47 = new lib.nucleo("synched",0);
	this.instance_47.setTransform(19.3,63.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_48 = new lib.nucleo("synched",0);
	this.instance_48.setTransform(28.7,62.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_49 = new lib.nucleo("synched",0);
	this.instance_49.setTransform(36.1,62.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_50 = new lib.nucleo("synched",0);
	this.instance_50.setTransform(44.3,66.1,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_51 = new lib.nucleo("synched",0);
	this.instance_51.setTransform(44.8,56.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_52 = new lib.nucleo("synched",0);
	this.instance_52.setTransform(42.2,56,0.221,0.224,0,0,0,26,25.1);

	this.instance_53 = new lib.nucleo("synched",0);
	this.instance_53.setTransform(33.3,55,0.221,0.224,0,0,0,26,25.1);

	this.instance_54 = new lib.nucleo("synched",0);
	this.instance_54.setTransform(24.3,55.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_55 = new lib.nucleo("synched",0);
	this.instance_55.setTransform(14.8,55,0.221,0.224,0,0,0,26,25.1);

	this.instance_56 = new lib.nucleo("synched",0);
	this.instance_56.setTransform(6.1,54,0.221,0.224,0,0,0,26,25.1);

	this.instance_57 = new lib.nucleo("synched",0);
	this.instance_57.setTransform(-2.5,54,0.221,0.224,0,0,0,26,25.1);

	this.instance_58 = new lib.nucleo("synched",0);
	this.instance_58.setTransform(-11.2,53.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_59 = new lib.nucleo("synched",0);
	this.instance_59.setTransform(-18.6,51.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_60 = new lib.nucleo("synched",0);
	this.instance_60.setTransform(-25.5,55.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_61 = new lib.nucleo("synched",0);
	this.instance_61.setTransform(-32.4,56,0.221,0.224,0,0,0,26,25.1);

	this.instance_62 = new lib.nucleo("synched",0);
	this.instance_62.setTransform(-24.4,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_63 = new lib.nucleo("synched",0);
	this.instance_63.setTransform(-33.3,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_64 = new lib.nucleo("synched",0);
	this.instance_64.setTransform(-39.1,51.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_65 = new lib.nucleo("synched",0);
	this.instance_65.setTransform(-40.2,42.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_66 = new lib.nucleo("synched",0);
	this.instance_66.setTransform(-32.4,42.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_67 = new lib.nucleo("synched",0);
	this.instance_67.setTransform(-14.3,45.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_68 = new lib.nucleo("synched",0);
	this.instance_68.setTransform(-6.4,45.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_69 = new lib.nucleo("synched",0);
	this.instance_69.setTransform(1.6,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_70 = new lib.nucleo("synched",0);
	this.instance_70.setTransform(10.8,45.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_71 = new lib.nucleo("synched",0);
	this.instance_71.setTransform(20.2,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_72 = new lib.nucleo("synched",0);
	this.instance_72.setTransform(28.7,48.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_73 = new lib.nucleo("synched",0);
	this.instance_73.setTransform(44.6,48.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_74 = new lib.nucleo("synched",0);
	this.instance_74.setTransform(36.7,46.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_75 = new lib.nucleo("synched",0);
	this.instance_75.setTransform(27.6,40.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_76 = new lib.nucleo("synched",0);
	this.instance_76.setTransform(19.4,38.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_77 = new lib.nucleo("synched",0);
	this.instance_77.setTransform(7.2,39.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_78 = new lib.nucleo("synched",0);
	this.instance_78.setTransform(-0.3,37.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_79 = new lib.nucleo("synched",0);
	this.instance_79.setTransform(-9.9,39.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_80 = new lib.nucleo("synched",0);
	this.instance_80.setTransform(-21.1,39.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_81 = new lib.nucleo("synched",0);
	this.instance_81.setTransform(-17.5,33.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_82 = new lib.nucleo("synched",0);
	this.instance_82.setTransform(-7.7,30.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_83 = new lib.nucleo("synched",0);
	this.instance_83.setTransform(31.3,29.3,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_84 = new lib.nucleo("synched",0);
	this.instance_84.setTransform(20.2,28.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_85 = new lib.nucleo("synched",0);
	this.instance_85.setTransform(10.7,28.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_86 = new lib.nucleo("synched",0);
	this.instance_86.setTransform(1.7,29.2,0.221,0.224,0,0,0,26,25.1);

	this.instance_87 = new lib.nucleo("synched",0);
	this.instance_87.setTransform(25.7,35.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_88 = new lib.nucleo("synched",0);
	this.instance_88.setTransform(17.1,37.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_89 = new lib.nucleo("synched",0);
	this.instance_89.setTransform(9.7,35.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_90 = new lib.nucleo("synched",0);
	this.instance_90.setTransform(1.3,34.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_91 = new lib.nucleo("synched",0);
	this.instance_91.setTransform(36.2,37.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_92 = new lib.nucleo("synched",0);
	this.instance_92.setTransform(43.4,41.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_93 = new lib.nucleo("synched",0);
	this.instance_93.setTransform(46.9,32.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_94 = new lib.nucleo("synched",0);
	this.instance_94.setTransform(36,32.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_95 = new lib.nucleo("synched",0);
	this.instance_95.setTransform(31.2,31.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_96 = new lib.nucleo("synched",0);
	this.instance_96.setTransform(23.3,30.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_97 = new lib.nucleo("synched",0);
	this.instance_97.setTransform(15.7,29.4,0.221,0.224,0,0,0,26,25.1);

	this.instance_98 = new lib.nucleo("synched",0);
	this.instance_98.setTransform(8.4,28.5,0.221,0.224,0,0,0,26,25.1);

	this.instance_99 = new lib.nucleo("synched",0);
	this.instance_99.setTransform(-28.6,35.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_100 = new lib.nucleo("synched",0);
	this.instance_100.setTransform(-21.4,31.9,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_101 = new lib.nucleo("synched",0);
	this.instance_101.setTransform(-13.6,29.3,0.221,0.224,0,0,0,26,25.1);

	this.instance_102 = new lib.nucleo("synched",0);
	this.instance_102.setTransform(-6.5,29.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_103 = new lib.nucleo("synched",0);
	this.instance_103.setTransform(1.1,27.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_104 = new lib.nucleo("synched",0);
	this.instance_104.setTransform(-39.6,33.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_105 = new lib.nucleo("synched",0);
	this.instance_105.setTransform(-39.6,26.5,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_106 = new lib.nucleo("synched",0);
	this.instance_106.setTransform(-33.2,28.6,0.221,0.224,0,0,0,26,25.1);

	this.instance_107 = new lib.nucleo("synched",0);
	this.instance_107.setTransform(-28.6,24.8,0.221,0.224,0,0,0,26,25.1);

	this.instance_108 = new lib.nucleo("synched",0);
	this.instance_108.setTransform(-22.3,24.1,0.221,0.224,0,0,0,26,25.1);

	this.instance_109 = new lib.nucleo("synched",0);
	this.instance_109.setTransform(-14.5,22.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_110 = new lib.nucleo("synched",0);
	this.instance_110.setTransform(47.4,25.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_111 = new lib.nucleo("synched",0);
	this.instance_111.setTransform(43.5,24.8,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_112 = new lib.nucleo("synched",0);
	this.instance_112.setTransform(35.5,23.6,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_113 = new lib.nucleo("synched",0);
	this.instance_113.setTransform(28.8,22.9,0.221,0.224,0,0,0,26,25.1);

	this.instance_114 = new lib.nucleo("synched",0);
	this.instance_114.setTransform(22.2,22.7,0.221,0.224,0,0,0,25.8,25.1);

	this.instance_115 = new lib.nucleo("synched",0);
	this.instance_115.setTransform(14.7,21.7,0.221,0.224,0,0,0,26,25.1);

	this.instance_116 = new lib.nucleo("synched",0);
	this.instance_116.setTransform(8,21.4,0.221,0.224,0,0,0,23.5,23.7);

	this.instance_117 = new lib.nucleo("synched",0);
	this.instance_117.setTransform(-7.2,21.3,0.221,0.224,0,0,0,23.5,23.7);

	this.instance_118 = new lib.nucleo("synched",0);
	this.instance_118.setTransform(0.6,21.3,0.221,0.224,0,0,0,23.5,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},42).wait(22));

	// Capa 3
	this.instance_119 = new lib.Animar3("synched",0);
	this.instance_119.setTransform(2.2,52.6,1.02,1);
	this.instance_119.alpha = 0;
	this.instance_119._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_119).wait(19).to({_off:false},0).to({scaleX:0.99,x:1.9,y:52.9,alpha:1},20).to({_off:true},3).wait(22));

	// Capa 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(98,143,193,0.643)").s().p("AgkFtQgsgBgsgGQhIgDhQgOQg2gIgwgVQgVgKgRgMIgQgOQgWgVgMgZQgEgKgDgMQgDgNgBgNIgDg7IgFidQgFi+AEgcQADgXAFgWQAQgLAhgJQAigIClgZQClgYCzALQC2ALBLAWIBTAYIANAKQAFAHgBAHIABAOIACAQQAFAxACAxIABA9QgBBYADBVIAEBIQACAcgGAcQgCAMgEANQgGASgPAPIglAYQg/AmglAIQgwALhAAKIgYAFIgcACQg0AEgzAAQguAAgrgDg");
	this.shape_5.setTransform(2.5,52);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-69.6,119.9,165);


// stage content:
(lib.Liquidos_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.animVASO();
	this.instance.setTransform(252.1,142.9,1.546,1.546,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(409,206.5,188.7,257.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;