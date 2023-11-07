import classes from "./Burger.module.css";

import { IsActiveContext } from "../../Contexts/BurgerContext";

import { useContext } from "react";

const Burger = () => {
  const burgerCtx = useContext(IsActiveContext);

  return (
    <div className={classes.burger}>
      <div
        className="top"
        style={burgerCtx.isActive ? { rotate: "45deg", top: "15.5px" } : {}}
      />
      <div
        className="center"
        style={burgerCtx.isActive ? { transform: "scaleY(0)" } : {}}
      />
      <div
        className="bottom"
        style={burgerCtx.isActive ? { rotate: "-45deg", bottom: "13px" } : {}}
      />
    </div>
  );
};

export default Burger;
