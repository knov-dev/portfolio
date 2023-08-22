
const ProjectCard = ({project}) =>{
    return(
        <div className="card" key={project.name}>
            <img src={require(project.img)}/>
            <h2 className="card-title">{project.name}</h2>
            <p className="card-body">{project.description}</p>
            <a href={project.url} className="button" ></a>
        </div>
    );
}

export default ProjectCard;