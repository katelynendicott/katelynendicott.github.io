import React from 'react';

import { useEffect } from 'react';



import {ProjectBanner} from '../ProjectBanner'

import 'bootstrap/dist/css/bootstrap.min.css'




export const DataLayout = ({ project }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
    }, []);

    

    console.log("project:",project);

    return (
        <div className="code-page">
            <h1>Data</h1>
            <ProjectBanner project={project}/>
        </div>
    );
}

