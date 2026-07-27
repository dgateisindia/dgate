import "./Hero.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { heroBg } from "../../../assets/images/home/hero";
import HeroCanvas from "./HeroCanvas";

function Hero() {

    const heroRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(".hero-content h1", {
                y: 60,
                opacity: 0,
                duration: 0.8,
            })

            .from(".hero-content p", {
                y: 30,
                opacity: 0,
                duration: 0.6,
            }, "-=0.3")

            .from(".hero-buttons", {
                y: 25,
                opacity: 0,
                duration: 0.5,
            }, "-=0.25");

        }, heroRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            className="hero"
            ref={heroRef}
        >

            <img
                src={heroBg}
                alt="Engineering Solutions"
                className="hero-bg"
            />

            <HeroCanvas />

            <div className="hero-content">

                <span className="hero-tag">
                    ENGINEERING • DIGITAL • INNOVATION
                </span>

                <h1>
                    Engineering
                    <br />

                    Solutions That
                    <br />

                    Drive

                    <span>
                        Innovation
                    </span>
                </h1>

                <p>
                    D-GATE Integrated Services delivers
                    engineering, product development,
                    software, cloud and digital solutions
                    that help businesses innovate faster,
                    operate smarter and achieve sustainable
                    growth.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/services"
                        className="primary-btn"
                    >
                        Explore Services
                    </Link>

                    <Link
                        to="/contact"
                        className="secondary-btn"
                    >
                        Contact Us
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Hero;