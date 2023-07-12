"use client"
import Banner from "@/components/Banner";
import MobileBanner from "@/components/MobileBanner";
import MobileOffersCard from "@/components/MobileOffersCard";
import RoundedIcons from "@/components/RoundedIcons";
import DesktopOfferCards from "@/components/DesktopOfferCarsd";
import '../styles/dark.css';
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function Home() {
  return (
    <main>
    
    <Provider store={store}>
      <div className="mobilebanner">
        <MobileBanner />
      </div>
      <div className="desktopbanner">
        <Banner />
      </div>
      <RoundedIcons />
      <MobileOffersCard />
      <DesktopOfferCards />
      </Provider>
    </main>
  );
}
