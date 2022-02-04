import styles from "./User.module.scss";
import UserContainer from "../Contents/UserContainer";
import { IProps } from "../../interfaces/usersInterfaces";

function UserLink({ users }: IProps) {
  return (
    <div className={styles.wrapperCard}>
      {users.map((user) => (
        <UserContainer key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default UserLink;
