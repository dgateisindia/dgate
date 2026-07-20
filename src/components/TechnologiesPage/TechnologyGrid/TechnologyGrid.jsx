import "./TechnologyGrid.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    FaBrain,
    FaCloud,
    FaChartLine,
    FaInfinity,
    FaWifi,
    FaShieldAlt,
    FaLaptopCode,
    FaCube,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


const technologies = [

    {
        icon: <FaBrain />,
        title: "AI & Machine Learning",
        description:
            "Build intelligent applications using predictive analytics, machine learning models and AI-driven automation.",
    },

    {
        icon: <FaCloud />,
        title: "Cloud Computing",
        description:
            "Scalable cloud infrastructure and cloud-native solutions powered by modern platforms and services.",
    },

    {
        icon: <FaChartLine />,
        title: "Data Analytics",
        description:
            "Transform business data into meaningful insights through visualization, analytics and reporting.",
    },

    {
        icon: <FaInfinity />,
        title: "DevOps",
        description:
            "Accelerate software delivery using CI/CD pipelines, automation and continuous monitoring.",
    },

    {
        icon: <FaWifi />,
        title: "Internet of Things",
        description:
            "Connect smart devices and sensors for real-time monitoring, automation and intelligent operations.",
    },

    {
        icon: <FaShieldAlt />,
        title: "Cyber Security",
        description:
            "Protect digital assets with secure architecture, threat detection and compliance-driven security.",
    },

    {
        icon: <FaLaptopCode />,
        title: "Enterprise Applications",
        description:
            "Modern enterprise software solutions that improve productivity, collaboration and business processes.",
    },

    {
        icon: <FaCube />,
        title: "Emerging Technologies",
        description:
            "Explore blockchain, AR/VR, automation and next-generation technologies to drive innovation.",
    },

];
function TechnologyGrid() {

    const sectionRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            /* ================= Heading ================= */

            gsap.from(".tg-heading", {

                y: 40,

                opacity: 0,

                duration: 0.8,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: sectionRef.current,

                    start: "top 80%",

                    once: true,

                },

            });

            /* ================= Cards ================= */

            gsap.from(".tg-card", {

                y: 60,

                opacity: 0,

                duration: 0.8,

                stagger: 0.12,

                ease: "power3.out",

                clearProps: "all",

                scrollTrigger: {

                    trigger: ".tg-grid",

                    start: "top 80%",

                    once: true,

                },

            });

            ScrollTrigger.refresh();

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            className="tg-section"
            ref={sectionRef}
        >

            <div className="tg-container">

                {/* ================= Heading ================= */}

                <div className="tg-heading">

                    <span>

                        OUR TECHNOLOGIES

                    </span>

                    <h2>

                        Technologies We Leverage

                    </h2>

                    <p>

                        We combine cutting-edge technologies,
                        engineering expertise and scalable
                        digital platforms to deliver
                        innovative solutions across industries.

                    </p>

                </div>

                {/* ================= Grid ================= */}

                <div className="tg-grid">

                    {technologies.map((tech, index) => (

                        <div

                            className="tg-card"

                            key={index}

                        >

                            <div className="tg-icon">

                                {tech.icon}

                            </div>

                            <h3>

                                {tech.title}

                            </h3>

                            <p>

                                {tech.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default TechnologyGrid;