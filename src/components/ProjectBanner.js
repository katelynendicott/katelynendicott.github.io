// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";



export const ProjectBanner = () => {
    

    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={10} xl={10}>
                        <span className="tagline">Project Name</span>
                        <h1>project tagline</h1>
                        <p>Project description </p>
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
