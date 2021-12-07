import ProjectCard from "../common/projectCard";
import { ProjectData } from "../../data/projects";
import "../../styles/projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <label>Projects</label>
      <div>
        {ProjectData.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}
