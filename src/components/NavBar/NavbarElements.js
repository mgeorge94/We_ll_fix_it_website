import styled from 'styled-components';

// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
 background: rgba(0, 0, 0, 1);
 height: 80px;
 margin-top: -80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;
 color: white;
 padding: 10px;

 @media screen and (max-width: 960px) {
  transition: 0.8s all ease;
 }
`;
export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 z-index: 10;
 width: 100%;
 padding: 0 24px;
 max-width: 1000px;
`;
export const NavLogo = styled.img`
 justify-self: flex-start;
 align-self: center;
 height: 60px;
`;
export const MobileIcon = styled.div`
 display: none;
 @media screen and (max-width: 900px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
 }
`;
export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;

 white-space: nowrap;
 margin: 0 10rem;

 @media screen and (max-width: 900px) {
  display: none;
 }
`;
export const NavItem = styled.li`
 height: 80px;
`;
export const NavLinks = styled(LinkS)`
 color: white;
 display: flex;
 font-weight: 400;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 &:hover {
  color: var(--light-accent-color);
  transition: all 0.2s ease-in-out;
 }
 &.active {
  border-bottom: 3px solid var(--light-accent-color);
 }
`;
export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
 @media screen and (max-width: 900px) {
  display: none;
 }
`;

export const NavBtnLink = styled(LinkS)`
 border-radius: 50px;
 background: var(--light-accent-color);
 white-space: nowrap;
 padding: 10px 22px;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 &:hover {
  transition: all 0.2s ease-in-out;
  filter: brightness(130%);
 }
`;
