import "../../styles/skillCard.scss";

interface SkillCardProps {
  skill: {
    name: string;
    icon: JSX.Element;
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}
