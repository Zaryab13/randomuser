import Card from "../UI/Card";
import SyncArrow from '../Svg/sync-arrow';
import styles from "./Reloader.module.css";

const Reloader = ({onClick, onLoading}) => {
  
  return (
  <Card className={styles.reloader}>
    <button className={styles.btn} onClick={onClick}>
      <SyncArrow className={onLoading? styles.spin:''}/>
    </button>
  </Card>
  );
};

export default Reloader;
