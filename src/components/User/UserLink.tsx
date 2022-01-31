import { NavLink } from "react-router-dom";
import { Path } from "../../constants/path";
import { IUser } from "../../interfaces/usersInterfaces";
import styles from "./User.module.scss";
import UserCard from "../User/User";

interface IProps {
  user: IUser;
}

function UserLink({ user }: IProps) {
  return (
    <NavLink
      to={`${Path.USER_INFO}/${user.login.uuid}`}
      state={user}
      className={styles.link}
    >
      <UserCard user={user} />
    </NavLink>
  );
}

export default UserLink;
