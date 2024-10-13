$(document).ready(init);

var canvas, stage, exportRoot;

function init()
{
	// Center content
	centerWrapper();
	$(window).resize(centerWrapper);
	
	// Handle button clicks
	$('#menu li').click(menuHandler);
	
	// Gases
	$('#gases_modal_trigger, #gases_modal_close').click(gases_modalHandler);
	
	$('#liq_s1,#liq_s2').click(liqHandler);
	
}

function centerWrapper(w)
{
	var c = ($(window).height() - $('#wrapper').height()) * .5;
	
	$('#wrapper').css('padding-top',c > 0 ? c:0 + 'px');
}

function menuHandler(e)
{
	$('#container').css('background-color','#003399');
	
	$('#menu li').removeClass('active');
	$('#menu li').promise().done(function()
	{
		$(e.target).addClass('active');
	});
	
	$('.section').hide();
	
	switch($(e.target).attr('id'))
	{
		case 'b1':
			$('#gases').show();
			if($('#gases_modal').is(':visible')){$('#gases_modal_trigger').click();}
			set(1);
		break;
		case 'b2':
			$('#liquidos').show();
			set(2);
		break;
		case 'b3':
			$('#solidos').show();
			set(4);
		break;
	}
}

function liqHandler(e)
{
	$('#liquidos, #liquidos_b').toggle();
	set($(e.target).is('#liq_s1') ? 3:2);
}

function gases_modalHandler(e)
{
	$('#gases_modal_trigger').toggleClass('g_mod_t_active');
	
	$('#gases_modal').slideToggle();
}

// 1
function set(i)
{
	createjs.Ticker.removeAllEventListeners();
	
	$('canvas').html('');
	
	switch(i)
	{
		case 1:
			canvas = document.getElementById("canvas1");
			exportRoot = new lib.particulas();
		break;
		case 2:
			canvas = document.getElementById("canvas2");
			exportRoot = new lib.Liquidos_1();
		break;
		case 3:
			canvas = document.getElementById("canvas3");
			exportRoot = new lib.Liquidos_2();
		break;
		case 4:
			canvas = document.getElementById("canvas4");
			exportRoot = new lib.solidos();
		break;
	}
	
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}