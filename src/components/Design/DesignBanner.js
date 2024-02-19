import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';


export const DesignBanner = ({project, handleScroll}) => {


    return (
        <section className="project-banner design-banner" id="home">
            <Container>
                <Row className="all-banner">
                    <Col className="left-banner" xs={12} md={9} xl={9}>
                        <span className="tagline">{project.tagLine}</span>
                        <h1>{project.projectName}</h1>
                        {project.overview && (<p>{project.overview} </p>)}

                        

                        <Link className="banner-btn" onClick={handleScroll}>View More <ArrowRightCircle id="arrow" size={25} /></Link>
                    </Col>
                    <Col>
                    <div className="banner-features-tech right-banner">
                        {project.keyFeatures && (
                        <div className='keyFeatures'>
                            <h5>Key Tasks</h5>
                            {project.keyFeatures.map((feature, featureIdx) => (
                            <span key={featureIdx} className="banner-tag">{feature}</span>
                            ))}
                        </div>
                        )}
                        {project.tags && (
                        
                        <div className='technologies'>
                            <h5>Technologies Used</h5>
                            {project.tags.map((technologies, technologiesIdx) => (
                            <span key={technologiesIdx} className="banner-tag">{technologies}</span>
                            ))}
                        </div>
                        )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="svg-container-alt">
                <div className="green-wave"></div>
            </div>
        </section>
    )
}
