"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/Hero-Highlight";

export function Section04() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
        <Highlight className="text-black dark:text-white">
          국내최초
        </Highlight>
 퍼포먼스 올인원 마케팅 회사


      </motion.h1>
    </HeroHighlight>
  );
}

export default Section04
