import TypeIt from "typeit-react";

const Work = ({activeIndex}) => {
    const titleDelay = 1000;
    const descDelay = 2900;
    const typeItSpeed = 1;
    return (
        <div id="carousel-work" className={`carousel-item ${activeIndex === 1 ? "visible" : "hidden"}`}>
            <div className="work">
                <h1><TypeIt options={{
                    startDelay: 500,
                    cursor: false,
                    lifeLike: false,
                    speed: typeItSpeed,
                    strings: "Work",
                    waitUntilVisible: true,
                    afterComplete: function (instance) {
                        instance.destroy();
                    }
                }}/>
                </h1>
                <div className="code" style={{padding: 10}}>
                    <h3 className="title"><TypeIt options={{
                        startDelay: titleDelay,
                        speed: typeItSpeed,
                        cursor: false,
                        lifeLike: false,
                        strings: "CoDE Pod Management",
                        waitUntilVisible: true,
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                    </h3>
                    <h4 className="position">
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "PowerBI Developer",
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
                            strings: "Mar 2023 - Present",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h4>
                    <div className="work-list">
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                lifeLike: false,
                                cursor: false,
                                strings: "- Working with the Microsoft Power App suite",
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
                                strings: "- Create automated actions for the clients to receive information about their projects",
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
                                strings: "- Connect the databases with the Power Automate flow.",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                    </div>
                    <h4 className="position">
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "Front-Desk Receptionist",
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
                            strings: "Oct 2022 - Present",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h4>
                    <div className="work-list">
                        <p>
                            <TypeIt options={{
                                startDelay: descDelay,
                                lifeLike: false,
                                cursor: false,
                                strings: "- Manage incoming calls, messages, mail, packages and deliveries",
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
                                strings: "- Administrative tasks, filling and data entry",
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
                                strings: "- Ensure security protocols to manage personal and sensitive data",
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
                                strings: "- Customer problem solving, providing information and support",
                                speed: typeItSpeed,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}/>
                        </p>
                    </div>
                </div>
                <div className="greggs" style={{padding: 10}}>
                    <h3 className="title"><TypeIt options={{
                        cursor: false,
                        lifeLike: false,
                        startDelay: titleDelay,
                        speed: typeItSpeed,
                        strings: "Greggs PLC",
                        waitUntilVisible: true,
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                    </h3>
                    <h4 className="position">
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "Senior Team Member",
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
                            strings: "May 2021 - Oct 2022",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h4>
                    <h4 className="position">
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "Sales Team Member",
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
                            strings: "Dec 2019 - May 2021",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h4>
                </div>
                <div className="wetherspoons" style={{padding: 10}}>
                    <h3 className="title"><TypeIt options={{
                        cursor: false,
                        lifeLike: false,
                        startDelay: titleDelay,
                        speed: typeItSpeed,
                        strings: "JD Wetherspoons",
                        waitUntilVisible: true,
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    }}/>
                    </h3>
                    <h4 className="position">
                        <TypeIt style={{marginLeft: 50}} options={{
                            cursor: false,
                            lifeLike: false,
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            strings: "Kitchen Associate",
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
                            strings: "Nov 2018 - Dec 2019",
                            waitUntilVisible: true,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        }}/>
                    </h4>
                </div>
            </div>
        </div>
    );

}

export default Work;