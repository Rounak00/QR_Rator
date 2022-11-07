import React from 'react'
import styled from "styled-components"


const FootBar=styled.div`
    color: white;
    background-color: rgb(40,116,240);
    width: 100%;
    height: 5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Text=styled.p`
    font-size: 1rem;
`
const Text2=styled.p`
    margin-top: 15px;
    font-size: 0.7rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Footer = () => {
  return (
    <>
     <FootBar>
       <Text>Happy Generating & Happy Scaning with QR_Rator </Text>
       <Text2>QR_Rator@2022</Text2>
     </FootBar>
    </>
  )
}

export default Footer