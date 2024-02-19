import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
//do this when you get logo and nav icons... make sure to replace empty src with these
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Link } from 'react-router-dom';

//location
import { useLocation } from "react-router-dom";




export const NavBar = () => {

    const location = useLocation();
    const isActiveLink = (path) => location.pathname === path;


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            };
        
            window.addEventListener('scroll', onScroll);
        
            return () => window.removeEventListener('scroll', onScroll);
        }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };



    return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Brand as={Link} to='/home'>
            <h2>Katelyn Endicott</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className={isActiveLink("/home") ? 'active navbar-link' : 'navbar-link'}>home</Nav.Link>
            <Nav.Link as={Link} to="/skills" className={isActiveLink("/skills") ? 'active navbar-link' : 'navbar-link'}>skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={isActiveLink("/projects") ? 'active navbar-link' : 'navbar-link'}>projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a target="_blank" id="linkedin" href='https://www.linkedin.com/in/katelyn-endicott/'><img src={navIcon1} alt='Linkedin'></img></a>
                <a target="_blank" id="git" href='https://github.com/katelynendicott'><img src={navIcon2} alt='GitHub'></img></a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
                <span>
                    Lets Connect
                </span>
            </button>
        </span>
        </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}

