import React from "react";
import "./App.css";
import DetailCard from "./components/detailCard";
import AboutUs from "./components/aboutUs";
import ProductAndServices from "./components/productAndServices";
import Accessibility from "./components/accessibility";
import PaymentInfo from "./components/paymentInfo";
import Footer from "./components/footer";
import mataCover from "./Images/mataji.jpeg";

function App() {
  return (
    <>
      <div className="header" id="header">
        <img src={mataCover} alt="" />
        ASTROSOLUTIONONLINE
        {/* <img src={mataCover} /> */}
      </div>
      <Accessibility />
      <DetailCard />
      <AboutUs />
      <ProductAndServices />
      <PaymentInfo />
      <Footer />
    </>
  );
}

export default App;
