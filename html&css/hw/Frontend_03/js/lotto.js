
$(document).ready(function () {
    var lottery = function () {
      var lotto = [];
      for (var i = 0; i < 6; i++) {
        //1~45사이의 숫자가 랜덤하게 처리
        var num = Math.floor(Math.random() * 44) + 1;

        for (var j in lotto) {
          if (num == lotto[j]) {
            num = Math.floor(Math.random() * 44) + 1;
          }
        }
        lotto[i] = num;
      }
      var number = "추첨번호 : ";
      var bonus = "보너스번호 : ";
      for (var i = 0; i < 5; i++) {
        if (i == 4) {
          number += lotto[i];
          break;
        }
        number += lotto[i] + ",";
      }
      $("#number").append = number;

      bonus += lotto[5];
      $("#bonus").append(bonus);
    };
    $("#btnselect").click(function () {
      lottery();
    });
  });