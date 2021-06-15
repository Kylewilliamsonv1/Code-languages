$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    event.preventDefault();
    const pick1 = $("#survey1").val();
    const pick2 = $("#survey2").val();
    const pick3 = $("#survey3").val();
    const pick4 = $("#survey4").val();
    const pick5 = $("#survey5").val();
    let sum = 0
    if (parseInt(pick1)===1) {
      sum += 1
    } else {
      sum += 2
    }
    if (parseInt(pick2)===1 ) {
      sum += 1
    } else {
      sum += 2
    }
    if (parseInt(pick3)===1 ) {
      sum += 1
    } else {
      sum += 2
    }
    if (parseInt(pick4)===1 ) {
      sum += 1
    } else {
      sum += 2
    }
    if (parseInt(pick5)===1 ) {
      sum += 1
    } else {
      sum += 2
    }
    if (sum <= 5) {
      $("#selections").show();
      $(".selectionA").show();
    } else if (sum>5 && sum<8) {
      $("#selections").show();
      $(".selectionB").show();
    } else {
      $("#selections").show();
      $(".selectionC").show();
    }
    console.log(sum);
  });
});
