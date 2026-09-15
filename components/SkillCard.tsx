interface SkillCardProps {
  skills: string[];
}

export default function SkillCard({ skills }: SkillCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>- {skill}</li>
        ))}
      </ul>
    </div>
  );
}