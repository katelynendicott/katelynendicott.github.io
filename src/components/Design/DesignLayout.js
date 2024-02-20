import React from 'react';

import { useEffect } from 'react';



import {DesignBanner} from '././DesignBanner'

import 'bootstrap/dist/css/bootstrap.min.css'




export const DesignLayout = ({ project }) => {


    const handleScroll = () => {
        const targetDiv = document.getElementById('code-target-div');
        if (targetDiv) {
          const targetY = targetDiv.offsetTop; // Get the target div's distance from the top
          window.scrollTo(0, targetY); // Scroll to that position
        }
    };

    


    return (
        <div className="design-page">
            
            <DesignBanner project={project} handleScroll={handleScroll}/>

            

            



            {/* BEFORE IMAGES */}

            {project.beforeImages &&  (
            <div className='before-imgs scroll-to-section' id="code-target-div">
    
                    <h2 >Before</h2>
                    <div>
                    
                        {project.beforeImages.map((image, imageidx) => (
                            <img src={require(`../../assets/img/design-projects/${image}`)} alt={project.projectName}  />
                        ))}
                    </div>
            </div>
            )}

            {/* WIREFRAME IMGS */}

            {project.wireframes &&  (
            <div className='wireframes'>
                
                    
                    <div>
                        <h2 className='h2-in-div'>Wireframes</h2>

                        {project.wireframes.map((image, imageidx) => (
                            <img src={require(`../../assets/img/design-projects/${image}`)} alt={project.projectName}  />
                        ))}
                    </div>
                
            </div>
            )}
             {/* LAYOUT IMAGE */}
             {project.layoutPreview &&  (
            <div className='layout-preview'>     
                    <div>
                        <img src={require(`../../assets/img/design-projects/${project.layoutPreview}`)} alt={project.projectName}  />
                    </div>
            </div>
            )}



            {/* FINAL IMAGES */}
            {project.finalImages &&  (
            <div className='final-images'>
                
                    <h2>Final Design</h2>
                    <div>
                        {project.finalImages.map((image, imageidx) => (
                            <img src={require(`../../assets/img/design-projects/${image}`)} alt={project.projectName}  />
                        ))}
                    </div>
                
            </div>
            )}



            {/* IMPACT */}
            {project.impact && (
            <div className='impact'>
                
                <div>
                    <h2 className='h2-in-div'>Impact</h2>
                    <p>{project.impact}</p>
                </div>
            </div>
            )}





            {/* DESIGN PROJECT LINK */}
            {project.previewImg &&  project.link && (
            <div className='linksection'>
                <h2>View Live</h2>
                <div className='project-link-section'>
                    
                    <img className="page-preview"src={require(`../../assets/img/project-imgs/${project.previewImg}`)} alt={project.projectName}  />
                    
                    <div >
                        <a  className='link-proj-btn' target="_blank" href={project.link}>View Project</a>
                    </div>

                </div>
                
            </div>
            )}





            
        </div>
    );
}

