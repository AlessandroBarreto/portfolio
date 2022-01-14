import { SocialData } from "../../data/social";
import "../../styles/socialContact.scss";

export default function SocialContact() {
  return (
    <div className="social-contact">
      {SocialData.map((item, i) => {
        if (item.platform === "Gmail") {
          return (
            <a
              key={i}
              href={`mailto:${item.link}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="social-icon">
                <img src={item.icon} alt="" style={{ marginTop: 9 }} />
              </div>
            </a>
          );
        } else {
          return (
            <a key={i} href={item.link} target="_blank" rel="noreferrer">
              <div className="social-icon">
                <img src={item.icon} alt="" />
              </div>
            </a>
          );
        }
      })}
    </div>
  );
}
