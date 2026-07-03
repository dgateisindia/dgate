import "./VisionMission.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaEye } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

function VisionMission() {

    const sectionRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".vm-title", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });

            gsap.from(".vision-card", {
                x: -60,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".vm-cards",
                    start: "top 80%",
                    once: true,
                },
            });

            gsap.from(".mission-card", {
                x: 60,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".vm-cards",
                    start: "top 80%",
                    once: true,
                },
            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            className="vision-mission"
            ref={sectionRef}
        >

            <div className="vm-container">

                <div className="vm-wrapper">

                    {/* Heading */}

                    <div className="vm-title">

                        <h2>
                            OUR VISION & MISSION
                        </h2>

                        <div className="vm-line"></div>

                    </div>

                    {/* Cards */}

                    <div className="vm-cards">

                        {/* Vision */}

                        <div className="vm-card vision-card">

                            <div className="vm-icon">
                                <FaEye />
                            </div>

                            <div className="vm-content">

                                <h3>
                                    OUR VISION
                                </h3>

                                <p>
                                    To be a global leader in engineering
                                    services, delivering innovative and
                                    sustainable solutions that create
                                    lasting value for clients and
                                    communities.
                                </p>

                            </div>

                        </div>

                        {/* Mission */}

                        <div className="vm-card mission-card">

                            <div className="vm-icon">
                                <GiArcheryTarget />
                            </div>

                            <div className="vm-content">

                                <h3>
                                    OUR MISSION
                                </h3>

                                <p>
                                    To deliver exceptional engineering
                                    solutions through innovation,
                                    collaboration and commitment to
                                    excellence while accelerating digital
                                    transformation.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default VisionMission;