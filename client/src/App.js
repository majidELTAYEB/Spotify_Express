import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import Axios from "axios";
import * as React from "react";
import Accueil from './Home';
import  NavBar  from './NavBar';
import Album from "./album";
import ContainerArtistes from "./ContainerArtistes";
import {
  BrowserRouter as Router, Route, Routes, BrowserRouter
} from 'react-router-dom';



function App() {


  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/" element={<NavBar />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/artistes/:id" element={<ContainerArtistes />}/>
      </Routes>
    </BrowserRouter>
   </div>
}

export default App;
