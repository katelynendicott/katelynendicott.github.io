    
    
    
    
    
    const DesignProjectDetails = ({ project }) => {
        return (
        <div className="code-project-details">
            {/* Header section */}
            <h2>{project.projectName}</h2>
            <h4>{project.tagLine}</h4>
            <div>{project.tags}</div>
            <p>{project.overview}</p>
    
            <div className="project-details">
                {/* Technologies Used */}
                <div className="technologies">
                    <h3>Technologies Used:</h3>
                    <ul>
                    {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                    </ul>
                </div>
                {/* Key Features */}
                <div className="key-features">
                    <h3>Key Features:</h3>
                    <ul>
                        {project.keyFeatures.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>
                {/* Challenges and Solutions */}
                {project.challenges && (
                    <div className="challenges-solutions">
                    <h3>Challenges and Solutions:</h3>
                    <ul>
                        {project.challenges.map((challenge) => (
                        <li key={challenge.description}>
                            <h4>Challenge:</h4>
                            <p>{challenge.description}</p>
                            <ul>
                            {challenge.solutions.map((solution) => (
                                <li key={solution.description}>Solution: {solution.description}</li>
                            ))}
                            </ul>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
                {/* Project Image (if available) */}
                {project.image && (
                    <img src={project.image} alt={project.name} />
                )}
                {/* Link to project (if available) */}
                {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                    </a>
                )}
                {/* outcome */}
                <div>
                    <p>{project.outcome}</p>
                </div>
            </div>
        </div>
        );
    };
    
    export default CodeProjectDetails;
    