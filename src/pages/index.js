import Header from '../components/header';
import styles from '../styles/styles.module.css';

export default function Home() {
  return (
    <div className={styles.hello}>
      <Header />
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

const data = [
  {
    name: 'Wireless microphone',
    imgSrc: '',
    type: '備品',
    owner: 'SGU',
    returnDeadline: '2020/11/19',
    borrower: '太郎君',
    status: 'UNAVAILABLE',
    reference: '',
  },
];
