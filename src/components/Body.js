import "./BodyStyle.css";
import NET from 'vanta/dist/vanta.net.min';
import {useEffect, useRef, useState} from "react";
import Paragraph from "./Paragraph";

const Body = (props) => {

    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3c2ca7,
                backgroundColor: 0x0,
                points: 15.00,
                spacing: 20.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return (
        <>
            <div className="canvas" ref={myRef}>
            </div>
        </>
    );
}

export default Body;