'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Navbar></Navbar>
        {children}
      </Provider>
    </SessionProvider>
  );
}
