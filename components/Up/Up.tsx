import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useScrollY } from "../../hooks/useScrollY";

import UpIcon from "./up.svg";
import styles from "./Up.module.css";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon
        appearance="primary"
        icon="up"
        aria-label="Наверх"
        onClick={scrollToTop}
      />
    </motion.button>
  );
};
