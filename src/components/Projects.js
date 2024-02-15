import React from "react";
import { Container, Col, Row, Nav } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from "./ProjectCard";

//import data
import Data from '../projects.json'



//sections will be coding, data analysis, design
export const Projects = ({ onSelectProject }) => {

    const handleProjectClick = (project) => {
        onSelectProject(project);
    };

    //filter the projects by category
    const codingProjects = Data.filter(project => project.type === "code");
    const dataProjects = Data.filter(project => project.type === "data");
    const designProjects = Data.filter(project => project.type === "design");


    
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Projects
                        </h2>
                        <p>lorem ipson </p>
                
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Code</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Data</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Design</Nav.Link>
                            </Nav.Item>
                            </Nav>


                            <Tab.Content>
                            <Tab.Pane eventKey="first">
                                    <Row xs={1} md={1} lg={2} className="g-4">
                                    {
                                            Data.map((project, idx) => {
                                                return(
                                                    <Col key={idx}>
                                                        <ProjectCard
                                                    key={project.id}
                                                    {...project}
                                                    project={project}
                                                    handleClick={handleProjectClick}
                                                    />
                                                    </Col>
                                                )
                                            })                                   
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row xs={1} md={2} className="g-4">
                                        {
                                            codingProjects.map((project, idx) => {
                                                return(
                                                    <Col key={idx}>
                                                        <ProjectCard
                                                    key={project.id}
                                                    {...project}
                                                    project={project}
                                                    handleClick={handleProjectClick}
                                                    />
                                                    </Col>
                                                )
                                            })                                   
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row xs={1} md={2} className="g-4">
                                    {
                                            dataProjects.map((project, idx) => {
                                                return(
                                                    <Col key={idx}>
                                                        <ProjectCard
                                                    key={project.id}
                                                    {...project}
                                                    project={project}
                                                    handleClick={handleProjectClick}
                                                    />
                                                    </Col>
                                                )
                                            })                                   
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row xs={1} md={2} className="g-4">
                                    {
                                            designProjects.map((project, idx) => {
                                                return(
                                                    <Col key={idx}>
                                                        <ProjectCard
                                                    key={project.id}
                                                    {...project}
                                                    project={project}
                                                    handleClick={handleProjectClick}
                                                    />
                                                    </Col>
                                                )
                                            })                                   
                                        }
                                    </Row>
                                </Tab.Pane>
                                

                            </Tab.Content>

                        </Tab.Container>
                
                    </Col>
                </Row>
            </Container>


        </section>

    )
}