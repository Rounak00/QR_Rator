import React, {useState} from 'react'
import styled from 'styled-components'
import {QrReader} from "react-qr-reader"



const ContentBox=styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const FlexItem =styled.div`
    margin: 20px;
`
const Text =styled.h2`
    color:  #fd4f4f;
`
const ScanPage = () => {
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleErrorWebCam = (error) => {
        console.error(error);
    }
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }  
  return (
    <>
     <ContentBox>
        <FlexItem><Text>Scan QR using your camera</Text></FlexItem>
        <QrReader
                         delay={300}
                         style={{"width": "100%", "height":"100%"}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         
        <FlexItem><Text>Scanned By WebCam Code: {scanResultWebCam}</Text></FlexItem>
      </ContentBox>  
    </>
  )
}

export default ScanPage