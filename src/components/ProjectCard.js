import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";



export const ProjectCard = ({ project, handleClick }) => {

    const getBackgroundColor = () => {
        switch (project.type) {
            case "code":
                return "#D0F4DE";
            case "data":
                return "#FCF6BD";
            case "design":
                return "#A9DEF9";
            default:
                return "#ffffff"; // Default color if category is not recognized
        }
    };


    

    return (
        <>
            
            <Col>
            <div className={`proj-imgbx category-${project.type}`} style={{ backgroundColor: getBackgroundColor() }}>
                <img src={require(`../assets/img/project-imgs/${project.previewImg}`)} alt={project.projectName} className="proj-img" />
                <div className="proj-txtx">
                    <h4>{project.projectName}</h4>
                    <span className="proj-description">{project.tagLine}</span>
                    <div className='tags'>
                        {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="tag-proj">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="proj-btn">
                    <Link  to='/projectpage' onClick={() => handleClick(project)}>
                        See More
                    </Link>
                </div>
            </div>
            </Col>
            
                
        </>
    )
}
