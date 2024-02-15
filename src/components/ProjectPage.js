import React from 'react';

import { useEffect } from 'react';

// //import data
// import Data from '../projects.json'

import {ProjectBanner} from './ProjectBanner'

import 'bootstrap/dist/css/bootstrap.min.css'




export const ProjectPage = ({ selectedProject }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
    }, []);

    console.log("project:",selectedProject);

    return (
        <div className="App">
            <ProjectBanner selectedProject={selectedProject}/>
        
            

        </div>
    );
}

