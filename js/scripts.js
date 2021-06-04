$(document).ready(function() {
  $("input#selections").submit(function(event) {
    event.preventDefault();
    const language = ($("choice#language").val());
    if (survey1 === frontend) {
      prompt("worked?")
      $('#selectionA').show();
    } else {
      prompt("worked?")
      $('#selectionE').show()
    }
  });
});

