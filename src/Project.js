// import './App.css'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import project from "./projects.json"

import CodeProjectDetails from './components/CodeProjectPage';
import DataProjectDetails from './components/DataProjectPage';
import DesignProjectDetails from './components/DesignProjectPage';


// RenderProjectContent component (defined separately for clarity)
const RenderProjectContent = ({ type, project }) => {
    switch (type) {
        case 'code':
            return <CodeProjectDetails project={project} />;
        case 'data':
            return <DataProjectDetails project={project} />;
        case 'design':
            return <DesignProjectDetails project={project} />;
        default:
            return <p>Project type not found</p>;
        }
    };

const ProjectDetails = ({ project }) => (
    <div>
    <RenderProjectContent type={project.type} project={project} />
    </div>
);

function Project({id}) {
    // Fetch project data based on ID
    const project = projects.find((project) => project.id === id);
    if (!project) return <p>Project not found</p>;


    return (
    <div className="Project">
        <NavBar/>
        <ProjectDetails project={project} />
        <Footer/>
    </div>
    );
}

export default App;

