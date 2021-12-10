import { SocialData } from "../../data/social";
import "../../styles/socialContact.scss";

export default function SocialContact() {
  return (
    <div className="social-contact">
      {SocialData.map((item, i) => {
        return (
          <a key={i} href={item.link} target="_blank" rel="noreferrer" >
            <div className="social-icon">
              <img src={item.icon} alt="" />
            </div>
          </a>
        );
      })}
    </div>
  );
}
