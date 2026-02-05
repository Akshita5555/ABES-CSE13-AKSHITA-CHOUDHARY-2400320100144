function generateResume(){
  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-title").innerText =
    document.getElementById("title").value;

  document.getElementById("r-email").innerText =
    document.getElementById("email").value;

  document.getElementById("r-phone").innerText =
    document.getElementById("phone").value;

  document.getElementById("r-summary").innerText =
    document.getElementById("summary").value;

  document.getElementById("r-education").innerText =
    document.getElementById("education").value;

  document.getElementById("r-skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("r-experience").innerText =
    document.getElementById("experience").value;

  document.getElementById("r-projects").innerText =
    document.getElementById("projects").value;
}

function downloadPDF(){
  const resume = document.getElementById("resume");
  html2pdf().from(resume).save("My_Resume.pdf");
}
