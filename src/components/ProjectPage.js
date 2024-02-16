import React from 'react';

import { useEffect } from 'react';

import { CodeLayout } from './Code/CodeLayout'
import { DataLayout } from './Data/DataLayout'
import { DesignLayout } from './Design/DesignLayout'


import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectNotFound from './ProjectNotFound';




export const ProjectPage = ({ selectedProject }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
    }, []);

    let layoutComponent;

    // Determine which layout component to render based on the project type
    if (selectedProject.type === 'code') {
        layoutComponent = <CodeLayout project={selectedProject} />;
    } else if (selectedProject.type === 'data') {
        layoutComponent = <DataLayout project={selectedProject} />;
    } else if (selectedProject.type === 'design') {
        layoutComponent = <DesignLayout project={selectedProject} />;
    } else {
        // Handle unknown project types or provide a default layout
        layoutComponent = <ProjectNotFound />;
        console.log("choosing layout project page error");
    }

    console.log("project:",selectedProject);

    return (
        <div className="project-page">
            {layoutComponent}
        </div>
    );
}

