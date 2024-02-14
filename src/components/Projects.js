import { Container, Col, Row, Nav } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-imgs/projImg1.png";
import projImg2 from "../assets/img/project-imgs/projImg2.png";
import projImg3 from "../assets/img/project-imgs/projImg3.png";
import projImg4 from "../assets/img/project-imgs/projImg4.png";
import projImg5 from "../assets/img/project-imgs/projImg5.png";
import projImg6 from "../assets/img/project-imgs/projImg6.png";
import projImg7 from "../assets/img/project-imgs/projImg7.png";
import projImg8 from "../assets/img/project-imgs/projImg8.png";
import projImg9 from "../assets/img/project-imgs/projImg9.png";

//sections will be coding, data analysis, design
export const Projects = () => {

    const projectData = [
        {
            category: "code",
            title: "GeoLocation API",
            tags: ["C#", "REST API", ".NET Framework","JSON", "SQL" ,"JavaScript", "HTML", "CSS"],
            description: "Full-Stack Development",
            imgUrl: projImg1
        },
        {
            category: "data",
            title: "MLB Player Analysis",
            tags: ["Data Analysis", "Tableau", "Data Cleaning"],
            description: "Data Analysis",
            imgUrl: projImg2
        },
        {
            category: "design",
            title: "Admin Page UX",
            tags: ["Agile", "Figma"],
            description: "UX Design",
            imgUrl: projImg3
        },
        {
            category: "design",
            title: "Verdi Website Design",
            tags: ["Brand Design", "Website Design", "SquareSpace"],
            description: "Brand & Website Design",
            imgUrl: projImg4
        },
        {
            category: "code",
            title: "Secret Santa",
            tags: ["Website Design", "HTML", "CSS"],
            description: "Front-end Development",
            imgUrl: projImg5
        },
        {
            category: "design",
            title: "MISA Website",
            tags: ["Website Design", "Weebly"],
            description: "Website Design",
            imgUrl: projImg6
        },
        {
            category: "design",
            title: "Kate Taylor Website",
            tags: ["Website Design", "Shopify"],
            description: "Brand & Website Design",
            imgUrl: projImg7
        },
        {
            category: "design",
            title: "Mt Baker Magazine Design",
            tags: ["Graphic Design", "Adobe InDesign"],
            description: "Graphic Design",
            imgUrl: projImg8
        },
        {
            category: "design",
            title: "AvoDough Brand Design",
            tags: ["Brand Design", "Adobe Illustrator"],
            description: "Brand Design",
            imgUrl: projImg9
        }
    ]

    //filter the projects by category
    const codingProjects = projectData.filter(project => project.category === "code");
    const dataProjects = projectData.filter(project => project.category === "data");
    const designProjects = projectData.filter(project => project.category === "design");


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
                                            projectData.map((project, idx) => {
                                                return(
                                                    <Col>
                                                        <ProjectCard
                                                    key={idx}
                                                    {...project}
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
                                                    <Col>
                                                        <ProjectCard
                                                    key={idx}
                                                    {...project}
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
                                                    <Col>
                                                        <ProjectCard
                                                    key={idx}
                                                    {...project}
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
                                                    <Col>
                                                        <ProjectCard
                                                    key={idx}
                                                    {...project}
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