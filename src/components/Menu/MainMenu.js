import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../Menu/Hooks/onClickOutside';
import { MenuContext } from '../Menu/Context/NavState';
import HamburgerButton from '../Menu/HumburgerButton';
import { SideMenu } from '../Menu/SideMenu';

const Navbar = styled.div`
  display: flex;
  // position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  // background: #082bff none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: column;
  justify-content: row-reverse;
  // padding: 6px 60px;
  // box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
 
    <header ref={node}> 
      <Navbar>
        <HamburgerButton />
      </Navbar>
      <SideMenu />
    </header>
   
  );
};

export default MainMenu;