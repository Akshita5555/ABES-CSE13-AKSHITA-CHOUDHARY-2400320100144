export default function TemplateOne({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p><b>Skills:</b> {data.skills}</p>
      <p><b>Experience:</b> {data.experience}</p>
    </div>
  );
}
