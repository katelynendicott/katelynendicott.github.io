import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from 'react';


import {CodeBanner} from './CodeBanner'

import 'bootstrap/dist/css/bootstrap.min.css'





export const CodeLayout = ({ project }) => {


    const handleScroll = () => {
        const targetDiv = document.getElementById('code-target-div');
        if (targetDiv) {
          const targetY = targetDiv.offsetTop; // Get the target div's distance from the top
          window.scrollTo(0, targetY); // Scroll to that position
        }
    };


    return (
        <div className="code-page">
            
            <CodeBanner project={project} handleScroll={handleScroll}/>

            

            {/* CHALLENGES & SOLUTIONS SECTION */}

            {project.challenges &&  (

            <div className='challenge-solutions scroll-to-section' id="code-target-div">
                <h2>Challenges & Solutions</h2>
                {project.challenges.map((challenge, challengeIdx) => (
                    <div key={challengeIdx}>
                        <p className='challenge'>{challenge.description}</p>
                        {challenge.solutions && challenge.solutions.map((solution, solutionidx) => (
                            <p key={solutionidx} className='solution'>{solution.description}</p>
                        ))}
                    </div>
                ))}
            </div>
            )}


            {/* OUTCOME */}
            {project.outcome && (
            <div className='outcome'>
                
                <div>
                    <h2 className='h2-in-div'>Outcome</h2>
                    <p>{project.outcome}</p>
                </div>
            </div>
            )}



            {/* CODE LINK */}
            {project.previewImg &&  project.link && (
            <div className='linksection'>
                <h2>Code</h2>
                <div className='project-link-section'>
                    
                    <img className="page-preview"src={require(`../../assets/img/project-imgs/${project.previewImg}`)} alt={project.projectName}  />
                    
                    <div >
                        <a  className='link-proj-btn' target="_blank"href={project.link}>View Project on Github</a>
                    </div>

                </div>
                
            </div>
            )}





            
        </div>
    );
}

