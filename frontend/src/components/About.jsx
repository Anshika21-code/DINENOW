import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useEffect, useRef } from "react";

const About = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    document.head.appendChild(script1);
    
    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    document.head.appendChild(script2);
    
    script2.onload = () => {
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      window.gsap.set(imageRef.current, {
        x: 300,
        rotation: 45,
        opacity: 0
      });
      
      window.gsap.to(imageRef.current, {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    };
  }, []);

  return (
    <>
      <section className="about" id="about" ref={sectionRef}>
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              We believe that great meals bring people together, and finding the perfect table shouldn't be a hassle. That's why we created DineNow – to bridge the gap between food enthusiasts and exceptional restaurants, making dining reservations as simple as a few clicks.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img ref={imageRef} src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;