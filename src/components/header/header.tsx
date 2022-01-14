import Web from "./web";
import Mobile from "./mobile";
import Drawer from "../common/drawer"
import "../../styles/header.scss";

export default function Header() {

  return (
    <div className="header">
      <div className="logo">DevFolio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <Drawer anchor="right" content={<Mobile/>} />
        </div>
      </div>
    </div>
  );
}
