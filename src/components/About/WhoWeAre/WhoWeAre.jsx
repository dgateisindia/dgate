import "./WhoWeAre.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaCheckCircle } from "react-icons/fa";

import { office } from "../../../assets/images/about";

gsap.registerPlugin(ScrollTrigger);

function WhoWeAre() {

    const sectionRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                    once: true,
                },
            });

            // Left Image
            tl.from(".who-image", {
                x: -60,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            })

            // Right Content
            .from(".who-content", {
                x: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.45")

            // Features
            .from(".who-feature", {
                y: 20,
                opacity: 0,
                duration: 0.45,
                stagger: 0.08,
                ease: "power2.out",
            }, "-=0.3");

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (

        <section className="who-we-are" ref={sectionRef}>

            <div className="who-container">

                {/* Left Image */}

                <div className="who-image">
                    <img
                        src={office}
                        alt="D-GATE Office"
                    />
                </div>

                {/* Right Content */}

                <div className="who-content">

                    <span className="section-tag">
                        WHO WE ARE
                    </span>

                    <h2>
                        Building Innovation.
                        <br />
                        Delivering Excellence.
                    </h2>

                    <p>
                        Established in 2003, D-GATE Integrated Services has
                        grown into a global technology company, delivering
                        innovative engineering solutions to clients across
                        industries.
                    </p>

                    <p>
                        Our journey is built on a foundation of trust,
                        innovation, and a relentless focus on creating value
                        for our clients.
                    </p>

                    <div className="who-feature-list">

                        <div className="who-feature">
                            <FaCheckCircle />
                            <span>Innovation at the Core</span>
                        </div>

                        <div className="who-feature">
                            <FaCheckCircle />
                            <span>Long-term Partnerships</span>
                        </div>

                        <div className="who-feature">
                            <FaCheckCircle />
                            <span>Commitment to Quality</span>
                        </div>

                        <div className="who-feature">
                            <FaCheckCircle />
                            <span>Empowering Businesses</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default WhoWeAre;