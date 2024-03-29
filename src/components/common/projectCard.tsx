import { LanguageOutlined, GitHub } from "@mui/icons-material";
import "../../styles/projectCard.scss";

interface projectCardProps {
  project: {
    title: string;
    about: string;
    tags: string[];
    demo: string;
    github: string;
    img: string;
  };
}

export default function ProjectCard({ project }: projectCardProps) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              rel="noreferrer"
              target="_blank"
            >
              <div className="link-button">
                <LanguageOutlined fontSize="small" />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              <div className="link-button">
                <GitHub fontSize="small" />
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => {
            return (
              <label key={i} className="tag">
                {tag}
              </label>
            );
          })}
        </div>
      </div>
      <img src={project.img} alt="" />
    </div>
  );
}
