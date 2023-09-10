import Card from "../UI/Card";
import SyncArrow from '../Svg/sync-arrow';
import styles from "./Reloader.module.css";

const Reloader = () => {
  return (
  <Card className={styles.reloader}>
    {/* When the user are yet to loaded */}
    {/* className={()? styles.spin: } */}
      <SyncArrow />
  </Card>
  );
};

export default Reloader;
