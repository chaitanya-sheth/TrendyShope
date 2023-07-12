"use client"
import { Provider } from 'react-redux';
import store from '@/redux/store';
import MobileBottomNavbar from '@/components/MobileBottomNavbar'

export default function GlobalProvider({ children }) {
  return( <Provider store={store}>
  {children}
  <MobileBottomNavbar />
  </Provider>
  );
}

