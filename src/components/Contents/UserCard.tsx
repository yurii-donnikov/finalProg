import styles from "./UserCard.module.scss";
import { useMemo } from "react";
import { IParams } from "../../interfaces/usersInterfaces";

function UserCard({ user }: IParams) {
  const dateBirth = useMemo(
    () => new Date(user.dob.date).toLocaleDateString(),
    [user.dob.date]
  );
  return (
    <div className={`${styles.userCard} ${styles[user.gender]}`}>
      <img className={styles.avatar} src={user.picture.large} alt="" />
      <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.birthday}>{dateBirth}</p>
      <p className={styles.gender}>{user.gender}</p>
    </div>
  );
}

export default UserCard;
