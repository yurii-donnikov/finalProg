import { Path } from "../../constants/path";
import { IUser } from "../../interfaces/usersInterfaces";
import styles from "./User.module.scss";

interface IProps {
  user: IUser;
}

function UserCard({ user }: IProps) {
  console.log(user.dob.date);
  return (
    <div className={`${styles.userCard} ${styles[user.gender]}`}>
      <img className={styles.avatar} src={user.picture.large} alt="" />
      <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.birthday}>
        {new Date(user.dob.date).toLocaleString("en", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </p>
      <p className={styles.gender}>{user.gender}</p>
    </div>
  );
}

export default UserCard;
