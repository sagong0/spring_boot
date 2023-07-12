function addCookieKeyword(searchTerm) {
	var resultCookieValue = "";
	if(searchTerm != "") {
		var cookieValue = getCookie("dq_cookie");
		searchTerm = searchTerm.toString().trim().replace("^", "");
		if(cookieValue != "") {
			resultCookieValue = encodeURIComponent(searchTerm);
			var cookieValueArray = cookieValue.split("^");

			var cookieValueArrayLength = (cookieValueArray.length > 10) ? 10 : cookieValueArray.length;
			
			for(var i=0; i < cookieValueArrayLength; i++) {
				var cookie = cookieValueArray[i];
				if(cookie != "") {
					cookie = cookie.trim();
					if(cookie != searchTerm) {
						resultCookieValue = resultCookieValue + "^" + encodeURIComponent(cookie);
					}
				}
			}
		} else {
			resultCookieValue = encodeURIComponent(searchTerm);
		}
	}
	if(resultCookieValue != "") {
		resultCookieValue = resultCookieValue.trim().replace(/\(/gi, "%28");
		resultCookieValue = resultCookieValue.trim().replace(/\)/gi, "%29");
	}	
	setCookie("dq_cookie", resultCookieValue);
}

function getCookie(cookieName) {
	cookieName = cookieName + "=";
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cookieName);
	var cookieValue = "";
	if(start != -1) {
		start += cookieName.length;
		var end = cookieData.indexOf(';', start);
		if(end == -1) { 
			end = cookieData.length; 
		}
		cookieValue = cookieData.substring(start, end);
	}
	if(cookieValue != "") {
		return decodeURIComponent(cookieValue);
	} else {
		return "";
	}	
}

function setCookie(cookieName, cookieValue) {
	var expire = new Date();
	expire.setDate(expire.getDate() + (60 * 60 * 24 * 1));
	var cookies = cookieName + '=' + cookieValue + '; path=/ ';
	cookies += ';expires=' + expire.toGMTString() + ';';
	document.cookie = cookies;
}