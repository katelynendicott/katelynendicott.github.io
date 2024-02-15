import React from 'react';
//import './App.css';
// import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects'
// import { Footer } from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'




export const Home = () => {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Banner/>
      <Skills/>
      <Projects/>
      {/* <Footer/> */}
    </div>
  );
}

