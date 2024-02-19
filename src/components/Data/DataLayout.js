import React from 'react';

import { useEffect } from 'react';



import {DataBanner} from './DataBanner'

import 'bootstrap/dist/css/bootstrap.min.css'




export const DataLayout = ({ project }) => {


    const handleScroll = () => {
        const targetDiv = document.getElementById('code-target-div');
        if (targetDiv) {
          const targetY = targetDiv.offsetTop; // Get the target div's distance from the top
          window.scrollTo(0, targetY); // Scroll to that position
        }
    };

    


    return (
        <div className="code-page">
            
            <DataBanner project={project} handleScroll={handleScroll}/>

            

            {/* DATA SOURCE SECTION */}

            {project.dataSource &&  (

            <div className='data-source scroll-to-section' id="code-target-div">
                <h2>Data Source</h2>
                <div>
                
                    <p>{project.dataSource}</p>
                </div>
            </div>
            )}


            {/* KEY INSIGHTS */}
            {project.keyInsights && (
            <div className='key-insights'>
                
                <div>
                <h2 className='h2-in-div'>Key Insights</h2>
                    {project.keyInsights.map((insight, insightidx) => (
                        <p>{project.keyInsights}</p>
                    ))}
                </div>
            </div>
            )}

            {/* IMPACT */}
            {project.impact && (
            <div className='impact'>
                <h2>Impact</h2>
                <div>
                    <p>{project.impact}</p>
                </div>
            </div>
            )}
            {/* NOTES */}
            {project.note && (
            <div className='notes'>
                
                <div>
                <h2 className='h2-in-div'>Notes</h2>
                    <p>{project.note}</p>
                </div>
            </div>
            )}




            {/* Data LINK */}
            {project.previewImg &&  project.link && (
            <div className='linksection'>
                <h2>Data Visualizations</h2>
                <div className='project-link-section'>
                    
                    <img className="page-preview"src={require(`../../assets/img/project-imgs/${project.previewImg}`)} alt={project.projectName}  />
                    
                    <div className='link-proj-btn'>
                        <a target="_blank" href={project.link}>View Project on Tableau</a>
                    </div>

                </div>
                
            </div>
            )}





            
        </div>
    );
}

