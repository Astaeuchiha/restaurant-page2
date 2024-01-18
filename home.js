// script.js
document.getElementById("openButton").addEventListener("click", function() {
    var hiddenBox = document.getElementById("hiddenBox");
    if (hiddenBox.style.display === "none") {
      hiddenBox.style.display = "block";
    } else {
      hiddenBox.style.display = "none";
    }
  });
  