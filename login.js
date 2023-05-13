document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the values from the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login validation
    if (username === "admin" && password === "password") {
      alert("Login successful!");
  
      // Open index.html in a new window
      window.open("index.html", "_blank");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  