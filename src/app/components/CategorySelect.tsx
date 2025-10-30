'use client';
import React from 'react';
import useSWR from 'swr';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@/src/redux/features/categorySlice';
import { RootState } from '@/src/redux/store';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
interface PropsClassname {
  classname?: string;
}
export default function CategorySelect({ classname }: PropsClassname) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
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
    <select
      className={`text-black border-blue-500/30 border-2 rounded-2xl px-1 py-1 ${classname}`}
      value={selectedCategory}
      onChange={(e) => dispatch(setCategory(e.target.value))}
    >
      <option value="">All Categories</option>
      {categories.map((cat: any, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
