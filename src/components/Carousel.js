import Studies from "./Studies.js";
import Work from "./Work";
import Skills from "./Skills";
import {useState} from "react";
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";
import {BiRadioCircle, BiRadioCircleMarked} from "react-icons/bi";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 2;

        } else if (newIndex >= 3) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel">
            <div className="inner" style={{transform: `translate:(-${activeIndex * 100}%)`}}>
                <Studies activeIndex={activeIndex}/>
                <Work activeIndex={activeIndex}/>
                <Skills activeIndex={activeIndex}/>
            </div>

            <div className="carousel-buttons">
                <button onClick={() => updateIndex(activeIndex - 1)}><BsFillArrowLeftSquareFill size={30}/></button>
                <div className="indicators">
                    <button onClick={() => {
                        updateIndex(activeIndex);
                    }} className="indicator-buttons">
                        {activeIndex === 0 ? <BiRadioCircleMarked/> : <BiRadioCircle/>}
                        {activeIndex === 1 ? <BiRadioCircleMarked/> : <BiRadioCircle/>}
                        {activeIndex === 2 ? <BiRadioCircleMarked/> : <BiRadioCircle/>}
                    </button>
                </div>
                <button onClick={() => updateIndex(activeIndex + 1)}><BsFillArrowRightSquareFill size={30}/>
                </button>
            </div>
        </div>
    );

}

export default Carousel;