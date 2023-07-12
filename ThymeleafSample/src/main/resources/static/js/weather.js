$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=9a179f84826fad80c9f7ae5bafbb3f86&units=metric",
  function (data) {
    var currentTemp = data.main.temp;
    var minTemp = data.main.temp_min;
    var maxTemp = data.main.temp_max;
    var humidity = data.main.humidity;
    var weather_icon = data.weather[0].icon;
    var feel_temp = data.main.feels_like;

    var $now = new Date(Date.now());
    var month = $now.getMonth() + 1;
    var cDate =
      $now.getFullYear() +
      "년" +
      month +
      "월 " +
      $now.getDate() +
      "일" +
      $now.getHours() +
      "시" +
      $now.getMinutes() +
      "분";

    // 현재온도
    $(".ctemp").append(currentTemp);
    //최고온도
    $(".chightemp").append(maxTemp);
    // 최저온도
    $(".clowtemp").append(minTemp);
    // 체감온도
    $(".c_feel_temp").append(feel_temp);
    // 습도
    $(".chumid").append(humidity);
    // 날짜
    $(".weather_top > p.today").prepend(cDate);
    // 아이콘
    $(".cicon").append(
      '<img src="http://openweathermap.org/img/wn/' + weather_icon + '.png" />'
    );
  }
);



$.getJSON('https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=9a179f84826fad80c9f7ae5bafbb3f86&units=metric',function(data){

  // 8번째 인덱스가 내일 날씨
  var data = data.list[8];
  var tomorrow_Temp = data.main.temp;
  var tomorrow_temp_min = data.main.temp_min;
  var tomorrow_temp_max = data.main.temp_max;
  var tomorrow_feels_temp = data.main.feels_like;
  var t_humidity = data.main.humidity;
  var t_icon = data.weather[0].icon;

  var cdate = new Date();
  var t_date = new Date(cdate.getDate() +1)
  var t_year = t_date.getFullYear() + 53;
  var t_month = new Date(cdate).getMonth() + 1;
  var t_day = new Date(cdate).getDate() + 1;

  $(".t_temp").append(tomorrow_Temp);
  $('.t_max_temp').append(tomorrow_temp_max);
  $('.t_min_temp').append(tomorrow_temp_min);
  $('.t_feel_temp').append(tomorrow_feels_temp);
  $('.t_humid').append(t_humidity);
  $('.t_weather_icon').append(
    '<img src="http://openweathermap.org/img/wn/' + t_icon + '.png" />'
    );
  $('.t_date').append(t_year + '년' + t_month + '월' + t_day + '일');
    
})