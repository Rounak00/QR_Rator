import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import QRCode from 'qrcode'
import { useState } from 'react'



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
const Inputbox=styled.input`
    max-width: 300px;
    appearance: none;
    outline: none;
    border: none;
    background:  #3EB2FD;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: white;
    margin-right: 1rem;
    
    &::placeholder{
      color: #ebe8e8;
    }
`
const Button=styled.button`
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: #fd4f4f;
  font-size: 1rem;
  color: white;
  border-radius: 0.5rem;
`
const Imgbox=styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 2rem auto;
`


const GeneratorPage = () => {
  const [url,setUrl]=useState('');
  const [qrcode,setQrcode]=useState('');

  const generateQRCode=()=>{
    QRCode.toDataURL(url,{
      width:200,
      margin:2
    },(err,url)=>{
      if(err){console.error(err)}
      console.log(url);
      setQrcode(url)
    })
  }

  return (
    <>
      <ContentBox>
        <FlexItem>
          <Inputbox 
              type="url" 
              placeholder="e.g. https://google.com" 
              value={url}
              onChange={(evt)=>setUrl(evt.target.value)}
              />
              <Link style={{"TextDecoration":"none"}}><Button onClick={generateQRCode}>Generate</Button></Link></FlexItem>
        <FlexItem>
          {qrcode && <>
          <Imgbox src={qrcode}/>
          </>}  
        </FlexItem>
        <FlexItem>
          {qrcode && <>
          <a href={qrcode} download="qrcode.png"><Button>Download</Button></a>
          </>}  
        </FlexItem>
      </ContentBox> 
    </>
  )
}

export default GeneratorPage