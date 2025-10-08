import React from 'react';

export default async function CategorySelect() {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  const category = await res.json();
  return (
    <select>
      {category.map((item) => (
        <option key={item.id}>{item.category}</option>
      ))}
    </select>
  );
}
