import {
  CodeOutlined,
  Laptop,
  WorkOutlineOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import "../../styles/mobile.scss";

export default function Mobile() {
  return (
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
        <a href="#contact">
          <PermIdentityOutlined />
          Contact
        </a>
      </div>
    </div>
  );
}
