import CarouselItem from "./CarouselItem.js";
import {useState} from "react";
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs";
import {BiRadioCircle,BiRadioCircleMarked} from "react-icons/bi";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = [
        {
            id: 0,
            content: "<h1> hello world </h1>"
        },
        {
            id: 1,
            content: "<div> hello world </div>"
        },
        {
            id: 2,
            content: "<div> hello world </div>"
        }
    ]
    return (
        <div className="carousel">
            <div className="inner" style={{transform: `translate:(-${activeIndex * 100});`}}>
                {cards.map((card)=>{
                    return <CarouselItem card={card}/>
                })}
            </div>

            <div className="carousel-buttons">
                <BsFillArrowLeftSquareFill size={30}/>
                <div className="indicator">
                    ...
                </div>
                <BsFillArrowRightSquareFill size={30}/>
            </div>
        </div>
    );

}

export default Carousel;