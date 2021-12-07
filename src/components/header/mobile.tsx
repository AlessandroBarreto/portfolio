import "../../styles/mobile.scss";

interface mobileProps {
  isOpen: boolean;
  setIsOpen: Function;
}

export default function Mobile({ isOpen, setIsOpen }: mobileProps) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fi fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i className="fi fi-rr-edit-alt option-icon"></i>
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i className="fi fi-rr-laptop option-icon"></i>
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i className="fi fi-rr-briefcase option-icon"></i>
            Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="contact">
            <i className="fi fi-rr-user option-icon"></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
