"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export function Section02() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 3]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.14, 3]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 3]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.04, 3]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 3]);

  return (
    <div
      className="h-[200vh]  bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}>
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]} />
    </div>
  );
}

export default Section02