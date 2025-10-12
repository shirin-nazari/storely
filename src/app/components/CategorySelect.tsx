'use client';
import React from 'react';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function CategorySelect() {
  const { data: products, error } = useSWR(
    'http://localhost:3000/api/products',
    fetcher
  );
  if (error)
    return (
      <select>
        <option>Error Loading</option>
      </select>
    );
  if (!products)
    return (
      <select>
        <option>loading...</option>
      </select>
    );
  const categories = [...new Set(products.map((p: any) => p.category))];
  return (
    <select className="text-black border rounded px-2 py-1">
      <option value="">All Categories</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
