const CarouselItem = ({card}) => {
    return (
        <div className="carousel-item">
            <h1>{card.id}</h1>
            {card.content}
        </div>
    );

}

export default CarouselItem;