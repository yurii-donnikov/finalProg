import i18next from 'i18next';
import styles from './LanguageBlock.module.scss';
import en from '../../assets/icons/en.svg';
import ru from '../../assets/icons/ru.svg';

function LanguageBlock() {
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.flag} onClick={() => changeLanguage('en')}>
        <img src={en} alt="" />
      </div>
      <div className={styles.flag} onClick={() => changeLanguage('ru')}>
        <img src={ru} alt="" />
      </div>
    </div>
  );
}

export default LanguageBlock;
