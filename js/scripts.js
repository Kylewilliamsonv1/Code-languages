$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    event.preventDefault();
    const language = $("#survey1").val();
    if (language==="frontend") {
      $("#selections").show();
    }
  });
});
