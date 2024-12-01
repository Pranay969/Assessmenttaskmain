// Redirects to the chat page (assessment.html) when "Enter" is clicked
function enterPage() {
  // Check if fields are filled (basic validation)
  const username = document.querySelector('input[name="uname"]').value;
  const password = document.querySelector('input[name="psw"]').value;

  if (username && password) {
      // Navigate to the chat page
      window.location.href = "assessment2.html";
  } else {
      alert("Please fill in both the username and password fields.");
  }
}
