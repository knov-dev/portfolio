import Projects from "../assets/projects.json"
import ProjectCard from "./ProjectCard";

const ProjectSlider = () => {

    return (
        <div className="projects-container">
            {
                Projects.map((project) =>
                    <ProjectCard project={project}/>
                )
            }
        </div>
    );
}

export default ProjectSlider;