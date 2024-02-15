import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { ProjectPage } from './components/ProjectPage';
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar';

import { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'



import {Routes, Route} from 'react-router-dom';




export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <NavBar/>
        <Routes>
          {/* <Route path='/home' element={<Home />}/>
          <Route path='/projectpage' element={<ProjectPage/>}/> */}
          <Route path='/home' element={<Home setSelectedProject={setSelectedProject} />} />
        <Route path='/projectpage' element={<ProjectPage selectedProject={selectedProject} />} />


        </Routes>


      <Footer/>
    </>
  );
}

