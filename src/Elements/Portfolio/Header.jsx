import BurgerMenu from "../BurgerMenu";
import Burger from "./Burger";
import ScrollBarProgress from "./ScrollBarProgress";
import MobileHeader from "./MobileHeader";

import classes from "./Header.module.css";

import { IsActiveContext } from "../../Contexts/BurgerContext";

import { useContext } from "react";
import { createPortal } from "react-dom";

const Header = (props) => {
  const burgerCtx = useContext(IsActiveContext); // add a burger menu context

  const headerRoot = document.getElementById("header"); // get header root

  return createPortal(
    // create portal of header
    <header className={`${classes.header} ${props.className}`}>
      <nav>
        <div>
          <ul>
            <li
              onClick={() => props.scrollToRef("ref1")}
              className={`${
                props.activeSection === "ref1"
                  ? classes.active
                  : classes.inactive
              }`}
            >
              Front-End
            </li>
            <li
              onClick={() => props.scrollToRef("ref2")}
              className={`${
                props.activeSection === "ref2"
                  ? classes.active
                  : classes.inactive
              }`}
            >
              About Me
            </li>
            <li
              onClick={() => props.scrollToRef("ref3")}
              className={`${
                props.activeSection === "ref3"
                  ? classes.active
                  : classes.inactive
              }`}
            >
              My way
            </li>
            <li
              onClick={() => props.scrollToRef("ref4")}
              className={`${
                props.activeSection === "ref4"
                  ? classes.active
                  : classes.inactive
              }`}
            >
              My works
            </li>
          </ul>
        </div>
        <BurgerMenu>
          <Burger />
        </BurgerMenu>
      </nav>
      <MobileHeader>
        <ul>
          <li
            onClick={() => {
              props.scrollToRef("ref1");
              burgerCtx.changeIsActive();
            }}
            className={`${
              props.activeSection === "ref1" ? classes.active : classes.inactive
            }`}
          >
            Front-End
          </li>
          <li
            onClick={() => {
              props.scrollToRef("ref2");
              burgerCtx.changeIsActive();
            }}
            className={`${
              props.activeSection === "ref2" ? classes.active : classes.inactive
            }`}
          >
            About Me
          </li>
          <li
            onClick={() => {
              props.scrollToRef("ref3");
              burgerCtx.changeIsActive();
            }}
            className={`${
              props.activeSection === "ref3" ? classes.active : classes.inactive
            }`}
          >
            My way
          </li>
          <li
            onClick={() => {
              props.scrollToRef("ref4");
              burgerCtx.changeIsActive();
            }}
            className={`${
              props.activeSection === "ref4" ? classes.active : classes.inactive
            }`}
          >
            My works
          </li>
        </ul>
      </MobileHeader>
      <ScrollBarProgress />
    </header>,
    headerRoot
  );
};

export default Header;
