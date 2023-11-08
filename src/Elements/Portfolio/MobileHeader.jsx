import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { IsActiveContext } from "../../Contexts/BurgerContext";

import Burger from "./Burger";
import BurgerMenu from "../BurgerMenu";

import "./MobileHeader.css";

const MobileHeader = (props) => {
  const burgerCtx = useContext(IsActiveContext); // add a burger menu context

  return createPortal(
    // create a portal to the mobile header div
    <div className={`mobileHeader ${burgerCtx.isActive && "active"}`}>
      <div className="contentMH">
        <BurgerMenu>
          <Burger />
        </BurgerMenu>
        <div className="listMH">{props.children}</div>
      </div>
    </div>,
    document.getElementById("mobileHeader")
  );
};

export default MobileHeader;
