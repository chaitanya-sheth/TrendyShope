// "use client"
import Nav from '@/components/Nav'
import '../styles/globals.css'
import '../styles/mobile.css'
import { Inter } from 'next/font/google'
import MobileBottomNavbar from '@/components/MobileBottomNavbar'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import '../styles/dark.css';
import GlobalProvider from './GlobalProvider'
// import store from '@/redux/store';
// import { Provider } from 'react-redux';

export const metadata = {
  title: 'TrendyShoppe',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body>
        {/* <Provider store={store}> */}
        <GlobalProvider>
        
          <Nav />
          {children}
          <Footer />
          </GlobalProvider>
          {/* </Provider> */}
        </body>
      
    </html>
  );
}



