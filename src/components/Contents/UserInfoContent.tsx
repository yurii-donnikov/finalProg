import { IUser } from "../../interfaces/usersInterfaces";
import styles from "./UserInfoContent.module.scss";
import { useMemo } from "react";

function UserInfoContent({ user }: { user: IUser }) {
  const dateBirth = useMemo(
    () => new Date(user.dob.date).toLocaleDateString(),
    [user.dob.date]
  );
  return (
    <div className={`${styles.user} ${styles[user.gender]}`}>
      <img className={styles.avatar} src={user.picture.large} alt="" />
      <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.birthday}>{dateBirth}</p>
      <p className={styles.gender}>{user.gender}</p>
      <p className={styles.location}>{user.location.city}</p>
      <p className={styles.phone}>{user.phone}</p>
    </div>
  );
}

export default UserInfoContent;
