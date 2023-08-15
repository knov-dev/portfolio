const Work = ({activeIndex}) => {
    return (
        <div className={`carousel-item ${activeIndex === 1 ? "active" : "hidden"}`}>
            <div className="work">
                <h1>Work</h1>
            </div>
        </div>
    );

}

export default Work;