import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const CodeBanner = ({project}) => {
    

    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={10} xl={10}>
                        <span className="tagline">{project.tagLine}</span>
                        <h1>{project.projectName}</h1>
                        <p>{project.overview} </p>


                        <div className='keyFeatures'>
                            {project.keyFeatures.map((feature, featureIdx) => (
                            <span key={featureIdx} className="tag-proj">{feature}</span>
                            ))}
                        </div>
                        <div className='technologies'>
                            {project.tags.map((technologies, technologiesIdx) => (
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
