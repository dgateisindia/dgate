import "./TechnologiesHero.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import { FaArrowRight } from "react-icons/fa";

import TechnologiesCanvas from "./TechnologiesCanvas";

import { heroBg } from "../../../assets/images/Technologies/hero";

function TechnologiesHero() {

    const heroRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline();

            tl.from(".tp-breadcrumb", {

                x: -40,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",

            })

            .from(".tp-title", {

                y: 45,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",

            }, "-=.2")

            .from(".tp-line", {

                width: 0,
                duration: 0.5,
                ease: "power2.out",

            })

            .from(".tp-text", {

                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",

            }, "-=.2")

            .from(".tp-buttons", {

                y: 25,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",

            }, "-=.3")

            .from(".tp-right", {

                scale: 1.08,
                opacity: 0,
                duration: 1,
                ease: "power3.out",

            }, "-=.5");

        }, heroRef);

        return () => ctx.revert();

    }, []);


    /* ==========================================
       SCROLL TO TECHNOLOGY GRID
    ========================================== */

    const handleExploreStack = () => {

        const technologySection =
            document.getElementById("technology-stack");

        if (technologySection) {

            technologySection.scrollIntoView({

                behavior: "smooth",
                block: "start",

            });

        }

    };


    return (

        <section
            className="tp-hero"
            ref={heroRef}
        >

            <div className="tp-container">

                {/* ================= LEFT ================= */}

                <div className="tp-left">

                    <div className="tp-breadcrumb">

                        <Link to="/">
                            Home
                        </Link>

                        <span>›</span>

                        <span>
                            Technologies
                        </span>

                    </div>


                    <h1 className="tp-title">

                        Technologies

                        <span>
                            We Leverage
                        </span>

                    </h1>


                    <div className="tp-line"></div>


                    <p className="tp-text">

                        We harness modern technologies,
                        cloud-native platforms, artificial
                        intelligence, enterprise frameworks
                        and intelligent automation to build
                        secure, scalable and future-ready
                        digital solutions that accelerate
                        business innovation.

                    </p>


                    {/* ================= BUTTON ================= */}

                    <div className="tp-buttons">

                        <button
                            className="tp-primary-btn"
                            onClick={handleExploreStack}
                        >

                            Explore Stack

                            <FaArrowRight />

                        </button>

                    </div>

                </div>


                {/* ================= RIGHT ================= */}

                <div className="tp-right">

                    <img

                        src={heroBg}

                        alt="Technologies"

                        className="tp-bg"

                    />


                    <div className="tp-overlay"></div>


                    <div className="tp-canvas">

                        <TechnologiesCanvas />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default TechnologiesHero;