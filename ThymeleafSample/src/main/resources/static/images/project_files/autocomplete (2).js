jQuery(function($) {
	$("form[name=searchForm] #searchKeyword").keydown(function(e) {
		var autoCmpltLength = $(".search_auto_cmplt #searchAutoCmplt").find("li").length;
		
		if(e.keyCode == '38' && autoCmpltLength > 0) {			// up
			if($(".search_auto_cmplt").is(":hidden")) {
				$(".search_auto_cmplt").show();
			} else {
	            var idx = $(".search_auto_cmplt #searchAutoCmplt").find("li").index($(".search_auto_cmplt #searchAutoCmplt").find("li.active"));
				if(idx > 0) {
					$(".search_auto_cmplt #searchAutoCmplt").find("li.active").removeClass("active");
					$(".search_auto_cmplt #searchAutoCmplt").find("li").eq(idx-1).addClass("active");
					$(this).val($(".search_auto_cmplt #searchAutoCmplt").find("li.active").find("a").text());
				}
			}
			var posTop = parseInt($(".search_auto_cmplt #searchAutoCmplt li.active").position().top)
			var scrollTop = parseInt($(".search_auto_cmplt #searchAutoCmplt").scrollTop());
			var liHeight = parseInt($(".search_auto_cmplt #searchAutoCmplt li.active").height());
			if(posTop < liHeight) {
				$("#wrap .search_box .search_auto_cmplt .search_area").animate({ 
					scrollTop : (posTop + scrollTop - liHeight) 
				}, "fast")
			}
		} else if(e.keyCode == '40' && autoCmpltLength > 0) {	// down
			if($(".search_auto_cmplt").is(":hidden")) {
				$(".search_auto_cmplt").show();
			} else {
				var idx = $(".search_auto_cmplt #searchAutoCmplt").find("li").index($(".search_auto_cmplt #searchAutoCmplt").find("li.active"));
				if($(".search_auto_cmplt #searchAutoCmplt").find("li").length - 1 > idx) {
					$(".search_auto_cmplt #searchAutoCmplt").find("li.active").removeClass("active");
					$(".search_auto_cmplt #searchAutoCmplt").find("li").eq(idx+1).addClass("active");
					$(this).val($(".search_auto_cmplt #searchAutoCmplt").find("li.active").find("a").text());
				}
			}
			var posTop = parseInt($(".search_auto_cmplt #searchAutoCmplt li.active").position().top)
			var scrollTop = parseInt($(".search_auto_cmplt #searchAutoCmplt").scrollTop());
			var liHeight = parseInt($(".search_auto_cmplt #searchAutoCmplt li.active").height());
			var maxHeight = parseInt($("#wrap .search_box .search_auto_cmplt .search_area").height());
			if(posTop > maxHeight) {
				$("#wrap .search_box .search_auto_cmplt .search_area").animate({ 
					scrollTop : (posTop + scrollTop + liHeight - maxHeight) 
				}, "fast")
	        }
	    }
	});

	$("form[name=searchForm] #searchKeyword").keyup(function(e) {
		var autoCmpltLength = $(".search_auto_cmplt #searchAutoCmplt").find("li").length;
		
		var searchTerm = $(this).val();
		var replaceTerm = searchTerm;
	    searchTerm = $.trim(searchTerm);
	    searchTerm = encodeURI(searchTerm);
		
		if(e.keyCode == '13' || e.keyCode == '38' || e.keyCode == '40'   /* || serviceCheck(true)*/) {	// enter | up | down
			// no event
		} else if (isEmpty($.trim(searchTerm))) {
			$(".search_auto_cmplt").hide();
		} else {
			$.ajax({
				url : getAutoContextPath()+"/getAutoCompleteList.html",
				type : "get",
				data : "searchKeyword=" + searchTerm + "&searchDirection=" + $("#searchDirection").val(),
				dataType : "json",
				/*
				beforeSend : function() {
					if($.unblockUI != undefined) {
						$('html').css('overflow', 'auto');
						$.unblockUI();
					}					
				},
				*/
				success : function(data) {
					$(".search_auto_cmplt #searchAutoCmplt").empty();
					$(".search_auto_cmplt").css('border', '1px solid black');
					if(data == null || data == "") {
						$(".search_auto_cmplt #searchAutoCmplt").append("<li style='padding:20px;'>해당 단어로 시작하는 검색어가 없습니다.</li>");
					} else {
						for(var i = 0; i < data.length; i++) {
							var keyword = data[i].KEYWORD;
							keyword = replaceAll(keyword, replaceTerm, "<b>" + replaceTerm + "</b>");
							$(".search_auto_cmplt #searchAutoCmplt").append("<li class=\"liKeyword\" style=\"padding:5px;font-size:14px;\"><a href=\"javascript://\">" + keyword + "</a></li>");
						}
						$(".search_auto_cmplt #searchAutoCmplt").append("<li style=\"padding:5px;border-bottom:1px solid black;\"></li>");
						$(".search_auto_cmplt #searchAutoCmplt").append("<li style=\"padding:10px;float:right;font-size:14px;\"><a href=\"javascript:changeSearchDirection('s');\">첫단어보기</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href=\"javascript:changeSearchDirection('e');\">끝단어보기</a></li>");
						
						$(".search_auto_cmplt #searchAutoCmplt .liKeyword a").bind("click", function() {
							$("form[name=searchForm] #searchKeyword").val($(this).text());
							allSearch();
						});
					}
	                
					$(".search_auto_cmplt").show();
				}
			});
		}
	});

	$("form[name=searchForm] #searchKeyword").blur(function(e) {
		var _str = $(this).val();
		$(".search_auto_cmplt").hide();
	});

	$(".search_auto_cmplt>*").hover(
		function(){
			$("form[name=searchForm] #searchKeyword").unbind("blur");
		},	        
		function(){
			$("form[name=searchForm] #searchKeyword").bind("blur", function(){
				$(".search_auto_cmplt").hide();
			});
		}            
	);	
});

function isEmpty(val) {
	if(val == null || val == '' || val == undefined || val == 'undefined') {
		return true;
	}
	return false;
}

function replaceAll(str, searchStr, replaceStr) {
	return str.split(searchStr).join(replaceStr);
}

function changeSearchDirection(direction) {
	$("#searchDirection").val(direction);
	$("form[name=searchForm] #searchKeyword").trigger('keyup');
}

function getAutoContextPath() {
	var offset = location.href.indexOf(location.host) + location.host.length;
	var ctxPath = location.href.substring(offset, location.href.indexOf('/', offset + 1));
    
    return ctxPath;
}