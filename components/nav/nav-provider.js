import { createContext, useContext, useRef, useState } from 'react';

const NavContext = createContext();

export const useNavContext = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw Error('Using component outside of NavContext.');
  }

  return context;
};

export const NavProvider = ({ children }) => {
  const navRef = useRef(null);
  const [navOpenState, setNavClosed] = useState(true);

  const openNav = () => {
    setNavClosed(false);
  };

  const closeNav = () => {
    setNavClosed(true);
  };

  const toggleNav = () => {
    setNavClosed(!navOpenState);
  };

  const value = {
    navRef,
    navOpenState,
    openNav,
    closeNav,
    toggleNav,
  };

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  );
}