import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Skills = () => {
    const SkillsContent = [
        {
            title: "Front-end",
            tags: ["JavaScript", "React.js", "Bootstrap","HTML","CSS"]
        },
        {
            title: "Back-end",
            tags: ["C#",".NET Framework", "REST API", "Python"]
        },
        {
            title: "Data",
            tags: ["SQL","T-SQL", "Tableau", "JSON"]
        },
        {
            title: "Web Design",
            tags: ["Figma","Illustrator", "Responsive Web Design", "Brand Design"]
        }

    ]



    return (
        <section className='skills'>
            <div className='skill-bx'>
                <h2>
                    Skills
                </h2>
                <p>My passion is the intersection between creativity and technology.</p>
                <div className='skill-grid'>
                    <Row xs={1} md={2} className="g-4">
                        {SkillsContent.map((category, idx) => (
                            <Col key={idx}>
                            <Card>
                                <Card.Body>
                                <Card.Title>{category.title}</Card.Title>
                                <div className='tags'>
                                    {category.tags.map((tag, tagIdx) =>(
                                        <span key={tagIdx} className="tag">{tag}</span>
                                    ))}
                                </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>

                </div>
                
            </div>
        </section>
        


        
    )

}

