import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { loginRequest } from "../../redux/auth/authActions";
import styles from "./LoginContent.module.scss";

function LoginContent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const ComeLogin = () => dispatch(loginRequest());

  return (
    <div className={styles.wrapper}>
      <button onClick={ComeLogin} className={styles.buttonLogin}>
        {t("button_login")}
      </button>
    </div>
  );
}

export default LoginContent;
