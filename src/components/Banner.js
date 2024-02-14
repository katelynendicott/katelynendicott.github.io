import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer.....", "Data Analyst.....", "UX Designer....."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 1100;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={10} xl={10}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi, I'm a `}<span className="wrap">{text}</span></h1>
                        <p>Welcome to my portfolio! I'm Katelyn, a passionate software developer based in the Greater Seattle area.
                            I thrive on the intersection of creativity and technology, channeling my love for coding into visually appealing creations.
                            Whether it's crafting dynamic websites or captivating data visualizations, I eagerly tackle any challenge, leveraging my
                            creativity to bring fresh ideas to life. </p>
                        <button onClick={() => console.log("View More")}>View More <ArrowRightCircle size={25} /></button>
                    </Col>
                </Row>
            </Container>
            <div className="wavy-line">
                
            </div>
        </section>
    )
}
