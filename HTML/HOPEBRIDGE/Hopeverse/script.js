let hope = 0;

const quotes = [
  "You are allowed to take your time.",
  "Healing is not linear.",
  "Your story has value.",
  "Someone needs your courage today.",
  "You are not alone."
];

let qIndex = 0;
setInterval(() => {
  const q = document.getElementById("quote");
  if (q) {
    q.innerText = quotes[qIndex];
    qIndex = (qIndex + 1) % quotes.length;
  }
}, 3000);

function login() {
  const user = document.getElementById("username").value;
  if (!user) return;
  localStorage.setItem("user", user);
  window.location = "home.html";
}

if (document.getElementById("welcome")) {
  document.getElementById("welcome").innerText =
    "We’re glad you’re here, " + localStorage.getItem("user") + " 🤍";
}

function setMood(mood) {
  document.getElementById("moodText").innerText =
    "Thank you for sharing. Feeling " + mood + " is okay.";
}

function addStory() {
  const text = document.getElementById("story").value;
  if (!text) return;

  const div = document.createElement("div");
  div.className = "story-card fade-in";
  div.innerText = text;

  document.getElementById("stories").prepend(div);
  document.getElementById("story").value = "";

  hope += 10;
  if (hope > 100) hope = 100;
  document.getElementById("fill").style.width = hope + "%";
}
