import jsPDF from "jspdf";

const exportPDF = () => {
  const pdf = new jsPDF();
  pdf.text(document.getElementById("resume").innerText, 10, 10);
  pdf.save("resume.pdf");
};
<button onClick={exportPDF}>Download PDF</button>
import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

export default function App() {
  const [data, setData] = useState({
    name: "",
    skills: "",
    experience: ""
  });
  const [template, setTemplate] = useState("one");

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <ResumeForm data={data} setData={setData} />
      <div id="resume">
        <ResumePreview data={data} template={template} />
      </div>

      <button onClick={() => setTemplate("one")}>Template 1</button>
      <button onClick={() => setTemplate("two")}>Template 2</button>
    </div>
  );
}
