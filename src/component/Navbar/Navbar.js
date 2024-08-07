import React from 'react'
import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import './Navbar.css'

export const PrimaryNav = styled.nav`
  z-index: 99;
  display: flex;
  background: #8bc34a;
  justify-content:center
  `
export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size:0.75em;
    text-align:center;
    font-weight:bold;
  }
`

export const Menu = styled.div`
  display: flex;
  height:45px;
  gap:5vw;
  margin-right:2px;

  @media (max-width: 768px) {
    gap:8vw
  }
`
const Navbar = (props) => {
  console.log("Navbar rendered");
  const handleClick = () => {
    // Use history.goBack() to navigate back without causing re-renders
    window.history.back();
  };
  return (
    <div className='navbar'>
      <PrimaryNav>
        <Menu>
          <img src="https://img.icons8.com/ios-filled/50/circled-left-2.png" alt="circled-left-2"  
            onClick={handleClick} 
            className={`backbtn ${props.showBackBtn?'showbackbtn':'hidebackbtn'}`}
          />
          <MenuLink to="/" activeStyle  >
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/allplayers" activeStyle>
            All Players
          </MenuLink>
          <MenuLink to="/featuredplayers" activeStyle>
            Featured Players
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </div>
  )
}
export default  Navbar