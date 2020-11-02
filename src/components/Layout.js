import React from 'react';
import Header from './Header';

export default function Layout({ children, ...other }) {
  return (
    <div {...other}>
      <Header />
      {children}
    </div>
  );
}
