import { NavLink } from 'react-router-dom';
import { Path } from '../../constants/path';
import { IUser } from '../../interfaces/usersInterfaces';
import styles from './User.module.scss';

interface IProps {
  user: IUser;
}

function User({ user }: IProps) {
  return (
    <li className={`${styles.userCard} ${styles[user.gender]}`}>
      <NavLink
        to={`${Path.USER_INFO}/${user.login.uuid}`}
        state={user}
        className={styles.link}
      >
        <img className={styles.avatar} src={user.picture.large} alt="" />
        <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
        <p className={styles.birthday}>{user.dob.date.slice(0, 10)}</p>
        <p className={styles.gender}>{user.gender}</p>
      </NavLink>
    </li>
  );
}

export default User;
