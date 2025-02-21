"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedComponentProps {
  children: any;
}

const AnimationTop: React.FC<AnimatedComponentProps> = ({
  children,
}: {
  children: any;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: [-130] },
      }}
      transition={{ duration: 1.1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationTop;
