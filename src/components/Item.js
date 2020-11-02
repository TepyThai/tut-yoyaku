import React from 'react';
import style from './style/item.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Item({ item, ...others }) {
  const {
    id,
    name,
    imgSrc,
    type,
    owner,
    returnDeadline,
    borrower,
    status,
    reference,
  } = item;
  return (
    <Link href={`/item/${id}`}>
      <div className={style.container}>
        <Image
          src={imgSrc}
          width={250}
          height={200}
          className={style.coverImage}
        />
        <div className={style.textContainer}>
          <h3 className={style.name}>{name}</h3>
          <div className={style.infoContainer}>
            <div className={style.type}>{type}</div>
            <div
              className={`
              ${style.status}
              ${status === 'AVAILABLE' ? style.available : style.unavailable}
            `}
            >
              {status === 'AVAILABLE' ? '可' : '不可'}
            </div>
          </div>
          <div className={style.linkContainer}>
            <Link href={`/item/${id}`}>
              <button className={style.link}>詳細 + 予約</button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
