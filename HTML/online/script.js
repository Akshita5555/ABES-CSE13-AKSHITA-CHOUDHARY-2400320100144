function saveData() {
  localStorage.setItem("resume", JSON.stringify({
    name: name.value,
    role: role.value,
    email: email.value,
    phone: phone.value,
    summary: summary.value,
    skills: skills.value
  }));
  window.location.href = "preview.html";
}

const data = JSON.parse(localStorage.getItem("resume"));
if (data) {
  pName.innerText = data.name;
  pRole.innerText = data.role;
  pEmail.innerText = data.email;
  pPhone.innerText = data.phone;
  pSummary.innerText = data.summary;

  data.skills.split(",").forEach(s => {
    const li = document.createElement("li");
    li.innerText = s.trim();
    pSkills.appendChild(li);
  });
}

let dark = false;
function toggleTheme() {
  resume.style.background = dark ? "white" : "#111";
  resume.style.color = dark ? "black" : "white";
  dark = !dark;
}
