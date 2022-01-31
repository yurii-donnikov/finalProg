import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Path } from "../../../constants/path";
import { isAuthenticated } from "../../../redux/auth/authSelectors";
import styles from "./HeaderContent.module.scss";
import emblem from "../../../assets/logoUsers.svg";
import LanguageBlock from "../../LanguageBlock/LanguageBlock";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

function HeaderContent() {
  const isRegistered = useSelector(isAuthenticated);
  return (
    <nav className={styles.nav}>
      <NavLink to={Path.USERS}>
        <img className={styles.emblem} src={emblem} alt="" />
      </NavLink>

      {isRegistered && <HeaderMenu />}
      <LanguageBlock />
    </nav>
  );
}

export default HeaderContent;
