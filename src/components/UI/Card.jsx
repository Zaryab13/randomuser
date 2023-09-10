import styles from "./Card.module.css";

const Card = (props) => {
  const classes = `${props.className} ${styles.Card}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
