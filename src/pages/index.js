import Header from '../components/header';
import Item from '../components/Item';
import style from './style/index.module.css';
import { data } from '../util/index';

export default function Home() {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.listContainer}>
        {data && data.length > 0 ? (
          <ul className={style.itemList}>
            {data.map((item) => (
              <Item item={item} />
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
