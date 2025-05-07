import React, { useRef } from "react";
import gsap from "gsap";
import "./Links.css";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Link = ({ text, link = null, onClick = null }) => {
  const linkRef = useRef();
  const tl = useRef();

  useGSAP(() => {
    const textEl = linkRef.current.querySelector("#text");
    const cloneEl = linkRef.current.querySelector("#clone");

    // Split text into letters
    const textChars = new SplitText(textEl, { type: "chars" });
    const cloneChars = new SplitText(cloneEl, { type: "chars" });

    // Position clone letters below original
    gsap.set(cloneChars.chars, { yPercent: 100, opacity: 0 });

    // Create timeline
    tl.current = gsap
      .timeline({ paused: true })
      .to(textChars.chars, {
        yPercent: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.1,
      })
      .to(
        cloneChars.chars,
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.05,
        },
        "<"
      );
  }, []);

  return (
    <a
      className="linkContainer"
      ref={linkRef}
      href={link || undefined}
      onClick={(e) => {
        if (!link) e.preventDefault();
        if (onClick) onClick();
      }}
      onMouseEnter={() => tl.current.play()}
      onMouseLeave={() => tl.current.reverse()}
    >
      <div id="text">{text}</div>
      <div id="clone">{text}</div>
    </a>
  );
};

export default Link;
