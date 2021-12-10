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
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="block-div"></div>
      <div className="mobile">
        <div className="close-icon" onClick={handleMenu}>
          <CancelOutlined fontSize="large" />
        </div>
        <div className="mobile-options">
          <div className="mobile-option">
            <a href="#projects" onClick={handleMenu}>
              <CodeOutlined />
              Projects
            </a>
          </div>
          <div className="mobile-option">
            <a href="#skills" onClick={handleMenu}>
              <Laptop />
              Skills
            </a>
          </div>
          <div className="mobile-option">
            <a href="#work" onClick={handleMenu}>
              <WorkOutlineOutlined />
              Work
            </a>
          </div>
          <div className="mobile-option">
            <a href="#contact" onClick={handleMenu}>
              <PermIdentityOutlined />
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
