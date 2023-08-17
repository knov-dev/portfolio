import TypeIt from "typeit-react";

const Work = ({activeIndex}) => {
    return (
        <div className={`carousel-item ${activeIndex === 1 ? "active" : "hidden"}`}>
            <div className="work">
                <h1><TypeIt options={{
                    cursor: false,
                    lifeLike: false,
                    speed: 1,
                    strings: "Work",
                    waitUntilVisible: true
                }}/>
                </h1>
                <div className="code" style={{padding: 25}}>
                    <h3 className="title"><TypeIt options={{
                        startDelay: 700,
                        speed: 1,
                        cursor: false,
                        lifeLike: false,
                        strings: "CoDE Pod Management",
                        waitUntilVisible: true,
                    }}/>
                    </h3>
                    <h4>
                        <TypeIt className="position" style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: 2000,
                            speed: 1,
                            strings: "PowerBI Developer",
                            waitUntilVisible: true
                        }}/>
                        <TypeIt className="courseDate" style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: 2000,
                            speed: 1,
                            strings: "Mar 2023 - Present",
                            waitUntilVisible: true
                        }}/>
                    </h4>
                    <div className="work-list">
                        <p>
                            <TypeIt options={{
                                startDelay: 2500,
                                lifeLike: false,
                                cursor: false,
                                strings: "- Working with the Microsoft Power App suite",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 3000,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Create automated actions for the clients to receive information about their related projects",
                                speed: 1
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 3500,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Connect the databases with the Power Automate flow.",
                                speed: 1
                            }}/>
                        </p>
                    </div>
                    <h4>
                        <TypeIt className="position" style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: 2000,
                            speed: 1,
                            strings: "PowerBI Developer",
                            waitUntilVisible: true
                        }}/>
                        <TypeIt className="courseDate" style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: 2000,
                            speed: 1,
                            strings: "Mar 2023 - Present",
                            waitUntilVisible: true
                        }}/>
                    </h4>

                    <div className="work-list">
                        <p>
                            <TypeIt options={{
                                startDelay: 2500,
                                lifeLike: false,
                                cursor: false,
                                strings: "- Working with the Microsoft Power App suite",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 3000,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Create automated actions for the clients to receive information about their related projects",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 3500,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Connect the databases with the Power Automate flow.",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                    </div>
                </div>
                <div className="greggs" style={{padding: 25}}>
                    <h3 className="title"><TypeIt options={{
                        cursor: false,
                        lifeLike: false,
                        startDelay: 2500,
                        speed: 1,
                        strings: "Software Development and Web NPA",
                        waitUntilVisible: true
                    }}/>
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: 3800,
                            speed: 1,
                            strings: "2020-2021",
                            waitUntilVisible: true
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: 4300,
                                lifeLike: false,
                                cursor: false,
                                strings: "- SCQF 6 one year programming course",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 4800,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Basic OOP concepts in Python and C#",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 5300,
                                cursor: false,
                                lifeLike: false,
                                strings: "- SQL and initial database knowledge",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 5800,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Understanding of computer systems and hardware",
                                speed: 1,
                                waitUntilVisible: true
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
                        waitUntilVisible: true
                    }}/>
                        <TypeIt style={{marginLeft: 50}} options={{
                            lifeLike: false,
                            cursor: false,
                            startDelay: 5700,
                            speed: 1,
                            strings: "2019-2020",
                            waitUntilVisible: true
                        }}/>
                    </h3>
                    <div className="studies-list">
                        <p>
                            <TypeIt options={{
                                startDelay: 6000,
                                lifeLike: false,
                                cursor: false,
                                strings: "- SCQF 4 one year initiation course",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 6500,
                                cursor: false,
                                lifeLike: false,
                                strings: "- Basics of technology and applications",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                        <p>
                            <TypeIt options={{
                                startDelay: 7000,
                                cursor: false,
                                lifeLike: false,
                                strings: "- First contact with programming in VBasic",
                                speed: 1,
                                waitUntilVisible: true
                            }}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Work;