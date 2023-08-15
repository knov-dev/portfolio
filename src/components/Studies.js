const Studies = ({activeIndex}) => {
    return (
        <div className={`carousel-item ${activeIndex === 0 ? "active" : "hidden"}`}>
            <div className="studies">
                <h1>Studies</h1>
            </div>
        </div>
    );

}

export default Studies;