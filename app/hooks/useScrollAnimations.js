"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach((elem) => {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 3,
          y: 0,
          duration: 5,
          ease: "power3.out",
          scrollTrigger: {
             trigger: elem,
          start: "top 90%",
          end: "bottom 60%",
          markers: true,
          },
        }
      );
    });
  }, []);
}

