import { useContext, useState } from "react";
import "./BurgerMenu.css";
import { IsActiveContext } from "../Contexts/BurgerContext";

const BurgerMenu = (props) => {
  const burgerCtx = useContext(IsActiveContext);

  return (
    <button onClick={() => burgerCtx.changeIsActive()}>{props.children}</button>
  );
};

export default BurgerMenu;
