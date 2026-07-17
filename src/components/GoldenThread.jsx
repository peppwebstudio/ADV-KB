import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function GoldenThread() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleY }}
      className="fixed left-0 top-0 z-[60] h-full w-[3px] origin-top bg-gradient-to-b from-[hsl(40_65%_72%)] via-[hsl(38_55%_52%)] to-[hsl(35_60%_40%)]"
    />
  );
}