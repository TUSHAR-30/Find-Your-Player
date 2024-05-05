import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import './Navbar.css'
export const PrimaryNav = styled.nav`
  z-index: 99;
  // height:100px;
  display: flex;
  background: #8bc34a;
  // justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
  `
export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;

  @media (max-width: 768px) {
    font-size:0.75em;
    text-align:center;
    font-weight:bold;
    margin-left:-5px;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  height:40px;

`
const Navbar = () => {
  return (
    <div className='navbar'>
      <PrimaryNav>
        <Menu>
          <MenuLink to="/" activeStyle>
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
export default Navbar