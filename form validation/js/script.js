$(document).ready(function(){
  $("#myForm").on("submit", function(e){
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    $(".error").text("");

    // Name validation
    const name = $("#name").val().trim();
    if(name === ""){
      $("#nameError").text("Full Name is required");
      isValid = false;
    }

    // Email validation
    const email = $("#email").val().trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email === ""){
      $("#emailError").text("Email is required");
      isValid = false;
    } else if(!emailPattern.test(email)){
      $("#emailError").text("Enter a valid email address");
      isValid = false;
    }

    // Password validation
    const password = $("#password").val();
    if(password === ""){
      $("#passwordError").text("Password is required");
      isValid = false;
    } else if(password.length < 6){
      $("#passwordError").text("Password must be at least 6 characters");
      isValid = false;
    }

    // Confirm password validation
    const confirmPassword = $("#confirmPassword").val();
    if(confirmPassword === ""){
      $("#confirmPasswordError").text("Confirm your password");
      isValid = false;
    } else if(confirmPassword !== password){
      $("#confirmPasswordError").text("Passwords do not match");
      isValid = false;
    }

    // If valid, show success alert
    if(isValid){
      alert("Form submitted successfully!");
      $("#myForm")[0].reset();
    }
  });
});
