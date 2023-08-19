import TypeIt from "typeit-react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = ({activeIndex}) => {
    const titleDelay = 1000;
    const descDelay = 2800;
    const typeItSpeed = 1;
    return (
        <div id="carousel-skills" className={`carousel-item ${activeIndex === 2 ? "visible" : "hidden"}`}>
            <div className="skills">
                <h1><TypeIt options={{
                    startDelay: 500,
                    cursor: false,
                    lifeLike: false,
                    speed: typeItSpeed,
                    strings: "Dev-Skills",
                    waitUntilVisible: true
                }}/>
                </h1>
                <div className="skills-container">
                    <div className="languages" style={{padding: 10}}>
                        <h3 className="title" style={{textDecoration: "underline", marginBottom: 5}}><TypeIt options={{
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            cursor: false,
                            lifeLike: false,
                            strings: "Programming Languages",
                            waitUntilVisible: true,
                        }}/>
                        </h3>
                        <div className="languages-list">
                            <div className="programming-language">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Java",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={80}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="programming-language">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        cursor: false,
                                        lifeLike: false,
                                        strings: "- PHP",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={70}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="programming-language">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        cursor: false,
                                        lifeLike: false,
                                        strings: "- Python",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={50}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="programming-language">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        cursor: false,
                                        lifeLike: false,
                                        strings: "- C#",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={45}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="frameworks" style={{padding: 10}}>
                        <h3 className="title" style={{textDecoration: "underline", marginBottom: 5}}><TypeIt options={{
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            cursor: false,
                            lifeLike: false,
                            strings: "Frameworks",
                            waitUntilVisible: true,
                        }}/>
                        </h3>
                        <div className="framework-list">
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- React.js",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={50}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Django",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={45}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Express.js",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={30}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Node.js",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={30}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Unity",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={25}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="utils" style={{padding: 10}}>
                        <h3 className="title" style={{textDecoration: "underline", marginBottom: 5}}><TypeIt options={{
                            startDelay: titleDelay,
                            speed: typeItSpeed,
                            cursor: false,
                            lifeLike: false,
                            strings: "Utils",
                            waitUntilVisible: true,
                        }}/>
                        </h3>
                        <div className="framework-list">
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Relational DBs",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={75}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Version Control",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={70}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- QA",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={65}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Unit Testing",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={50}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                            <div className="framework-item">
                                <p>
                                    <TypeIt options={{
                                        startDelay: descDelay,
                                        lifeLike: false,
                                        cursor: false,
                                        strings: "- Documentation",
                                        speed: typeItSpeed,
                                        waitUntilVisible: true
                                    }}/>
                                </p>
                                <ProgressBar
                                    completed={40}
                                    bgColor="#3C2CA7FF"
                                    transitionDuration=""
                                    animateOnRender={true}
                                    maxCompleted={100}
                                    width={250}
                                />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="soft-skills">
                    <h1><TypeIt options={{
                        startDelay: 500,
                        cursor: false,
                        lifeLike: false,
                        speed: typeItSpeed,
                        strings: "Soft-skills",
                        waitUntilVisible: true
                    }}/>
                    </h1>
                    <div className="softSkillsContainer">
                        <div className="languages" style={{padding: 10}}>
                            <div className="languages-list">
                                <div className="programming-language comms">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            lifeLike: false,
                                            cursor: false,
                                            strings: "- Communication",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={97}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                                <div className="programming-language prSolving">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            cursor: false,
                                            lifeLike: false,
                                            strings: "- Problem Solving",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={90}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                                <div className="framework-item prjManag">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            lifeLike: false,
                                            cursor: false,
                                            strings: "- Project Management",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={85}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                                <div className="programming-language teamwork">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            cursor: false,
                                            lifeLike: false,
                                            strings: "- Teamwork",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={85}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                                <div className="framework-item crThink">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            lifeLike: false,
                                            cursor: false,
                                            strings: "- Critical Thinking",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={75}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="frameworks" style={{padding: 10}}>
                            <div className="framework-list">
                                <div className="framework-item accountability">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            lifeLike: false,
                                            cursor: false,
                                            strings: "- Accountability",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={95}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                                <div className="programming-language creativity">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            cursor: false,
                                            lifeLike: false,
                                            strings: "- Creativity",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={87}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                                <div className="framework-item timeManagement">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            lifeLike: false,
                                            cursor: false,
                                            strings: "- Time Management",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={85}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                                <div className="framework-item leadership">
                                    <p>
                                        <TypeIt options={{
                                            startDelay: descDelay,
                                            lifeLike: false,
                                            cursor: false,
                                            strings: "- Leadership",
                                            speed: typeItSpeed,
                                            waitUntilVisible: true
                                        }}/>
                                    </p>
                                    <ProgressBar
                                        completed={45}
                                        bgColor="#3C2CA7FF"
                                        transitionDuration=""
                                        animateOnRender={true}
                                        maxCompleted={100}
                                        width={250}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Skills;