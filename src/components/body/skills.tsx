import SkillCard from "../common/skillCard";
import Separator from "../common/separator";
import "../../styles/skills.scss";
import { SkillsData } from "../../data/skills";

export default function Skills() {
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {SkillsData.map((item ,i) => {
          return (
            <div key={i} className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill, i) => {
                  return <SkillCard key={i} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
