import "./TechnologyStats.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    FaMicrochip,
    FaTasks,
    FaUsers,
    FaAward,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
   Statistics Data
===================================================== */

const statistics = [

    {
        icon: <FaMicrochip />,
        value: 15,
        suffix: "+",
        title: "Modern Technologies",
        description:
            "Advanced technology stack powering enterprise solutions.",
    },

    {
        icon: <FaTasks />,
        value: 50,
        suffix: "+",
        title: "Projects Delivered",
        description:
            "Successful engineering and digital transformation projects.",
    },

    {
        icon: <FaUsers />,
        value: 20,
        suffix: "+",
        title: "Technology Experts",
        description:
            "Experienced professionals delivering innovative solutions.",
    },

    {
        icon: <FaAward />,
        value: 100,
        suffix: "%",
        title: "Quality Commitment",
        description:
            "Focused on excellence, reliability and customer satisfaction.",
    },

];

function TechnologyStats() {

    const sectionRef = useRef(null);

    const numberRefs = useRef([]);

    useEffect(() => {

        const ctx = gsap.context(() => {

            /* ================= Heading ================= */

            gsap.from(".ts-heading",{

                y:40,

                opacity:0,

                duration:.8,

                ease:"power3.out",

                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top 80%",
                    once:true,
                }

            });

            /* ================= Cards ================= */

            gsap.from(".ts-card",{

                y:50,

                opacity:0,

                duration:.8,

                stagger:.15,

                ease:"power3.out",

                clearProps:"all",

                scrollTrigger:{
                    trigger:".ts-grid",
                    start:"top 80%",
                    once:true,
                }

            });

            /* ================= Counter ================= */

            numberRefs.current.forEach((element,index)=>{

                gsap.fromTo(

                    element,

                    {

                        innerText:0,

                    },

                    {

                        innerText:statistics[index].value,

                        duration:2,

                        ease:"power2.out",

                        snap:{
                            innerText:1,
                        },

                        scrollTrigger:{
                            trigger:element,
                            start:"top 85%",
                            once:true,
                        },

                        onUpdate:function(){

                            element.innerHTML =

                                Math.floor(

                                    this.targets()[0].innerText

                                ) +

                                statistics[index].suffix;

                        }

                    }

                );

            });

            ScrollTrigger.refresh();

        },sectionRef);

        return ()=>ctx.revert();

    },[]);

        return (

        <section

            className="ts-section"

            ref={sectionRef}

        >

            <div className="ts-container">

                {/* ================= Heading ================= */}

                <div className="ts-heading">

                    <span>

                        OUR IMPACT

                    </span>

                    <h2>

                        Technology Excellence

                        <br />

                        In Numbers

                    </h2>

                    <p>

                        Our commitment to innovation,

                        engineering excellence and modern

                        technologies enables us to deliver

                        scalable digital solutions for

                        businesses across industries.

                    </p>

                </div>

                {/* ================= Statistics ================= */}

                <div className="ts-grid">

                    {statistics.map((item,index)=>(

                        <div

                            className="ts-card"

                            key={index}

                        >

                            <div className="ts-icon">

                                {item.icon}

                            </div>

                            <h3

                                className="ts-number"

                                ref={(el)=>

                                    numberRefs.current[index]=el

                                }

                            >

                                0{item.suffix}

                            </h3>

                            <h4 className="ts-title">

                                {item.title}

                            </h4>

                            <p className="ts-text">

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default TechnologyStats;
