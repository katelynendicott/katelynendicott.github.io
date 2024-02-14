import { Col } from "react-bootstrap";

export const ProjectCard = ({ category,title, tags, description, imgUrl }) => {

    const getBackgroundColor = () => {
        switch (category) {
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
        <Col>
        <div className={`proj-imgbx category-${category}`} style={{ backgroundColor: getBackgroundColor() }}>
            <img src={imgUrl} alt={title} className="proj-img" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span className="proj-description">{description}</span>
                <div className='tags'>
                    {tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag-proj">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="proj-btn">
                <button>
                    See More
                </button>
            </div>
        </div>
        </Col>
    )
}
