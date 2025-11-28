// 🌈 Random Quote Feature
const quotes = [
  "A small act of kindness can light up a dark heart 💡",
  "Helping one person might not change the world, but it changes theirs.",
  "Be the reason someone believes in goodness again 💫",
  "Hope is the most beautiful gift you can share ❤️"
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  alert(quotes[randomIndex]);
  createHearts(); // Trigger floating hearts when message sent
}

// 💖 Floating Heart Animation
function createHearts() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0";
    heart.style.fontSize = "24px";
    heart.style.opacity = "0.9";
    heart.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

// 💫 Floating animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-150px); opacity: 0; }
}`;
document.head.appendChild(style);

// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = 
      document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}
