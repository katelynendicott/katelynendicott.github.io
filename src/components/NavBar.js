import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
//do this when you get logo and nav icons... make sure to replace empty src with these
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Link } from 'react-router-dom';



import { act } from "react-dom/test-utils";


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

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
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a id="linkedin" href='https://www.linkedin.com/in/katelyn-endicott/'><img src={navIcon1} alt='Linkedin'></img></a>
                <a id="git" href='https://github.com/katelynendicott'><img src={navIcon2} alt='GitHub'></img></a>
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