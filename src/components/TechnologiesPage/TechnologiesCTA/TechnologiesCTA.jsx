import "./TechnologiesCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaArrowRight } from "react-icons/fa";

import { ctaImage } from "../../../assets/images/Technologies/cta";

gsap.registerPlugin(ScrollTrigger);

function TechnologiesCTA() {

    const sectionRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({

                scrollTrigger:{

                    trigger:sectionRef.current,

                    start:"top 80%",

                    once:true,

                }

            });

            tl.from(".tcta-left",{

                x:-70,

                opacity:0,

                duration:1,

                ease:"power3.out",

            })

            .from(".tcta-right",{

                x:70,

                opacity:0,

                duration:1,

                ease:"power3.out",

            },"-=0.5");

        },sectionRef);

        return ()=>ctx.revert();

    },[]);

        return(

        <section
            className="tcta-section"
            ref={sectionRef}
        >

            <div className="tcta-container">

                <div className="tcta-left">

                    <span className="tcta-tag">

                        Let's Build Together

                    </span>

                    <h2 className="tcta-title">

                        Ready To Transform

                        <span>Your Business?</span>

                    </h2>

                    <p className="tcta-text">

                        Partner with D-GATE to leverage modern technologies,
                        AI, Cloud, Data Engineering, IoT, and Enterprise
                        solutions that accelerate innovation, improve
                        efficiency, and drive sustainable business growth.

                    </p>

                    <Link
                        to="/contact"
                        className="tcta-btn"
                    >

                        Talk To Our Experts

                        <FaArrowRight/>

                    </Link>

                </div>

                <div className="tcta-right">

                    <img
                        src={ctaImage}
                        alt="Technology Team"
                        className="tcta-image"
                    />

                </div>

            </div>

        </section>

    );

}

export default TechnologiesCTA;