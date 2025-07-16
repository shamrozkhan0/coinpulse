import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = isHovered ? 100 : 50;

  const handleMousePosition = (e) => {
    mouseX.set(e.clientX - cursorSize / 2);
    mouseY.set(e.clientY - cursorSize / 2);
  };

  const mouseMount = () => {
    setIsHovered(true);
  };

  const mouseDemount = () => {
    setIsHovered(false);
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const useSpringOptions = {
    stiffness: 300,
    damping: isHovered ? 200 : 50,
    mass: 0.5,
  };

  const smoothX = useSpring(mouseX, useSpringOptions);
  const smoothY = useSpring(mouseY, useSpringOptions);

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    stickyElement.current.addEventListener("mouseover", mouseMount);
    stickyElement.current.addEventListener("mouseleave", mouseDemount);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
      stickyElement.current.removeEventListener("mouseover", mouseMount);
      stickyElement.current.removeEventListener("mouseleave", mouseDemount);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      animate={{ width: cursorSize, height: cursorSize }}
      className=" bg-gradient rounded-full absolute top-0 left-0 z-[-9999] pointer-events-none shadow-2xl shadow-amber-600"
      style={{ x: smoothX, y: smoothY, width: cursorSize, height: cursorSize }}
    />
  );
};

export default CursorFollower;
