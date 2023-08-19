import TypeIt from "typeit-react";
import ProgressBar from "@ramonak/react-progress-bar";

const Studies = ({activeIndex}) => {

    const titleDelay = 1000;
    const descDelay = 3000;
    const typeItSpeed = 1;

    return (
        <div id="carousel-studies" className={`carousel-item ${activeIndex === 0 ? "visible" : "hidden"}`}>
            <div className="studies">
                <h1><TypeIt options={{
                    startDelay: 500,
                    cursor: false,
                    lifeLike: false,
                    speed: typeItSpeed,
                    strings: "Studies",
                    waitUntilVisible: true,
                    afterComplete: function (instance) {
                        instance.destroy();
                    }
                }}/>
                </h1>
                <div className="hnd" style={{padding: 10}}>
                    <h3 className="title"><TypeIt options={{
                        startDelay: titleDelay,
                        speed: typeItSpeed,
                        cursor: false,
                        lifeLike: false,
                        strings: "Software Development HND",
                        waitUntilVisible: true,
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                        <TypeIt className="courseDate" style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "2021-2023",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                lifeLike: false,
                                cursor: false,
                                strings: "- Two Year SCQF 8 at Edinburgh College",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Advanced programming techniques in Java and PHP",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Object-oriented Analysis and Design",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Relational databases and server applications",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Unit testing / Troubleshooting",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                    </div>
                </div>
                <div className="npa" style={{padding: 10}}>
                    <h3 className="title"><TypeIt options={{
                        cursor: false,
                        lifeLike: false,
                        startDelay: titleDelay,
                        speed: typeItSpeed,
                        strings: "Software Development and Web NPA",
                        waitUntilVisible: true,
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "2020-2021",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                lifeLike: false,
                                cursor: false,
                                strings: "- SCQF 6 one year programming course",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Basic OOP concepts in Python and C#",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- SQL and initial database knowledge",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Understanding of computer systems and hardware",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                    </div>
                </div>
                <div className="na" style={{padding: 10}}>
                    <h3 className="title"><TypeIt options={{
                        cursor: false,
                        lifeLike: false,
                        startDelay: titleDelay,
                        speed: typeItSpeed,
                        strings: "Social Software and Computing NA",
                        waitUntilVisible: true,
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                        <TypeIt style={{marginLeft: 50}} options={{
                            lifeLike: false,
                            cursor: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "2019-2020",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                lifeLike: false,
                                cursor: false,
                                strings: "- SCQF 4 one year initiation course",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Basics of technology and applications",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                cursor: false,
                                lifeLike: false,
                                strings: "- First contact with programming in VBasic",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Studies;