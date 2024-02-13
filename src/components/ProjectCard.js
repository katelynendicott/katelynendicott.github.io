import { Col} from "react-bootstrap";
export const ProjectCard = ({title, tags, description, imgUrl}) => {
    return (
        <Col >
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} className="proj-img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <div className='tags'>
                        {tags.map((tag, tagIdx) =>(
                            <span key={tagIdx} className="tag">{tag}</span>
                        ))}
                    </div>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}