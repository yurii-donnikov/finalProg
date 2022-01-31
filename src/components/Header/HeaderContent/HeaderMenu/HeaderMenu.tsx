import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Path } from "../../../../constants/path";
import { logoutRequest } from "../../../../redux/auth/authActions";
import styles from "../HeaderContent.module.scss";

function HeaderMenu() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const logout = () => {
    dispatch(logoutRequest());
    localStorage.clear();
  };
  const setClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink}` + (isActive ? ` ${styles.navLinkActivated}` : "");

  return (
    <ul className={styles.listMenu}>
      <li>
        <NavLink end to={Path.USERS} className={setClass}>
          {t("users")}
        </NavLink>
      </li>
      <li>
        <NavLink to={Path.USER_INFO} className={setClass}>
          {t("user_information")}
        </NavLink>
      </li>
      <li>
        <NavLink to={Path.LOGIN} className={styles.navLink}>
          <button className={styles.logOutBtn} onClick={logout}>
            {t("log_off")}
          </button>
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderMenu;
