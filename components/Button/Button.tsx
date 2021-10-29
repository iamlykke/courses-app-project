import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";
import { motion } from "framer-motion";

export const Button = ({
  children,
  arrow = "none",
  appearence,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </motion.button>
  );
};
