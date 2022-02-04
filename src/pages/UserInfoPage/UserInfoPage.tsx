import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Path } from "../../constants/path";
import { IUser } from "../../interfaces/usersInterfaces";
import UserInfoContent from "../../components/Contents/UserInfoContent";
import styles from "./UserInfoPage.module.scss";
import { getUsers } from "../../redux/users/usersSelectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

function UserInfoPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const users = useSelector(getUsers);
  const { id } = useParams();

  const user = useMemo(
    () =>
      users.find(function (user) {
        return user.login.uuid === id;
      }) as IUser,
    [id, users]
  );

  return (
    <>
      {Path.USER_INFO === location.pathname ? (
        <p className={styles.message}>{t("message_For_User")}</p>
      ) : (
        <UserInfoContent user={user} />
      )}
    </>
  );
}

export default UserInfoPage;
