import styles from "./FirmFactCard.module.scss";

interface FirmFactCardProps {
  children?: React.ReactNode;
  variant?: "default" | "border";
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({
  children,
  variant = "default",
}) => {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      {children}
    </article>
  );
};

export default FirmFactCard;
