import React from 'react';
import { useRouter } from 'next/router';
import { data } from '../../util/index';

export default function ItemDetail() {
  const router = useRouter();
  const id = Number(router.query.id);
  const itemData = data.filter((item) => item.id === id);
  return <div>{JSON.stringify(itemData, null, 2)}</div>;
}
