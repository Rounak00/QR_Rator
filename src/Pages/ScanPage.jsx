
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import styled from 'styled-components';

const Container=styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const HeadItem=styled.h2`
   margin: 20px 0;
   color: #fd4f4f;
   @media screen and (max-width: 400px) {
     font-size: 1rem;
   }
`
const Camera=styled.div`
   height: 400px;
   width: 300px;
`

const Result=styled.h2`
 @media screen and (max-width: 400px) {
  font-size: 1rem;
}`
const Button=styled.button`
  margin-top:30px;
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
const ScanPage = (props) => {
  const [data, setData] = useState('No result');
  
 

  return (
    <>
    <Container>
      <HeadItem>Scan your QR Code with QR-Rator</HeadItem>
      <Camera> 
              <QrReader
              
                onResult={(result, error) => {
                  if (!!result) {
                    setData(result?.text);
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                style={{ width: '100%' , height:"100%" }}
                constraints={ {facingMode: 'rear'} }
            />  
      </Camera>
      <Result>
          <span style={{color:"#fd4f4f"}}>Your Result :</span> <span style={{color:"#2874F0"}}>{data}</span>
      </Result>
      {
        data!=="No result" && 
        <>
          <a href={data} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><Button> Visit That Site</Button></a>
        </>
      }
      
      </Container>
    </>
  );
};

export default ScanPage;