import "../../styles/projectCard.scss";

interface projectCardProps {
  project: {
    id: number;
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
        <label>{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi fi-rr-globe-alt"></i>
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i className="devicon-github-original colored"></i>
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.img} alt="" />
    </div>
  );
}
