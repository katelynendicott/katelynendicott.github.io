// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

// import Data from '../projects.json'

export const ProjectBanner = ({selectedProject}) => {
    

    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={10} xl={10}>
                        <span className="tagline">{selectedProject.tagLine}</span>
                        <h1>{selectedProject.projectName}</h1>
                        <p>{selectedProject.overview} </p>


                        <div className='keyFeatures'>
                            {selectedProject.keyFeatures.map((feature, featureIdx) => (
                            <span key={featureIdx} className="tag-proj">{feature}</span>
                            ))}
                        </div>
                        <div className='technologies'>
                            {selectedProject.tags.map((technologies, technologiesIdx) => (
                            <span key={technologiesIdx} className="tag-proj">{technologies}</span>
                            ))}
                        </div>

                        <button onClick={() => console.log("View More")}>View More <ArrowRightCircle id="arrow" size={25} /></button>
                    </Col>
                </Row>
            </Container>
            <div className="svg-container">
                <div className="wave"></div>
            </div>
        </section>
    )
}
