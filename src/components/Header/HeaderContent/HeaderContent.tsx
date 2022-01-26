import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Path } from '../../../constants/path';
import { isAuthenticated } from '../../../redux/auth/authSelectors';
import { logoutRequest } from '../../../redux/auth/authActions';
import styles from './HeaderContent.module.scss';
import emblem from '../../../assets/logoUsers.svg';
import LanguageBlock from '../../LanguageBlock/LanguageBlock';

function HeaderContent() {
  const isRegistered = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const logout = () => {
    dispatch(logoutRequest());
    localStorage.clear();
  };
  const setClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink}` + (isActive ? ` ${styles.navLinkActivated}` : '');

  return (
    <nav className={styles.nav}>
      <NavLink to={Path.USERS}>
        <img className={styles.emblem} src={emblem} alt="" />
      </NavLink>

      {isRegistered && (
        <ul className={styles.listMenu}>
          <li>
            <NavLink end to={Path.USERS} className={setClass}>
              {t('users')}
            </NavLink>
          </li>
          <li>
            <NavLink to={Path.USER_INFO} className={setClass}>
              {t('user_information')}
            </NavLink>
          </li>
          <li>
            <NavLink to={Path.LOGIN} className={styles.navLink}>
              <button className={styles.logOutBtn} onClick={logout}>
                {t('log_off')}
              </button>
            </NavLink>
          </li>
        </ul>
      )}
      <LanguageBlock />
    </nav>
  );
}

export default HeaderContent;
