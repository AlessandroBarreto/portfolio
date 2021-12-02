import "../../styles/web.scss";

export default function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i className="fi fi-rr-edit-alt menu-icon"></i>
        </a>
        Projects
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi fi-rr-laptop option-icon"></i>
        </a>
        Skills
      </div>
      <div className="web-option">
        <a href="#work">
          <i className="fi fi-rr-briefcase option-icon"></i>
        </a>
        Work
      </div>
      <div className="web-option">
        <a href="">
          <i className="fi fi-rr-user"></i>
        </a>
        Contact me
      </div>
    </div>
  );
}
