import CarouselItem from "./CarouselItem.js"
import {useState} from "react";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            title: "Studies",
            description: "blabla",
            icon: "...",
        },
        {
            title: "Work",
            description: "blabla",
            icon: "...",
        },
        {
            title: "Skills",
            description: "blabla",
            icon: "...",
        }
    ];
    return (
        <div className="carousel">
            <div className="inner" style={{transform: `translate:(-${activeIndex *100});`}}>
                {items.map((item) => {
                    return <CarouselItem item={item}/>
                })}
            </div>
        </div>
    );

}

export default Carousel;