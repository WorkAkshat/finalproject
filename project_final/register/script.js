
document.getElementById("registerForm").addEventListener("submit", function(event) {
  var password = document.getElementById("password").value;
  var repassword = document.getElementById("repassword").value;

  if (password !== repassword) {
    alert("Passwords do not match");
    event.preventDefault();
    return;
  }

  var passwordStrengthRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordStrengthRegex.test(password)) {
    alert("Password should contain at least 8 characters, including uppercase, lowercase, special characters, and numbers.");
    event.preventDefault();
    return;
  }
});

document.getElementById("emailInput").addEventListener("input", function(event) {
  var email = event.target.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    event.target.setCustomValidity("Invalid email format");
  } else {
    event.target.setCustomValidity("");
  }
});
// Function to toggle password visibility
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleIcon = document.getElementById("passwordToggleIcon");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  }
  function toggleRepasswordVisibility() {
    var repasswordField = document.getElementById("repassword");
    var toggleIcon = document.getElementById("repasswordToggleIcon");

    if (repasswordField.type === "password") {
      repasswordField.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      repasswordField.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  }

  
  // Event listener for the toggle icon
  document.getElementById("togglePassword").addEventListener("click", function() {
    togglePasswordVisibility();
  });
  
  document.getElementById("toggleRepassword").addEventListener("click", function() {
    toggleRepasswordVisibility();
  });