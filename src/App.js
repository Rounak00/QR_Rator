import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import GeneratorPage from "./Pages/GeneratorPage";
import ScanPage from "./Pages/ScanPage";
import ErrorPage from "./Pages/ErrorPage";
import "./app.css"
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/scan_page" element={<ScanPage/>}></Route>
        <Route path="/generator_page" element={<GeneratorPage/>} ></Route>
        <Route path="/*" element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
