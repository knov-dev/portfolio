import TypeIt from "typeit-react";

const Studies = ({activeIndex}) => {


    return (
        <div className={`carousel-item ${activeIndex === 0 ? "active" : "hidden"}`}>
            <div className="studies">
                <h1><TypeIt options={{
                    cursor: false,
                    lifeLike: false,
                    speed: 1,
                    strings: "Studies",
                    waitUntilVisible: true,
                    afterComplete: function (instance) {
                        instance.destroy();
                    }
                }}/></h1>
                <div className="hnd" style={{padding: 25}}>
                    <h3 className="title"><TypeIt options={{
                        startDelay: 700,
                        speed: 1,
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
                            startDelay: 2000,
                            speed: 1,
                            strings: "2021-2023",
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: 2500,
                                lifeLike: false,
                                cursor: false,
                                strings: "- Two Year SCQF 8 at Edinburgh College",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 3000,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Advanced programming techniques in Java and PHP",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 3500,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Object-oriented Analysis and Design",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 4000,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Relational databases and server applications",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 4500,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Unit testing / Troubleshooting",
                                speed: 1
                            }}/>
                        </p>
                    </div>
                </div>
                <div className="npa" style={{padding: 25}}>
                    <h3 className="title"><TypeIt options={{
                        cursor: false,
                        lifeLike: false,
                        startDelay: 2500,
                        speed: 1,
                        strings: "Software Development and Web NPA",
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: 3800,
                            speed: 1,
                            strings: "2020-2021",
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: 4300,
                                lifeLike: false,
                                cursor: false,
                                strings: "- SCQF 6 one year programming course",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 4800,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Basic OOP concepts in Python and C#",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 5300,
                                cursor: false,
                                lifeLike: false,
                                strings: "- SQL and initial database knowledge",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 5800,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Understanding of computer systems and hardware",
                                speed: 1
                            }}/>
                        </p>
                    </div>
                </div>
                <div className="na" style={{padding: 25}}>
                    <h3 className="title"><TypeIt options={{
                        cursor: false,
                        lifeLike: false,
                        startDelay: 4200,
                        speed: 1,
                        strings: "Social Software and Computing NA",
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                        <TypeIt style={{marginLeft: 50}} options={{
                            lifeLike: false,
                            cursor: false,
                            startDelay: 5700,
                            speed: 1,
                            strings: "2019-2020",
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: 6000,
                                lifeLike: false,
                                cursor: false,
                                strings: "- SCQF 4 one year initiation course",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 6500,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Basics of technology and applications",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 7000,
                                cursor: false,
                                lifeLike: false,
                                strings: "- First contact with programming in VBasic",
                                speed: 1
                            }}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Studies;