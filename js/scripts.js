$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    const pick1 = $("#survey1").val();
    const pick2 = $("#survey2").val();
    const pick3 = $("#survey3").val();
    const pick4 = $("#survey4").val();
    const pick5 = $("#survey5").val()
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
    if (pick3==="q3yes" ) {
      $("#selections").show();
      $(".selectionB").show();
    } else if (pick3==="q3no") {
      $("#selections").show();
      $(".selectionE").show();
    } else {
      $(".selectionG").show();  
    }
    if (pick4==="q4coffee" ) {
      $("#selections").show();
      $(".selectionC").show();
    } else if (pick4==="q4tea") {
      $("#selections").show();
      $(".selectionD").show();
    } else {
      $(".selectionG").show();  
    }
    if (pick5==="q5mac" ) {
      $("#selections").show();
      $(".selectionA").show();
    } else if (pick5==="q5windows") {
      $("#selections").show();
      $(".selectionE").show();
    } else {
      $(".selectionG").show();  
    }

    event.preventDefault();
  });
});
