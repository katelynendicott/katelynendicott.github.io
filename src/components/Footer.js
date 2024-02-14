import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
    return(
        <section className="footer">
            <div className="svg-container-footer">
                <div className="footer-wave"></div>
            </div>

            <Container className="footer-tx">
                <Row >
                    <Col id="left">
                        <h4>Contact</h4>
                        <p>katelyn.endicott@gmail.com</p>
                    </Col>
                    <Col id="center">
                    <div className="made-by">
                        <p>2024 Katelyn Endicott</p>
                    </div>
                    </Col>
                    <Col id="right">
                        <h4>Resume</h4>
                        <p>download</p>
                    </Col>


                </Row>


            </Container>

            <div>
                
            </div>

        </section>
    )
}