import { useState } from "react";
import Web from "./web";
import Mobile from "./mobile";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "../../styles/header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">Folio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <MenuRoundedIcon fontSize="large" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}
