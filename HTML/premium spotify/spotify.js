function download() {
  let link = document.getElementById("link").value;

  if (link === "") {
    alert("⚠️ Please paste a Spotify link");
    return;
  }

  alert("🎶 Song is being processed...\n(Using RapidAPI)");
}
