import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
const ContentBox=styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FlexItem =styled.div`
    margin: 20px;
`
const Button1=styled.button`
   
  align-items: center;
  appearance: none;
  background-color: #fd3e57;
  background-image: linear-gradient(1deg, #fd4f4f, #f31471 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd,sans-serif;
  font-size: 1rem;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 6px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color .2s,background-position .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;


&:active,
&:focus {
  outline: none;
}

&:hover {
  background-position: -20px -20px;
}

&:focus:not(:active) {
  box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
}
`

const Button2=styled.button`
   
  align-items: center;
  appearance: none;
  background-color: #3EB2FD;
  background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd,sans-serif;
  font-size: 1rem;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 6px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color .2s,background-position .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;


&:active,
&:focus {
  outline: none;
}

&:hover {
  background-position: -20px -20px;
}

&:focus:not(:active) {
  box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
}
`

const HomePage = () => {
  return (
    <>
      <ContentBox>
        <FlexItem><Link to="/scan_page" style={{"textDecoration":"none"}}><Button1>Scan QR</Button1></Link></FlexItem>
        <FlexItem><Link to="/generator_page" style={{"textDecoration":"none"}}><Button2>Generate QR</Button2></Link></FlexItem>
      </ContentBox>    
    </>
  )
}

export default HomePage