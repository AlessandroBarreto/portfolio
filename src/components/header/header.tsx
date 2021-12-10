import { useState, useEffect } from "react";
import Web from "./web";
import Mobile from "./mobile";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "../../styles/header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const bodyStyle = document.body.style
    if (isOpen) {
      bodyStyle.overflowY = "hidden";
      bodyStyle.marginRight = "17px";
    } else {
      bodyStyle.overflowY = "scroll";
      bodyStyle.marginRight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="header">
      <div className="logo">MyFolio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuRoundedIcon fontSize="large" />
          <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
