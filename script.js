 
    function add() {
      const form = document.form1;
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");

      if (form.name.value == "") {
        alert("Please fill the name");
        form.name.focus();
        return false;
      }
      if (form.address.value == "") {
        alert("Please fill the address");
        form.address.focus();
        return false;
      }
      if (form.email.value == "") {
        alert("Please fill the email");
        form.email.focus();
        return false;
      }
      if (form.password.value.length < 6) {
        alert("Password must be at least 6 characters");
        form.password.focus();
        return false;
      }
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        password.focus();
        return false;
      }
      if (form.course.value == "") {
        alert("Please choose the course");
        form.course.focus();
        return false;
      }
      if (form.college.value == "") {
        alert("Please fill the college name");
        form.college.focus();
        return false;
      }
      if (!form.checkbox.checked) {
        alert("Please agree to the above information");
        form.checkbox.focus();
        return false;
      }

      alert("Form submitted successfully!");
      return true; // allow form submission
    }
  