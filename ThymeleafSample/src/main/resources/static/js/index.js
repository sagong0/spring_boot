$(function () {
  // 메인 배너 슬라이드
  var img_width = $(".slide ul img").width();
  var img_height = $(".slide ul img").height();
  var size = $(".control_button").size();

  $(".control_button")
    .each(function (index) {
      $(this).attr("data-index", index);
    })
    .click(function () {
      var index = $(this).attr("data-index");
      moveSlider(index);
    });

  function moveSlider(index) {
    randomNum = index;

    var willMoveLeft;

    willMoveLeft = -((index % 4) * img_width);

    $(".slider_panel").animate({ left: willMoveLeft }, "2000");
    $(".control_button[data-index=" + index + "]").addClass("active");
    $(".control_button[data-index!=" + index + "]").removeClass("active");
  }

  var randomNum = Math.round(Math.random() * (size - 1));
  moveSlider(randomNum);

  var setIntervalId;

  function timer() {
    setIntervalId = setInterval(function () {
      randomNum++;
      if (randomNum == size) {
        randomNum = 0;
      }
      $(".control_button").eq(randomNum).trigger("click");
    }, 2000);
  }
  timer();

  $(".slide").hover(
    function () {
      clearInterval(setIntervalId);
    },
    function () {
      timer();
    }
  );

  $(".fa-angle-left").click(function () {
    randomNum--;
    if (randomNum < 0) {
      randomNum = size - 1;
    }
    $(".control_button").eq(randomNum).trigger("click");
  });

  $(".fa-angle-right").click(function () {
    randomNum++;
    if (randomNum == size) {
      randomNum = 0;
    }
    // $('.control_button').eq(randomNumber).trigger('click');

    moveSlider(randomNum);
  });

  // 오픈API
  $(".api_bottom a.open_api_rollover").each(function () {
    var anchor = $(this);

    anchor.hover(
      function () {
        anchor.css("color", "blue");
      },
      function () {
        anchor.css("color", "#505360");
      }
    );
  });
  // 지도서비스
  $("div.map_cont li a.map_cont_rollover").each(function () {
    var anchor = $(this);
    anchor.hover(
      function () {
        anchor.css("color", "blue");
      },
      function () {
        anchor.css("color", "#505360");
      }
    );
  });

  // 공간정보검색
  $(".article_infosearch_rollover").each(function () {
    var anchor = $(this);

    anchor.hover(
      function () {
        anchor.css("color", "blue");
      },
      function () {
        anchor.css("color", "#505360");
      }
    );
  });

  // 공간빅데이터 분석 플랫폼(세번째 섹션)
  $(".m_bottom ul.m_bottom_left a.m_bottom_text_rollover").each(function () {
    var a = $(this);
    a.hover(
      function () {
        a.css("color", "blue");
      },
      function () {
        a.css("color", "#333");
      }
    );
  });

  // 공간인포그래픽, 나만의주제도만들기, 공간활용우수사례 탭 메뉴
  $("ul.tablist li.tab_pannel").each(function () {
    var lis = $(this);

    var anchors = $(lis.find(">a.tab_anchor"));
    var panels = $(anchors.next("div.tablist_panel"));

    var lastAnchor;
    var lastPanel;

    anchors.show();
    // 최근 앵커
    lastAnchor = anchors.filter(".tab_on");

    lastPanel = lastAnchor.next(".tablist_panel");

    // 일단 모든 패널들 숨기고
    panels.hide();
    // 최근앵커 해당 패널만 보여줌
    lastPanel.show();

    anchors.hover(
      function (e) {
        e.preventDefault();

        var currentAnchor = $(this);

        // currenPanel = $(#panel01)
        var currentPanel = $(currentAnchor.next(".tablist_panel"));

        // if (currentAnchor.get(0) === lastAnchor.get(0)) {
        //   return;
        // }

        lastAnchor.removeClass("tab_on");
        currentAnchor.addClass("tab_on");

        lastPanel.hide();
        currentPanel.show();

        lastAnchor = currentAnchor;
        lastPanel = currentPanel;
      },
      function () {}
    );
  });

  // 롤오버 공간카페
  // 1.  .space_cafe 하위의 a 마우스 호버 하면 백그라운드 색바꿔보자
  $(".space_cafe").each(function () {
    var space_cafe = $(this);

    var anchor = space_cafe.find("a");

    anchor.hover(
      function () {
        anchor.css("background", "grey");
      },
      function () {
        anchor.css("background", "white");
      }
    );
  });

  // 왼쪽하단 이미지 슬라이더 slideshow
  var interval = 3000;
  $("ul.b_banner > li.b_banner_slideshow").each(function () {
    var timer;

    var container = $(this);

    function switchImg() {
      var anchors = container.find("a");
      var first = anchors.eq(0);
      var second = anchors.eq(1);

      first.fadeOut().appendTo(container);
      second.fadeIn();
    }

    function startTimer() {
      timer = setInterval(switchImg, interval);
    }

    function stopTimer() {
      clearInterval(timer);
    }

    startTimer();

    container.find("a").hover(stopTimer, startTimer);
  });

  // tabcontent (보도자료 정책자료 유통자료 표준 공지사항이부분) 보도자료, 이거 호버했을때!!!!!! 모든 a태그에 act 제거 하고
  // 모든 a태그 아래 div.con 숨김 호버한 a 태그에민 act 추가 호버한 a 태그의 아래 div.con을 보여준다 !!!!!! 호버
  // 떠났을 때 호버햇을때의 a태그를 lasthover에 담아 currenthover

  $(".tabSet").each(function () {
    var topDiv = $(this);
    // a태그들 (보도자료 표준자료 유통자료 ...)
    var anchors = topDiv.find("ul > li > a.anchor");
    var panels = topDiv.find("div.con");
    var lastAnchor;
    var lastPanel;

    anchors.show();

    lastAnchor = anchors.filter(".act");
    lastPanel = $(lastAnchor.find("+div.con"));

    panels.hide();
    lastPanel.show();

    anchors.hover(
      function () {
        // 지금 호버한거 들어감
        var currentAnchor = $(this);
        var currentPanel = currentAnchor.parent().find("div.con");

        lastAnchor.removeClass("act");
        currentAnchor.addClass("act");

        lastPanel.hide();
        currentPanel.show();

        lastAnchor = currentAnchor;
        lastPanel = currentPanel;
      },
      function () {
        // 호버를 뗏을때
      }
    );
  });

  // ------오른쪽하단 공간정보홍보관 부분 (롤오버)

  $("article.section4_right .section4_rollover").each(function () {
    // 공간정보홍보관 /아카데미 /개발지원 플랫폼
    var a = $(this);

    a.bind("mouseenter focus click", function () {
      a.css("color", "blue");
    });

    a.bind("mouseleave blur", function () {
      a.css("color", "#222");
    });
  });

  // 헬프 데스트 밑 아이콘
  $(".help_bottom p").each(function () {
    var now_Ptag = $(this);

    now_Ptag.hover(
      function () {
        now_Ptag.css("color", "blue");
      },
      function () {
        now_Ptag.css("color", "#222");
      }
    );
  });

  // 밑 광고배너 이미지 ( bottom_banner )
  let slide = $("#slider2");

  var img_w = $("#slider2 img").width();
  var img_h = $("#slider2 img").height();

  $("#slider2 li:last-child").insertBefore("#slider2 li:first-child");
  slide.css("margin-top", -img_h);

  function moveTop() {
    slide.animate({ "margin-top": -img_h * 2 }, 500, () => {
      $("#slider2 > li:first-child").insertAfter("#slider2 > li:last-child");

      slide.css("margin-top", -img_h);
    });
  }

  function moveBottom() {
    slide.animate({ "margin-top": "0px" }, 500, () => {
      $("#slider2 > li:last-child").insertBefore("#slider2 > li:first-child");
      slide.css("margin-top", -img_h);
    });
  }

  let Timer = setInterval(moveTop, 3000);

  $(".fa-sort-up").click(() => {
    clearInterval(Timer);
    moveTop();
  });

  $(".fa-sort-down").click(() => {
    clearInterval(Timer);
    moveBottom();
  });

  $("li.bottom_banner_slideshow")
    .mouseenter(() => {
      clearInterval(Timer);
    })
    .mouseleave(() => {
      Timer = setInterval(moveTop, 3000);
    });
});
