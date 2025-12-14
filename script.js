document.addEventListener("DOMContentLoaded", function(){
  var buttons = document.querySelectorAll(".footerButton");
  buttons.forEach(function (button) {
    button.addEventListener("click", function() {
      var link = button.getAttribute("data-link")
      window.location.href = link;
    });
  }
});
