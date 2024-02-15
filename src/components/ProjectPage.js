import React from 'react';

import { useEffect } from 'react';
// import { Banner } from './Banner';
// import { Skills } from './Skills';
// import { Projects } from './Projects'

import {ProjectBanner} from './ProjectBanner'

import 'bootstrap/dist/css/bootstrap.min.css'




export const ProjectPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
    }, []);

    return (
        <div className="App">
            <ProjectBanner/>
        
            

        </div>
    );
}

