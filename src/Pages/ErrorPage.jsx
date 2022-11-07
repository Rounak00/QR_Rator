import React from 'react'
import styled from "styled-components"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
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
const ContentText=styled.p`
    color: rgb(40,116,240);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
`

const ErrorPage = () => {
  return (
    <>
     <ContentBox>
        <FlexItem><ContentText>ERROR 404, Return Home Page</ContentText></FlexItem>
        <FlexItem><Link to="/"><BsFillArrowLeftCircleFill color='rgb(40,116,240)' size="3rem"/></Link></FlexItem>
      </ContentBox>
    </>
  )
}

export default ErrorPage