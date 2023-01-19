import React from 'react';
import Category from './Categories/Category';
import Header from './Header';
import Date from './Date/Date';
import LargeBlog from './LargeBlogCard/LargeBlog';

export default function Main() {
  return (
    <main className="my-container mx-auto border bg-white p-4">
      <Header />
      <Category />
      <Date />
      <LargeBlog />
    </main>
  );
}
