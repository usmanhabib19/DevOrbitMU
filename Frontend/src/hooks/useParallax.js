import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (speed = 0.3) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        gsap.to(el, {
            y: () => -100 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true, // scroll ke sath sync, smooth movement up/down dono
            },
        });
    }, [speed]);

    return ref;
};