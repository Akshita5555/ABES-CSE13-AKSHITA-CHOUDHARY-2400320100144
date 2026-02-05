export default function ResumeForm({ data, setData }) {
  return (
    <div>
      <input
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Skills"
        value={data.skills}
        onChange={(e) => setData({ ...data, skills: e.target.value })}
      />

      <textarea
        placeholder="Experience"
        value={data.experience}
        onChange={(e) => setData({ ...data, experience: e.target.value })}
      />
    </div>
  );
}
