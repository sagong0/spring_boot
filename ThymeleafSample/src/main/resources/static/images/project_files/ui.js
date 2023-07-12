$(document).ready(function() {
	$('.selectbox select').change(function() {
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});

	$('.selectbox select').focus(function() {
		$(this).parent().addClass("focus");
	});
	
	$('.selectbox select').blur(function() {
		$(this).parent().removeClass("focus");
	});
   
   // divBodyScroll의 스크롤이 동작할때에 함수를 불러옵니다.
	$('#divBodyScroll').scroll(function () {
		// divBodyScroll의 x좌표가 움직인 거리를 가져옵니다.
		var xPoint = $('#divBodyScroll').scrollLeft();

		// 가져온 x좌표를 divHeadScroll에 적용시켜 같이 움직일수 있도록 합니다.
		$('#divHeadScroll').scrollLeft(xPoint);
	});

	// 처음에 divBodyScroll의 세로스크롤 너비를 알수 없기 때문에
	// 스크롤을 우측으로 최대한 움직인 후 버튼을 눌러 두 스크롤의 차이를 찾아서 그 크기 만큼 tblHead의 공백 Column의 width를 지정해줍니다.
	$('#btnCheck').click(function () {
		var headMaximum = $('#divHeadScroll').scrollLeft();
		var bodyMaximum = $('#divBodyScroll').scrollLeft();
	});
});

