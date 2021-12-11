import { useState, useEffect } from "react";
import Web from "./web";
import Mobile from "./mobile";
import Drawer from "../common/drawer"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "../../styles/header.scss";

export default function Header() {

  const drawerContent = <h1>batata</h1>

  return (
    <div className="header">
      <div className="logo">MyFolio</div>
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
