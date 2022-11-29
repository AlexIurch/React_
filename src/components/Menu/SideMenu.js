import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../Menu/Context/NavState';
// import { useLocation } from 'react-router-dom';
import './sideMenu.css'

import Contact from '../Contact/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'
import arrow from './arrow.svg';
 // position: absolute;//
//  left: 0px;


const Menu = styled.nav`
overflow: hidden;
position: absolute;
top: 108px;
right:165px;
// left: 0px;
bottom: 0px;
z-index: 293;
display: none;
width: 300px;
height:310px;
max-width: 100%;
margin-top: 0px;
padding-top: 0px;
padding-right: 0px;
align-items: stretch;
background-color: #292929;
// transform: translateX(-100%);
// transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
${(props) =>
  props.open &&
  css`
  display:block;
     transform: translateX(0);
  `}
`;


export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 16%;
  background-image: url(${arrow});

  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  line-height: 120%;
  font-weight: 500;
  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

const Hide= ()=>{
  console.log('click')
// {MenuLink = style={{color: "red"}}}
}

SideMenu.defaultProps = {
  children: (
    <>
      {/* <ul onClick={Hide}>
    <li><Link to="/about">About me</Link></li>
    <li><Link to="/certificate">Certificate</Link></li>
    <li><Link to="/projects">My projects</Link></li>

    <li><Link to="/contact">Contact me</Link> </li> 
    </ul> */}
    <MenuLink href ="/portfolio">Home</MenuLink>
    <MenuLink href ="/about">About me</MenuLink>
    <MenuLink href ="/projects">My projects</MenuLink>
    <MenuLink href ="/certificate">Certificate</MenuLink>
    <MenuLink href ="/contact">Contact me</MenuLink>  
{/* <MenuLink><Link to="/about">About me</Link></MenuLink>
    <MenuLink><Link to="/certificate">Certificate</Link></MenuLink> */}
   </> 
  ),
};

