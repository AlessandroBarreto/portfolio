import "../../styles/workCard.scss";

interface WorkCardProps {
  work: {
    company: string;
    designation: string;
    started: string;
    ended: string;
    companyLogo: string;
    info: string;
  };
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="work-card">
      <img src={work.companyLogo} alt="" />
      <div className="work-info">
        <label className="company-name">{work.company}</label>
        <div className="work-designation">
          <span>{work.designation}</span>
        </div>
        <div className="work-dates">
          <label>{work.started}</label> - <label>{work.ended}</label>
        </div>
        <div className="work-info">
          <p>{work.info}</p>
        </div>
      </div>
    </div>
  );
}
