// JSON DATA
$.get(
  "../faq/data/data.json",
  function (datas) {
    var category0 = datas[0].category;
    var question0 = datas[0].question;
    var answer0 = datas[0].answer;

    var category1 = datas[1].category;
    var question1 = datas[1].question;
    var answer1 = datas[1].answer;

    var category2 = datas[2].category;
    var question2 = datas[2].question;
    var answer2 = datas[2].answer;

    var category3 = datas[3].category;
    var question3 = datas[3].question;
    var answer3 = datas[3].answer;

    var category4 = datas[4].category;
    var question4 = datas[4].question;
    var answer4 = datas[4].answer;

    var category5 = datas[5].category;
    var question5 = datas[5].question;
    var answer5 = datas[5].answer;

    var category6 = datas[6].category;
    var question6 = datas[6].question;
    var answer6 = datas[6].answer;

    var category7 = datas[7].category;
    var question7 = datas[7].question;
    var answer7 = datas[7].answer;

    var category8 = datas[8].category;
    var question8 = datas[8].question;
    var answer8 = datas[8].answer;

    var category9 = datas[9].category;
    var question9 = datas[9].question;
    var answer9 = datas[9].answer;

    $("div.faq_box .faq .category0").append(category0);
    $("div.faq_box .faq .question0").append(question0);
    $("div.faq_box .faq .answer0").append(answer0);

    $("div.faq_box .faq .category1").append(category1);
    $("div.faq_box .faq .question1").append(question1);
    $("div.faq_box .faq .answer1").append(answer1);

    $("div.faq_box .faq .category2").append(category2);
    $("div.faq_box .faq .question2").append(question2);
    $("div.faq_box .faq .answer2").append(answer2);

    $("div.faq_box .faq .category3").append(category3);
    $("div.faq_box .faq .question3").append(question3);
    $("div.faq_box .faq .answer3").append(answer3);

    $("div.faq_box .faq .category4").append(category4);
    $("div.faq_box .faq .question4").append(question4);
    $("div.faq_box .faq .answer4").append(answer4);

    $("div.faq_box .faq .category5").append(category5);
    $("div.faq_box .faq .question5").append(question5);
    $("div.faq_box .faq .answer5").append(answer5);

    $("div.faq_box .faq .category6").append(category6);
    $("div.faq_box .faq .question6").append(question6);
    $("div.faq_box .faq .answer6").append(answer6);

    $("div.faq_box .faq .category7").append(category7);
    $("div.faq_box .faq .question7").append(question7);
    $("div.faq_box .faq .answer7").append(answer7);

    $("div.faq_box .faq .category8").append(category8);
    $("div.faq_box .faq .question8").append(question8);
    $("div.faq_box .faq .answer8").append(answer8);

    $("div.faq_box .faq .category9").append(category9);
    $("div.faq_box .faq .question9").append(question9);
    $("div.faq_box .faq .answer9").append(answer9);

    // $("faq_box dl span.category").append(datas[0].question);

    // for (var i in datas) {
    //   var data = datas[i];
    //   //   console.log(data);
    //   for (var j in data) {
    //     console.log(j);
    //   }
    //   var question_cont = data.question;
    //   var answer_cont = data.answer;
    //   var category_cont = data.category;

    //   //   console.log(category_cont);
    // }

    // var fruits = data.fruits;
    // var table = $("#fruits_data");

    // for (var i in fruits) {
    //   // 행
    //   var fruit = fruits[i];
    //   var cnt = 0;
    //   // 열
    //   for (var prop in fruit) {
    //     var text = fruit[prop];
    //     var tr = table.find("tr").eq(parseInt(i) + 1);
    //     var td = tr.find(">td").eq(cnt);
    //     td.text(text);
    //     cnt++;
    //   }
    // }
  },
  "json"
);

// faq accordion

$(function () {
  $(".faq_accordion").each(function () {
    var dl = $(this);
    var allDt = dl.find("dt");
    var allDd = dl.find("dd");

    allDd.hide();

    allDt.click(function () {
      // 지금 클릭한 그 dt
      var nowClickDt = $(this);
      var nowClickDd = nowClickDt.next();

      allDd.hide();
      nowClickDd.show();
      allDt.css("cursor", "pointer");
      nowClickDt.css("cursor", "default");
    });
  });
});
