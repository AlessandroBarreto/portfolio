import ProjectCard from "../common/projectCard";
import Separator from "../common/separator";
import { ProjectData } from "../../data/projects";
import "../../styles/projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      {ProjectData.map((project, i) => {
        return <ProjectCard key={i} project={project} />;
      })}
    </div>
  );
}
