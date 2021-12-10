import {
  CancelOutlined,
  CodeOutlined,
  Laptop,
  WorkOutlineOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import "../../styles/mobile.scss";

interface mobileProps {
  isOpen: boolean;
  setIsOpen: Function;
}

export default function Mobile({ isOpen, setIsOpen }: mobileProps) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <CancelOutlined fontSize="large"/>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <CodeOutlined />
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <Laptop />
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <WorkOutlineOutlined />
            Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="contact">
            <PermIdentityOutlined />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
