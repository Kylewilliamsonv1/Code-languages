$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    const pick1 = $("#survey1").val();
    const pick2 = $("#survey2").val();
    if (pick1==="frontend" ) {
      $("#selections").show();
      $(".selectionA").show();
    } else if (pick1==="backend") {
      $("#selections").show();
      $(".selectionE").show();
    } else {
      $(".selectionG").show();  
    }
    if (pick2==="q2socialmedia" ) {
      $("#selections").show();
      $(".selectionA").show();
    } else if (pick2==="q2videogames") {
      $("#selections").show();
      $(".selectionE").show();
    } else {
      $(".selectionG").show();  
    }

    event.preventDefault();
  });
});
