import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from 'react';



import {CodeBanner} from './Code/CodeBanner'

import 'bootstrap/dist/css/bootstrap.min.css'





export const CodeLayout = ({ project }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
    }, []);

    

    console.log("project:",project);

    return (
        <div className="code-page">
            
            <CodeBanner project={project}/>

            {/* CHALLENGES & SOLUTIONS SECTION */}
            <div className='challenge-solutions'>
                <h2>Challenges & Solutions</h2>
                {project.challenges.map((challenge, challengeIdx) => (
                    <div key={challengeIdx}>
                        <p className='challenge'>{challenge.description}</p>
                        {challenge.solutions.map((solution, solutionidx) => (
                            <p key={solutionidx} className='solution'>{solution.description}</p>
                        ))}
                    </div>
                ))}
            </div>


            {/* OUTCOME */}
            <div className='outcome'>
                <h2>Outcome</h2>
                <p>{project.outcome}</p>

            </div>




            {/* CODE LINK */}
            <div className='code-linksection'>
                <h2>Code</h2>
                <div>
                    
                    <img src={require(`../assets/img/project-imgs/${project.previewImg}`)} alt={project.projectName} className="proj-preview" />
                    <a href="#">View Project on Github</a>

                </div>
                
            </div>





            
        </div>
    );
}

