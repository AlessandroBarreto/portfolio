import Separator from "../common/separator";
import WorkCard from "../common/workCard";
import { WorkData } from "../../data/work";
import "../../styles/work.scss";

export default function Work() {
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {WorkData.map((work) => {
          return <WorkCard work={work}/>
        })}
      </div>
    </div>
  );
}
