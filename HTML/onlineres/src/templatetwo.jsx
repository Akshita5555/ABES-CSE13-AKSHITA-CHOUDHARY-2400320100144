export default function TemplateTwo({ data }) {
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      <h2>{data.name}</h2>
      <hr />
      <p>{data.experience}</p>
    </div>
  );
}
