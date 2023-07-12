/**
 * rolling banner 1.2.1
 * http://www.shinyongjun.co.kr
 *
 * Copyright (C) 2015 shinyongjun.co.kr
 */

(function($){
	$.fn.bannerSlider = function(options){

		//Default
		var imgs = this;
		imgs.wrap('<div class="m-slider"><div class="screen"></div></div>');
		var area = this.parent().parent('.m-slider');
		area.append('<div class="controls"></div>');
		var controls = area.find('.controls');

		options = $.extend({
			type		: 'slide',
			controls	: true,
			prevText	: '',
			nextText	: '',
			pager		: true,
			auto		: false,
			autoControls: false,
			startText	: '',
			stopText	: '',
			autoHover	: false,
			speed		: 350,
			delay		: 5000,
			arrive		: function(i){return;},
			leave		: function(i){return;}
		}, options);

		if(options.controls){
			controls.append('<a href="#herf" class="yj-prev">' + options.prevText + '</a><a href="#herf" class="yj-next">' + options.nextText + '</a>');
			var prevBtn = area.find('.yj-prev'),
				nextBtn = area.find('.yj-next');
		}

		if(options.autoControls){
			controls.append('<a href="#herf" class="yj-start">' + options.startText + '</a><a href="#herf" class="yj-stop">' + options.stopText + '</a>');
			var startBtn = area.find('.yj-start'),
				stopBtn = area.find('.yj-stop');
			if(options.auto){
				startBtn.addClass('active');
			}else{
				stopBtn.addClass('active');
			}
		}

		if(options.pager){
			area.append('<div class="yj-pager"></div>');
			var pager = area.find('.yj-pager');
		}

		var img			= this.children(),
			max			= img.length,
			iFlag		= 0,
			type		= options.type,
			speed		= options.speed,
			delay		= options.delay,
			iBoolean	= true,
			sInterval	= null,
			clip		= null,
			_this		= null,
			_index		= null;

		if(options.pager){
			for(n = 0; n < max; n++){pager.append('<a href="#self" title="'+(n+1)+'장으로 이동"></a>');}
			pager = pager.children('a');
			pager.each(function(i){this.num = i});
			pager.eq(0).addClass('on');
			
			function pagerAc(pagerNum){
				pager.removeClass('on');
				pager.eq(pagerNum).addClass('on');
			}
		}

		if(options.type == 'slide'){
			img.css({'display':'block','top':-9999});
			img.eq(0).css({'top':0});
		}
		if(options.type == 'fade'){
			img.css({'display':'none','top':0});
			img.eq(0).css({'display':'block'});
		}			

		options.arrive(img.eq(iFlag), iFlag);

		var nextAc = function(nFlag){
			if (!iBoolean){return;}
			iBoolean = false;
			size = img.width();
			if(options.pager){pagerAc(nFlag);}

			switch(type){
				case('slide'):
					clip = iFlag;
					imgs.css({'left':-size});
					img.eq(iFlag).css({'top':0,'left':size});
					img.eq(nFlag).css({'top':0,'left':size*2});
					imgs.stop().animate({'left':-(size*2)}, speed, function(){
						imgs.css({'left':-size});
						img.eq(nFlag).siblings().css({'top':-9999});
						img.eq(nFlag).css({'left':size});
						options.leave(img.eq(clip), iFlag);
						iFlag = nFlag;
						options.arrive(img.eq(iFlag), iFlag);
						iBoolean = true;						
					});
					break;
				case('fade'):
					clip = iFlag;
					img.eq(iFlag).stop().fadeOut(speed);
					img.eq(nFlag).stop().fadeIn(speed, function(){
						options.leave(img.eq(clip), iFlag);
						iFlag = nFlag;
						options.arrive(img.eq(iFlag), iFlag);
						iBoolean = true;
					});
					break;
				default:
					break;
			}
		}

		var prevAc = function(pFlag){
			if (!iBoolean){return;}
			iBoolean = false;
			size = img.width();
			if(options.pager){pagerAc(pFlag);}

			switch(type){
				case('slide'):
					clip = iFlag;
					imgs.css({'left':-size});
					img.eq(iFlag).css({'top':0,'left':size});
					img.eq(pFlag).css({'top':0,'left':0});
					imgs.stop().animate({'left':0}, speed, function(){
						imgs.css({'left':-size});
						img.eq(pFlag).siblings().css({'top':-9999});
						img.eq(pFlag).css({'left':size});
						options.leave(img.eq(clip), iFlag);
						iFlag = pFlag;
						options.arrive(img.eq(iFlag), iFlag);
						iBoolean = true;
					});
					break;
				case('fade'):
					clip = iFlag;
					img.eq(iFlag).stop().fadeOut(speed);
					img.eq(pFlag).stop().fadeIn(speed, function(){
						options.leave(img.eq(clip), iFlag);
						iFlag = pFlag;
						options.arrive(img.eq(iFlag));
						iBoolean = true;
					});
					break;
				default:
					break;
			}
		}

		var start = function(){
			sInterval = setInterval(function(){
				if(iFlag < max-1){
					nextAc(iFlag+1);
				}else{
					nextAc(0);
				}
			}, delay);
		}

		var stop = function(){
			clearInterval(sInterval);
		}

		if(options.auto){start();}

		if(options.autoHover){
			area.mouseover(function(){stop();});
			area.mouseleave(function(){
				if(options.auto){start();}
				else{return;}
			});
		}

		if(options.autoControls){
			startBtn.click(function(){
				start();
				startBtn.addClass('active');
				stopBtn.removeClass('active');
			});

			stopBtn.click(function(){
				stop();
				stopBtn.addClass('active');
				startBtn.removeClass('active');
			});
		}

		if(options.controls){
			nextBtn.click(function(){
				if(iFlag < max-1)
					nextAc(iFlag+1);
				else
					nextAc(0);
			});

			prevBtn.click(function(){
				if(iFlag > 0)
					prevAc(iFlag-1);
				else
					prevAc(max-1);
			});
		}
		
		if(options.pager){
			pager.click(function(){
				if(this.num == iFlag)
					return;
				else if(this.num > iFlag)
					nextAc(this.num);
				else
					prevAc(this.num);
			});
		}
	}	
})(jQuery);