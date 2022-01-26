import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Path } from '../../constants/path';
import { IUser } from '../../interfaces/usersInterfaces';
import UserInfo from '../../components/UserInfo/UserInfo';
import styles from './UserInfoPage.module.scss';

function UserInfoPage() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      {location.pathname === Path.USER_INFO ? (
        <p className={styles.message}>{t('message_For_User')}</p>
      ) : (
        <UserInfo user={location.state as IUser} />
      )}
    </>
  );
}

export default UserInfoPage;
