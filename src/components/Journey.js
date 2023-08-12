import "./JourneyStyle.css";
import {Link} from "react-scroll";

const Journey = () => {

    const handleClick = () => {

    }

    return (
        <div className="journeyContainer">
            <div className="journeyWrapper">
                <div className="cardContainer">
                    <div className="studiesCard">

                    </div>
                    <div className="workCard">

                    </div>
                    <div className="skillsCard">

                    </div>
                </div>
                <div className="buttonContainer">
                    <Link className="btn">
                        <p>Work</p>
                    </Link>
                    <Link className="btn">
                        <p>Studies</p>
                    </Link>
                    <Link className="btn">
                        <p>Skills</p>
                    </Link>
                </div>
            </div>
        </div>);
}

export default Journey