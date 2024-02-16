import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { ProjectPage } from './components/ProjectPage';
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar';

import { useState ,useEffect} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'



import {Routes, Route} from 'react-router-dom';




export default function App() {
  const [selectedProject, setSelectedProject] = useState(() => {
    const storedProject = localStorage.getItem('selectedProject');
    return storedProject ? JSON.parse(storedProject) : null;
  });

  // Update local storage when selectedProject changes
  useEffect(() => {
    if (selectedProject) {
      localStorage.setItem('selectedProject', JSON.stringify(selectedProject));
    } else {
      localStorage.removeItem('selectedProject');
    }
  }, [selectedProject]);

  return (
    <>
      <NavBar/>
        <Routes>

          <Route path='/' element={<Home setSelectedProject={setSelectedProject} />} />

          <Route path="/home" element={<Home anchorId="home" />} />
          <Route path="/skills" element={<Home anchorId="skills" />} />
          <Route path="/projects" element={<Home anchorId="projects" />} />

          <Route path='/projectpage' element={<ProjectPage selectedProject={selectedProject} />} />



        </Routes>


      <Footer/>
    </>
  );
}
