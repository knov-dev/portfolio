import "./projects.json";
const ProjectSlider =() =>{

    return (
        <div className="projects-container">

            {
                Projects.map((project) =>
                    <div className="card" key={project.name} style={{padding: 50}}>
                        <a href={project.url} target='_blank'>
                            <img className="cardimg" src={project.img} alt=""/>
                            <div>
                                <h3>{project.name}</h3>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
    );
}

export default ProjectSlider;