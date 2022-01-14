import SocialContact from "../common/socialContact";
import me from "../../assets/pictures/me-cropped.jpg";
import "../../styles/about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello World 👋, I am <br /> <span>Alessandro Barreto</span>. <br />{" "}
          Brazilian web developer and technology enthusiast
        </div>
        <div className="about-photo">
          <img src={me} alt="coding" />
        </div>
      </div>
      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
}
