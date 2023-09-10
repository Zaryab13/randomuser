import Card from "../UI/Card";
import SyncArrow from '../Svg/sync-arrow';
import styles from "./Reloader.module.css";

const Reloader = ({onClick}) => {
  
  return (
  <Card className={styles.reloader}>
    <button className={styles.btn} onClick={onClick}>
      <SyncArrow/>
    </button>
  </Card>
  );
};

export default Reloader;
