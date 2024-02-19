import React from 'react';
import {  useEffect } from "react";
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects'

import 'bootstrap/dist/css/bootstrap.min.css'




export const Home = ({ setSelectedProject , anchorId}) => {
    
    useEffect(() => {
        const section = document.getElementById(anchorId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        }, [anchorId]);


    return (
        <div className="App">

            <Banner/>
            <Skills/>
            <Projects onSelectProject={setSelectedProject}/>
            

        </div>
    );
}

