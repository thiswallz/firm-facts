import { CSSProperties } from "react";
import styles from "./FirmFactCard.module.scss";

interface FirmFactCardProps {
  children?: React.ReactNode;
  variant?: "default" | "border";
  sx?: CSSProperties;
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({
  children,
  variant = "default",
  sx = {},
}) => {
  return (
    <article
      className={`${styles.card} ${styles[variant]}`}
      style={{
        ...sx,
      }}
    >
      {children}
    </article>
  );
};

export default FirmFactCard;
