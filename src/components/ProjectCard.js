const ProjectCard = ({project}) => {
    return (
        <div className="card" style={{backgroundImage: 'url("' + project.img + '")', backgroundSize: "cover"}}
             key={project.name}>
            <div className="card-content">
                <h2 className="card-title">{project.name}</h2>
                <p className="card-body">{project.description}</p>
                <a href={project.url} className="button"></a>
            </div>
        </div>
    );
}

export default ProjectCard;