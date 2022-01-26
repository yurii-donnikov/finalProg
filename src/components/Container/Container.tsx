import styles from './Container.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
