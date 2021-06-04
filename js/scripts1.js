$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    const language = $("#survey1").val();
    if (language==="frontend") {
      $("#selections").show();
      $(".selectionA").show();
    } else if (language==="backend") {
      $("#selections").show();
      $(".selectionE").show();
    } else {
      $(".selectionG").show();  
    }
    if (language==="q2videogames") {
      $("#selections").show();
      $(".selectionA").show();
    } else {
      $("#selections").show();
      $(".selectionE").show();
    }
    if (language==="q3yes") {
      $("#selections").show();
      $(".selectionA").show();
    } else {
      $("#selections").show();
      $(".selectionE").show();
    }
    if (language==="q4coffee") {
      $("#selections").show();
      $(".selectionA").show();
    } else {
      $("#selections").show();
      $(".selectionE").show();
    }
    if (language==="q5mac") {
      $("#selections").show();
      $(".selectionA").show();
    } else {
      $("#selections").show();
      $(".selectionE").show();
    }
    event.preventDefault();
  });
});
