import Header from '../components/header';
import styles from '../styles/styles.module.css';

export default function Home() {
  return (
    <div className={styles.hello}>
      <Header />
      <p>Hello World</p>
    </div>
  );
}
