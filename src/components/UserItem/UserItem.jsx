import styles from './UserItem.module.css';
import MessageIcon from '../Svg/MessageIcon';
import Card from '../UI/Card';

const UserItem = (props) => {
  const name = `${props.name.title}. ${props.name.first} ${props.name.last}`;

  return(
    <li className={styles.user}>
      <div className={styles['user-inner']}>
        <img className={styles.avatar} src={props.image} alt="Random User's Image" />
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.email}>{props.email}</span>
          <span className={styles.phNo}>{props.cell}</span>
        </div>
        <button className={styles.svgbtn}>
          <MessageIcon />
        </button>
      </div>
    </li>
  )
};
export default UserItem;
