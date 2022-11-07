import React from 'react'
import styled from "styled-components"

const Nav=styled.div`
    width: 100%;
    height:5rem;
    background-color: rgb(40,116,240);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const FlexItem=styled.div`
    margin:0 15px ;
`
const Text=styled.p`
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const NavBar = () => {
  return (
    <>
      <Nav>
         <FlexItem><img src="/images/NavLogo.svg" alt="Logo" height="50rem" width="50rem"/></FlexItem>
         <FlexItem><Text>QR_Rator</Text></FlexItem>
      </Nav>
    </>
  )
}

export default NavBar