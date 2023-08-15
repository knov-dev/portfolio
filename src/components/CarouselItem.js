const CarouselItem = ({item}) => {
    return (
        <div className="carousel-item">
            <div></div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    );

}

export default CarouselItem;