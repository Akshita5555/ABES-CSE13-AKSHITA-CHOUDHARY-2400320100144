export default function ResumePreview({ data, template }) {
  return template === "one"
    ? <TemplateOne data={data} />
    : <TemplateTwo data={data} />;
}
