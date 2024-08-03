import { useSpring, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

function formatDigits(num) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

function AnimatedNumber({ value }) {
  const spring = useSpring(0, { duration: 1000 });
  const display = useTransform(spring, (current) =>
    formatDigits(Math.floor(current)),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default AnimatedNumber;
