
//contant 탭 처리
var tabClick;
var tabClickIndex = -1;
$(function(){

	$(".contTab").click(tabClick = function(){
		
		if(tabClickIndex == -1){
			var ct = $(".contTab").index(this);
		}else{
			var ct = tabClickIndex;
		}
		 
		
		for(i=0;i<$(".contTab").length;i++){
			if( ct == i ){
				$(".contTab:eq(" + i + ")").parent().addClass("on" + i);
				$(".contTab:eq(" + i + ")").addClass("focus");
				$(".contTab:eq(" + i + ") a").attr("title", "선택됨");
				$(".tab-cont:eq(" + i + ")").show();
			}else{
				$(".contTab:eq(" + i + ")").parent().removeClass("on" + i);
				$(".contTab:eq(" + i + ")").removeClass("focus");
				$(".contTab:eq(" + i + ") a").removeAttr("title");
				$(".tab-cont:eq(" + i + ")").hide();
			}
		}
		
		tabClickIndex = -1;
		
		// navigator.jsp의 fn_changeTitle()호출
		fn_changeTitle();
	});	
	$(".contTab").keypress(function (e) {
		var key = e.which;
		if(key == 13) {
			$(this).click();
			return false;
		}
	});  
	
});


// 인기검색어
$(function(){
	$(".add").mouseenter(function () {
		$(".addview").show();
	});

	$(".search").mouseleave(function () {
		$(".addview").hide();
	});
	 
	$(".search_box").mouseleave(function () {
		$(".addview").hide();
	});
	
	$(".add").focus(function () {
		$(".addview").show();
	});
	
	$(".add").blur(function () {
		setTimeout(function() {
			if($(".addview a:focus").size()==0)
				$(".addview").hide();
		}, 0);
	});
});
	

//메인 상단 메뉴오버시 하위메뉴 출력
$(document).ready(function() {
	// 하위메뉴 열기
	function expand_menu($this_a){
		//2px짜리 border-bottom
		$(".gnb_bg").addClass("on");		
	
		//하이라이트 초기화 
		$(".gnblink").removeClass("on");
		$(".sub_menu").removeClass("on");
		
		if($this_a.hasClass("gnblink")) {
			//해당 1차메뉴 하이라이트
			$gnblink_a = $this_a;
			$ul_submenu = $this_a.parent().find(".sub_menu");
			
			$gnblink_a.addClass("on");
			$ul_submenu.addClass("on");
			
		} else {
			//해당 2차메뉴 하이라이트
			$gnblink_a = $this_a.parent().parent().parent().parent().parent().prev();
			$ul_submenu = $this_a.parent().parent();

			$gnblink_a.addClass("on");
			$ul_submenu.addClass("on");
			$this_a.addClass("on");
		}
		
		//슬라이드 다운 시작
		target = $(".gnb_sub_menu, .gnb_bg");
		target.clearQueue().stop().animate({"height":275}, 0, function() {
			$("#gnb").css({"height":50});
		});
	}
	
	// 하위메뉴 닫기
	function collapse_menu() {
		setTimeout(function() {
			if($("#gnb a:focus").size()==0){
				target = $(".gnb_sub_menu, .gnb_bg");
				target.clearQueue().stop().animate({"height":0}, 0, function() {
					$(".gnb_bg").removeClass("on");
					$("#gnb").css({"height":50});
				});
			}
		}, 0);
	}
	
	$("#gnb a").mouseenter(function() {
		expand_menu($(this));
	});
	
	$("#gnb").mouseleave(function() {
		collapse_menu();
	});
	
	$("#gnb a").focus(function() {
		expand_menu($(this));
	});
	
	$("#gnb a").blur(function() {
		collapse_menu();
	});
	
});

//상단 메뉴오버시 하위메뉴 출력
$(document).ready(function() {
	
	$("#gnb_ot > li").mouseenter(function() {
		
		if ($(this).index()==1)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"block"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==2)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"block"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==3)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"block"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==4)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"block"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==5)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"block"});
		}

		//2px짜리 border-bottom
		$(".gnb_bg").addClass("on");		

		//해당 1차메뉴 활성화
		$("#gnb_ot > li").find(".gnblink").removeClass("on");
		$(this).find(".gnblink").addClass("on");
		
		
		//슬라이드 다운 시작
		target = $(".gnb_sub_menu, .gnb_bg");
		target.clearQueue().stop().animate({"height":40}, 0, function() {
			$("#gnb_ot").css({"height":40});
		});
		
	});
	
	$("#gnb_ot").mouseleave(function() {
		
		target = $(".gnb_sub_menu, .gnb_bg");
		target.clearQueue().stop().animate({"height":0}, 0, function() {
			$(".gnb_bg").removeClass("on");
			$("#gnb_ot").css({"height":40});
		});
	});
	
	$("#gnb_ot > li > a").focus(function() {
		$(".gnb_bg").addClass("on");		
		$("#gnb_ot > li").find(".gnblink").removeClass("on");
		$(this).addClass("on");		
		$("#gnb_ot > li").find(".sub_menu").removeClass("on");
		$(this).parent().find(".sub_menu").addClass("on");		
		target = $(".gnb_sub_menu, .gnb_bg");
		target.clearQueue().stop().animate({"height":40}, 0);
	});
});


//상단 메뉴오버시 하위메뉴 출력
$(document).ready(function() {
	
		$('#gnb_ot2 .gnb01 .gnb_sub_menu').css({"display":"none"});
		$('#gnb_ot2 .gnb02 .gnb_sub_menu').css({"display":"none"});
		$('#gnb_ot2 .gnb03 .gnb_sub_menu').css({"display":"none"});
		$('#gnb_ot2 .gnb04 .gnb_sub_menu').css({"display":"none"});
		$('#gnb_ot2 .gnb05 .gnb_sub_menu').css({"display":"none"});
		$('#gnb_ot2 .gnb06 .gnb_sub_menu').css({"display":"none"});

	$("#gnb_ot2 > li").mouseenter(function() {
		
		if ($(this).index()==1)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"block"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
			$('.gnb06 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==2)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"block"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
			$('.gnb06 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==3)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"block"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
			$('.gnb06 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==4)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"block"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
			$('.gnb06 .gnb_sub_menu').css({"display":"none"});
		}
		else if ($(this).index()==5)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"block"});
			$('.gnb06 .gnb_sub_menu').css({"display":"none"});
		}

		else if ($(this).index()==6)
		{			
			$('.gnb01 .gnb_sub_menu').css({"display":"none"});
			$('.gnb02 .gnb_sub_menu').css({"display":"none"});
			$('.gnb03 .gnb_sub_menu').css({"display":"none"});
			$('.gnb04 .gnb_sub_menu').css({"display":"none"});
			$('.gnb05 .gnb_sub_menu').css({"display":"none"});
			$('.gnb06 .gnb_sub_menu').css({"display":"block"});
		}

		//2px짜리 border-bottom
		$(".gnb_bg").addClass("on");		

		//해당 1차메뉴 활성화
		$("#gnb_ot2 > li").find(".gnblink").removeClass("on");
		$(this).find(".gnblink").addClass("on");
		
		
		//슬라이드 다운 시작
		target = $(".gnb_sub_menu, .gnb_bg");
		target.clearQueue().stop().animate({"height":40}, 0, function() {
			$("#gnb_ot2").css({"height":40});
		});
		
	});
	
	$("#gnb_ot2").mouseleave(function() {
		
		target = $(".gnb_sub_menu, .gnb_bg");
		target.clearQueue().stop().animate({"height":0}, 0, function() {
			$(".gnb_bg").removeClass("on");
			$("#gnb_ot2").css({"height":0});
			$('#gnb_ot2 .gnb01 .gnb_sub_menu').css({"display":"none"});
			$('#gnb_ot2 .gnb02 .gnb_sub_menu').css({"display":"none"});
			$('#gnb_ot2 .gnb03 .gnb_sub_menu').css({"display":"none"});
			$('#gnb_ot2 .gnb04 .gnb_sub_menu').css({"display":"none"});
			$('#gnb_ot2 .gnb05 .gnb_sub_menu').css({"display":"none"});
			$('#gnb_ot2 .gnb06 .gnb_sub_menu').css({"display":"none"});
		});
	});
	
	$("#gnb_ot2 > li > a").focus(function() {
		
		$(".gnb_bg").addClass("on");		
		$("#gnb_ot2 > li").find(".gnblink").removeClass("on");
		$(this).addClass("on");		
		$("#gnb_ot2 > li").find(".sub_menu").removeClass("on");
		$(this).parent().find(".sub_menu").addClass("on");		
		target = $(".gnb_sub_menu, .gnb_bg");
		target.clearQueue().stop().animate({"height":40}, 0);
	});
});



/* top_util 서비스 메뉴 다운 */
$(document).ready(function() {
    $(".service_a").click(function () {
		$(".service_a").parent().addClass("on");
		$(".util_search").show();
	});

	$(".util_search").mouseleave(function () {
		$(".service_a").parent().removeClass("on");
		$(".util_search").hide();
	});

	$(".util_search li:last").focusout(function () {
		$(".service_a").parent().removeClass("on");
		$(".util_search").hide();
	});
});

/* index탭 */
$(function () {
    $(".tab_content1").hide();
    $(".tab_content1:first").show();

    $("ul.tabs1 li").click(function () {
        $("ul.tabs1 li").removeClass("on");
        $(this).addClass("on");
        $(".tab_content1").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
});

$(function () {
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

    $("ul.tabs2 li").click(function () {
        $("ul.tabs2 li").removeClass("on");
        $(this).addClass("on");
        $(".tab_content2").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
});

$(function () {
    $(".tab_content3").hide();
    $(".tab_content3:first").show();

    $("ul.tabs3 li").click(function () {
        $("ul.tabs3 li").removeClass("on");
        $(this).addClass("on");
        $(".tab_content3").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
});

	$(function () {
    $(".tab_content4").hide();
    $(".tab_content4:first").show();

    $("ul.tabs4 li").click(function () {
        $("ul.tabs4 li").removeClass("on");
        $(this).addClass("on");
        $(".tab_content4").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
});


/* 슬라이드메뉴 */
UI = {
    Load: function(){
        UI.Rolling();
    },

    Rolling: function(){
        var ground = $('.area'),
            imgs_wrap = ground.find('.imgs'),
            imgs = imgs_wrap.children(),
            size = imgs.width()+10,
            btn_prev = ground.find('.btn_prev'),
            btn_next = ground.find('.btn_next');

        //default
        imgs_wrap.css('left',-size);
        imgs_wrap.children('li:last').prependTo(imgs_wrap);

        var prev = function(){
            imgs_wrap.stop().animate({'left':0}, 300, 'easeInExpo', function(){
                $(this).children('li:last').prependTo(this);
                $(this).css({'left':-size});
            });
        }

        var next = function(){
            imgs_wrap.stop().animate({'left':-(size*2)}, 300, 'easeInExpo', function(){
                $(this).children('li:first').appendTo(this);
                $(this).css({'left':-size});
            });
        }

        btn_prev.click(function(){
            prev();
        });

        btn_next.click(function(){
            next();
        });

        var start = function(){
            set_interval = setInterval(function(){
                next();
            }, 5000);//5초 자동롤링
        }

        start();
    }
}

$(document).ready(function(){
    UI.Load();
});


/* 부동산개발업 툴팁 */
$(document).ready(function () {
    $('.business_dev_table tbody tr th div').hover(	
        function (event) {
        	if ($(this).attr('option') == "type1") {
        		var html = 
        			"<div class='showtip' style='font-size:12px;font-weight:normal;padding:5px !important;'>"
        			 +"<table>" 
        			 +"<colgroup> "
        			  +"<col style='width:15%;'> "
        			  +"<col /> "
        			 +"</colgroup>" 
        			 +"<tbody>" 
        			  +"<tr>"
	   				   +"<th style='line-height: 0px !important; text-align: center !important;'>코드</th>"
	   				   +"<th style='line-height: 0px !important; text-align: center !important;'>설명</th>"
	   			      +"</tr>"
        			  +"<tr>"
        				+"<td style='text-align:center;line-height:1px;border-top:1px solid #e0e0e0;'>A</td>"
        				+"<td style='text-align:left;padding-left:5px;line-height:1px;border-top:1px solid #e0e0e0;'>단독</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>B</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>등록사업자+등록사업자</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>C-1</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>등록사업자+지주(공동사업주체-공동수행방식)</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>C-2</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>등록사업자+지주(공동사업주체-분담수행방식)</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>D</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>등록사업자+공공기관</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>E</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>특수목적법인(설립근거 법률 명시)</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>F</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>기타</td>"
        			  +"</tr>"
        			 +"</tbody>"
        			 +"</table></div>";
        		$(html).appendTo($(this));
        			
        	} else if ($(this).attr('option')  == "type2") {
        		var html = 
        			"<div class='showtip' style='font-size:12px;font-weight:normal;padding:5px !important;'>"
        			 +"<table>" 
        			 +"<colgroup> "
        			  +"<col style='width:25%;'> "
        			  +"<col /> "
        			 +"</colgroup>" 
        			 +"<tbody>" 
        			  +"<tr>"
     				   +"<th style='line-height: 0px !important; text-align: center !important;'>코드</th>"
     				   +"<th style='line-height: 0px !important; text-align: center !important;'>설명</th>"
     			      +"</tr>"
        			  +"<tr>"
        				+"<td style='text-align:center;line-height:1px;border-top:1px solid #e0e0e0;'>T1</td>"
        				+"<td style='text-align:left;padding-left:5px;line-height:1px;border-top:1px solid #e0e0e0;'>개발형 토지신탁</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>T2</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>관리형 토지신탁</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>T3</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>관리신탁</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>T4</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>처분신탁</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>T5</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>담보신탁</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>T6</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>분양관리신탁</td>"
        			  +"</tr>"
        			  +"<tr>"
        			  +"<td style='text-align:center;line-height:1px;'>T7</td>"
        			  +"<td style='text-align:left;padding-left:5px;line-height:1px;'>그 밖의 신탁</td>"
        			  +"</tr>"
        			 +"</tbody>"
        			 +"</table></div>";
        		$(html).appendTo($(this));
        		
        	} else if ($(this).attr('option')  == "type3") {
        		var html = 
        			"<div class='showtip' style='position:absolute;display:block; width:420px; border:1px solid #eaeaea; background-color:#fff; text-align:left; padding:15px;text-indent:0px; padding:5px !important; line-height:0px !important;'>"
        			 + "<table style='line-height: 0px !important;font-weight:normal !important;text-indent:2px;'>" 
        			 +"<colgroup> "
        			  +"<col style='width:50px;'> "
        			  +"<col style='width:100px;'> "
        			  +"<col style='width:120px;'> "
        			  +"<col style='width:150px;'> "
        			 +"</colgroup>" 
        			 +"<tbody>" 
        			  +"<tr>"
        				+"<th style='line-height: 0px !important; text-align: center !important;'>대분류</th>"
        				+"<th style='line-height: 0px !important; text-align: center !important;'>중분류</th>"
        				+"<th colspan='2' style='line-height: 0px !important; text-align: center !important;'>소분류</th>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td rowspan='3' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>L: 토지</td>"
        				+"<td rowspan='2' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>L10: 용지개발</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>L110: 상업용지</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>L120: 산업용지</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>L130: 관광·리조트 용지</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>L140: 그 밖의 용지</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>L20: 복합용지개발</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>-</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>-</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td rowspan='8' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S: 시설</td>"
        				+"<td rowspan='3' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S10: 상업·업무시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S110: 근린생활시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S111: 업무시설</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S112: 판매시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S113: 운동시설</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S114: 숙박시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S115: 그 밖의 상업·업무시설</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td rowspan='2' class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S20: 산업시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S211: 창고</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S212: 공장</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S213: 그 밖의 산업시설</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S30: 준주택시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S310: 주거용 오피스텔</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S311: 그 밖의 준주택</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px; '>S40: 그 밖의 시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px;'>S410: 관광리조트 시설</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px;'>S411: 그 밖의 시설</td>"
        			  +"</tr>"
        			  +"<tr>"
        				+"<td class='line' style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px;'>S50: 복합시설개발</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px;'>-</td>"
        				+"<td style='color: #4e4e4e;border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;padding-left: 5px;text-align: left;	line-height: 0px;font-size: 12px;'>-</td>"
        			  +"</tr>"
        			  +"</tbody>"
        			  +"</table></div>";
        		$(html).appendTo($(this));
        	}
        },
        function () {
            $('.showtip').remove();
        }
    );
});



function encode64(str){
return encode(escape(str));
}
 
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 
function encode(input){
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i =0;
	do{
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4 );
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6 );
		enc4 = chr3 & 63;
		
		if(isNaN(chr2)){
			enc3 = enc4 =64;
		}else if(isNaN(chr3)){
			enc4 = 64;
		}
		
		output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
	}while(i<input.length);
	
	return output;
}
	

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}  

//관리자 게시물 이동,복사
function actBbs(par){
	
	var frm = document.board;
	if($('input:checkbox[name="chkbbsno"]:checked').map(function(){return $(this).val();}).get() == ""){
		alert('게시물을 선택하세요');
		return false;
	}
	// contextPath -  com\z5\cms\admin\board\web\BoardPostsController.java에서 설정.caas009
	$.ajax({ 
		type: 'post' 
		, async: true 
		, url: contextPath+'/admsys/board/posts/actBbs.html' 
		, data: {"no": document.getElementById('boardno1').value, "boardno":document.getElementById('boardno').value, "bbsno": $('input:checkbox[name="chkbbsno"]:checked').map(function(){return $(this).val();}).get() ,
			"cparentno":document.getElementById('cparentno').value, "cno":document.getElementById('cno').value,
			"skin":document.getElementById('skin').value,"siteno":document.getElementById('siteno').value,"tblname":document.getElementById('tblname').value,"actBbs":par}
		, success: function(data) { 
			
			if(data == "delete"){
				alert('게시물 삭제 완료');
			}else if(data == "copy"){
				alert('게시물 복사 완료');
			}else if(data == "move"){				
				alert('게시물 이동 완료');
			}else{
				alert('다시시도 해주세요');
			}
			location.reload();
		} 
		, error: function(data, status, err) { 
			alert('서버와의 통신이 실패했습니다.'); 
			location.reload();
		}

	});
}
function selectCate(boardno,clevel,parentno, a){
	
	var frm = document.board;
	var values = []; 
	// contextPath -  com\z5\cms\admin\board\web\BoardPostsController.java에서 설정.caas009
	$.ajax({ 
		type: 'post' 
		, async: true 
		, url: contextPath+'/admsys/board/posts/selectCate.html' 
		, data: "boardno="+boardno
		, success: function(data) { 
			values = data;
	        var selectOp = "";

	        document.getElementById("cparentno").options.length = null;
	        $("#cparentno").css("display","none");
	        document.getElementById("cno").options.length = null;
	        $("#cno").css("display","none");
	        
//			$("#cparentno").append("<option value='"+0+"'>"+"전체"+"</option>");
			$.each(values, function(index, value) {
				if(value.clevel == 0){
					selectOp = "<option value='"+value.cno+"'";
					if(value.cno == parentno) selectOp += "selected";
					selectOp += ">"+value.cname+"</option>";
					$("#cparentno").append(selectOp);
// 					$("#ctopno").append("<option value='"+value.cno+"'>"+value.cname+"</option>");
					if(a == "y" && document.getElementById('cparentno') != null && document.getElementById('cparentno').value != ""){
						selectCate(document.getElementById('boardno').value,1,document.getElementById('cparentno').value);
					}
					$("#cparentno").css("display","block");
				}
				if(value.clevel == 1 && value.cparentno == parentno){
					$("#cno").append("<option value='"+value.cno+"'>"+value.cname+"</option>");
					 $("#cno").css("display","block");
				}
            });
			
			
		} 
		, error: function(data, status, err) { 
			alert('서버와의 통신이 실패했습니다.'); 
		}

	});
}

/**
 * SSO 테스트 :: 주소에서 특정 파라미터 쿼리 문자열 추출
 * @param qpm 추출하려는 파라미터 명
 * @param 추출한 쿼리 문자열
 * @author 이강민
 * @since 2017. 05. 19.
 * @version 1.0
 */
function getQueryParam(qpm) {
	var qps = location.search.replace('?', '').split('&'),
		sqp = '';
	for (i in qps) {
		if (qps[i].indexOf(qpm) == -1) continue;
		sqp = qps[i];
		break;
	}
	return sqp;
}