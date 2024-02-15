import React from 'react';

import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects'

import 'bootstrap/dist/css/bootstrap.min.css'




export const Home = ({ setSelectedProject }) => {
    return (
        <div className="App">

            <Banner/>
            <Skills/>
            <Projects onSelectProject={setSelectedProject}/>

        </div>
    );
}

