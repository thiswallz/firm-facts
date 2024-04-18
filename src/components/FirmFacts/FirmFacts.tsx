import FirmFactCard from "~/components/FirmFactCard/FirmFactCard";
import styles from "./FirmFacts.module.scss";
import Search from "~/assets/search.svg";
import Close from "~/assets/close.svg";
import Button from "../Button/Button";

const SearchIcon = () => <img src={Search} alt="Search Icon" />;

const FirmFacts = () => {
  return (
    <section className={styles.main}>
      <img src={Close} alt="Close" className={styles.closeIcon} />
      <h1 className={styles.title}>Firm Facts</h1>
      <hr className={styles.separator} />
      <ul className={styles.cardContainer}>
        <FirmFactCard
          variant="border"
          sx={{ paddingLeft: "23px", paddingRight: "31px" }}
        >
          <Button variant="icon" icon={<SearchIcon />}>
            This is a two line button that terminates with more text and an icon
          </Button>
        </FirmFactCard>

        <FirmFactCard sx={{ padding: "0 27px" }}>
          <Button variant="icon" icon={<SearchIcon />}>
            This is a two line button that terminates with more text and an icon
          </Button>
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button>This is a one line button</Button>
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button variant="icon" icon={<SearchIcon />}>
            This is a two line button that terminates with more text and an icon
          </Button>
        </FirmFactCard>

        <FirmFactCard
          variant="border"
          sx={{ paddingLeft: "27px", paddingRight: "27px" }}
        >
          <Button variant="icon" icon={<SearchIcon />}>
            This is a two line button that terminates with more text and an icon
          </Button>
          <p className={styles.description}>initial</p>
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button variant="icon" icon={<SearchIcon />} disabled>
            This is a two line button that terminates with more text and an icon
          </Button>
          <p className={styles.description}>disabled</p>
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button variant="icon" icon={<SearchIcon />}>
            This is a two line button that terminates with more text and an icon
          </Button>
          <p className={styles.description}>hover</p>
        </FirmFactCard>
      </ul>
    </section>
  );
};

export default FirmFacts;
