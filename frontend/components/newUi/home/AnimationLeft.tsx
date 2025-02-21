"use client";

// New Code
import { motion, useAnimation, Variants } from "framer-motion";
import { useMedia } from "react-use";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface MyAnimatedComponentProps {
  children: React.ReactNode;
}

const AnimatedComponentLeft: React.FC<MyAnimatedComponentProps> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const isExtraSmall = useMedia("(max-width: 320px)");
  const isSmallM = useMedia("(min-width: 321px) and (max-width: 375px)");
  const isSmallL = useMedia("(min-width: 376px) and (max-width: 425px)");
  const isMedium = useMedia("(min-width: 768px) and (max-width: 992px)");
  const isLarge = useMedia("(min-width: 993px) and (max-width: 1200px)");
  const isLlarge = useMedia("(min-width: 1201px) and (max-width: 1440px)");
  // const isXLarge = useMedia("(min-width: 1200px)");

  const xVariants = (xValue: number): Variants => ({
    hidden: { opacity: 0, x: xValue },
    visible: { opacity: 1, x: 0 },
  });

  useEffect(() => {
    let xValue = 0;

    // console.log("isExtraSmall--->", isExtraSmall);
    // console.log("isSmallL--->", isSmallL);
    // console.log("isSmallM--->", isSmallM);
    // console.log("isMedium--->", isMedium);
    // console.log("isLarge--->", isLarge);
    // console.log("isLLarge--->", isLlarge);

    if (isExtraSmall) {
      xValue = -20;
    } else if (isSmallM) {
      xValue = -30;
    } else if (isSmallL) {
      xValue = -30;
    } else if (isMedium) {
      xValue = -30;
    } else if (isLarge) {
      xValue = -170;
    } else if (isLlarge) {
      xValue = -200;
    } else {
      xValue = -250;
    }

    if (inView) {
      controls.start(xVariants(xValue).visible);
    } else {
      controls.start(xVariants(xValue).hidden);
    }
  }, [inView, isExtraSmall, isSmallL, isMedium, isLarge, controls]);

  return (
    <motion.div
      ref={ref}
      // drag="x"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponentLeft;
