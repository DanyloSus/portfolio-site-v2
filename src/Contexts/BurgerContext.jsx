import { createContext, useState } from "react";

export const IsActiveContext = createContext({
  isActive: false,
  changeIsActive: () => {},
});

export default function BurgerContextProvider(props) {
  const [isActive, setIsActive] = useState(false);

  const handleChangeIsActive = () => {
    setIsActive(!isActive);
    console.log(!isActive);
  };

  const valueCtx = {
    isActive,
    changeIsActive: handleChangeIsActive,
  };

  return (
    <IsActiveContext.Provider value={valueCtx}>
      {props.children}
    </IsActiveContext.Provider>
  );
}
