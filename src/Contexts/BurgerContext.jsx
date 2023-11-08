import { createContext, useState } from "react";

export const IsActiveContext = createContext({
  // create a context of the burger menu
  isActive: false, // boolean
  changeIsActive: () => {}, // empty function
});

export default function BurgerContextProvider(props) {
  // create a provider of the context
  const [isActive, setIsActive] = useState(false); // create a state of isActive variable of context

  const handleChangeIsActive = () => {
    // create a function whic changes the value of isActive
    setIsActive(!isActive);
    console.log(!isActive);
  };

  const valueCtx = {
    // create a value of the provider
    isActive,
    changeIsActive: handleChangeIsActive,
  };

  return (
    <IsActiveContext.Provider value={valueCtx}>
      {props.children}
    </IsActiveContext.Provider>
  );
}
