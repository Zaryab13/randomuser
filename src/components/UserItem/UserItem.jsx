import styles from './UserItem.module.css';
import MessageIcon from '../Svg/MessageIcon';

const UserItem = (props) => {
  const name = `${props.fname} ${props.lname}`;

  return(
    <li className={styles.user}>
      <div className={styles['user-inner']}>
        <img className={styles.avatar} src={props.avatar} alt="Random User's Image" />
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.email}>{props.email}</span>
          <span className={styles.phNo}>{props.phNo}</span>
        </div>
        <button className={styles.svgBtn}>
          <MessageIcon />
        </button>
      </div>
    </li>
  )
};
export default UserItem;
