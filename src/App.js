import React from 'react';
import './App.css';
import DetailCard from './components/detailCard';
import AboutUs from './components/aboutUs';
import ProductAndServices from './components/productAndServices'
import Accessibility from './components/accessibility'
import PaymentInfo from './components/paymentInfo'
import BankDetails from './components/bankDetails'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className="header" id='header'>
      ASTROSOLUTIONONLINE
        {/* <div className='topPhoto' >ASTROSOLUTION</div> */}
        {/* <img className='topPhoto' src={title} alt='topPhoto' /> */}
        {/* <span>ASTROSOLUTION</span> */}
      </div>
      <Accessibility />
      <DetailCard />
      <AboutUs />
      <ProductAndServices />
      <PaymentInfo />
      <BankDetails />
      <Footer />
    </>
  );
}

export default App;