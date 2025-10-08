'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      {children}
    </Provider>
  );
}
