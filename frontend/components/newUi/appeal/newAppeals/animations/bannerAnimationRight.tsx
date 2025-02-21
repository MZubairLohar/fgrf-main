"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
interface MyAnimatedComponentProps {
  children: React.ReactNode;
}

const AppealBannerAnimationRight: React.FC<MyAnimatedComponentProps> = ({
  children,
}) => {
  const isExtraSmall = useMedia("(max-width: 320px)");
  const isSmallM = useMedia("(min-width: 321px) and (max-width: 375px)");
  const isSmallL = useMedia("(min-width: 376px) and (max-width: 425px)");
  const [xValue, setXValue] = useState(0);

  useEffect(() => {
    if (isExtraSmall) {
      setXValue(0);
    } else if (isSmallM) {
      setXValue(0);
    } else if (isSmallL) {
      setXValue(0);
    } else {
      setXValue(-50);
    }
  }, [isExtraSmall, isSmallL, isSmallL]);
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        filter: "brightness(1.5)",
        x: xValue,
      }}
      transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AppealBannerAnimationRight;

// export default AppealBannerAnimationRight;
