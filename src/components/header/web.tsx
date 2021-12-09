import {
  CodeOutlined,
  Laptop,
  WorkOutlineOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import "../../styles/web.scss";

export default function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <CodeOutlined />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <Laptop />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <WorkOutlineOutlined />
          Work
        </a>
      </div>
      <div className="web-option">
        <a href="contact">
          <PermIdentityOutlined />
          Contact
        </a>
      </div>
    </div>
  );
}
