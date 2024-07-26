// script.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
    var lineNo = document.getElementById("lineNo").value;
  
    // Validate against Excel data using Google Apps Script
    google.script.run.withSuccessHandler(handleLoginResponse).validateUser(userId, password, lineNo);
  });
  
  function handleLoginResponse(response) {
    if (response === "success") {
      window.location.href = "success.html"; // Redirect to success page
    } else {
      document.getElementById("errorMessage").innerText = "Invalid credentials. Please try again.";
    }
  }
  