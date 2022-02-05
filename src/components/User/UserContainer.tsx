import { NavLink } from "react-router-dom";
import { Path } from "../../constants/path";
import UserCard from "../Contents/UserCard";
import styles from "./UserContainer.module.scss";
import { IParams } from "../../interfaces/usersInterfaces";

function UserContainer({ user }: IParams) {
  return (
    <NavLink
      className={styles.cardItem}
      to={`${Path.USER_INFO}/${user.login.uuid}`}
    >
      <UserCard user={user} />
    </NavLink>
  );
}

export default UserContainer;
