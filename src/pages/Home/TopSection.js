import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 64%;
  top:12vw;
  left: 0;
  // background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;
  
  @media (max-width: 768px) {
    margin-top:10px
  }
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 50px;
  
  @media (max-width: 768px) {
    font-size:40px
  }
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size:17px
  }
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
    margin-top:1.5em;
  }
`;

const DonateButton = styled(NavLink)`
  outline: none;
  border: none;
  text-decoration:none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }

  @media (max-width: 768px) {
    margin-top:16em
  }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Find Your Player</Logo>
      <Slogan>Get Access of all International Players</Slogan>
      <Paragraph>
        You can easily find the information related to your search players by applying filters on them through various ways like Country,Matches,Runs,Wickets and many more. 
      </Paragraph>
      <DonateButton to='/allplayers'>Explore</DonateButton>
    </TopSectionContainer>
  );
}
