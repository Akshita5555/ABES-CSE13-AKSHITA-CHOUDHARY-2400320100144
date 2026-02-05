function validate() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("⚠️ Please fill all fields");
  } 
  else if (pass.length < 6) {
    alert("❌ Password must be at least 6 characters");
  } 
  else {
    alert("✅ Login Successful!");
  }
}
