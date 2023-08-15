const Skills = ({activeIndex}) => {
    return (
        <div className={`carousel-item ${activeIndex === 2 ? "active" : "hidden"}`}>
            <div className="skills">
                <h1>Skills</h1>
            </div>
        </div>
    );

}

export default Skills;