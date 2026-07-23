import "./CareersHero.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import { FaArrowRight } from "react-icons/fa";

import CareersCanvas from "./CareersCanvas";

import { careersHero } from "../../../assets/images/Careers/hero";


function CareersHero() {

    const heroRef = useRef(null);


    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({

                defaults: {
                    ease: "power3.out",
                },

            });


            /* Breadcrumb */

            tl.from(".careers-breadcrumb", {

                x: -30,

                opacity: 0,

                duration: 0.6,

            })


            /* Title */

            .from(".careers-title", {

                y: 40,

                opacity: 0,

                duration: 0.8,

            }, "-=.2")


            /* Yellow Line */

            .from(".careers-line", {

                width: 0,

                duration: 0.5,

                ease: "power2.out",

            }, "-=.2")


            /* Description */

            .from(".careers-description", {

                y: 30,

                opacity: 0,

                duration: 0.7,

            }, "-=.2")


            /* Button */

            .from(".careers-hero-btn", {

                y: 20,

                opacity: 0,

                duration: 0.6,

            }, "-=.3")


            /* Image */

            .from(".careers-image-wrapper", {

                x: 60,

                opacity: 0,

                duration: 1,

            }, "-=.6");


        }, heroRef);


        return () => ctx.revert();

    }, []);



    /* =========================================
       SCROLL TO OPEN POSITIONS
    ========================================= */

    const scrollToPositions = () => {

        const section =
            document.getElementById("open-positions");


        if (section) {

            section.scrollIntoView({

                behavior: "smooth",

                block: "start",

            });

        }

    };


    return (

        <section

            className="careers-hero"

            ref={heroRef}

        >

            <div className="careers-hero-container">


                {/* =====================================
                    LEFT CONTENT
                ===================================== */}

                <div className="careers-left">


                    {/* Breadcrumb */}

                    <div className="careers-breadcrumb">

                        <Link to="/">

                            Home

                        </Link>


                        <span>

                            ›

                        </span>


                        <span>

                            Careers

                        </span>

                    </div>



                    {/* Title */}

                    <h1 className="careers-title">

                        Build Your Future

                        <span>

                            With DGATE

                        </span>

                    </h1>



                    {/* Yellow Line */}

                    <div className="careers-line"></div>



                    {/* Description */}

                    <p className="careers-description">

                        At DGATE, we believe our people are our
                        greatest strength. Join a team that inspires
                        you to innovate, grow and make a meaningful
                        impact.

                    </p>



                    {/* Button */}

                    <button

                        className="careers-hero-btn"

                        onClick={scrollToPositions}

                    >

                        Explore Opportunities

                        <FaArrowRight />

                    </button>


                </div>



                {/* =====================================
                    RIGHT IMAGE
                ===================================== */}

                <div className="careers-image-wrapper">


                    {/* Image */}

                    <img

                        src={careersHero}

                        alt="DGATE team collaborating at work"

                        className="careers-hero-image"

                    />


                    {/* Subtle Overlay */}

                    <div className="careers-image-overlay"></div>


                    {/* Three JS */}

                    <CareersCanvas />


                </div>


            </div>

        </section>

    );

}


export default CareersHero;