import React from "react";
import { Route, Routes } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import "./index.css";
import About from "./pages/About";
import MainPage from "./pages/MainPage";

export default function App() {
  
  return (
    <> 
      <SideMenu />
      <Routes >
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<About />}/>
        
      </Routes>
      
    </>
  );
}
