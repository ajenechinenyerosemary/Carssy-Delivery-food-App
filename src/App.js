import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import StoreContextProvider from './components/Context/StoreContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/HowItWork'; // Correct import for AboutUs component
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder'; // Correct import for PlaceOrder component
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer from './components/Footer/Footer';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import HowItWork from './pages/HowItWork';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider>
      <div className='app'>
        <Layout setShowLogin={setShowLogin} />
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/explore-menu" element={<ExploreMenu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/how-it-work" element={<HowItWork />} />
        </Routes>
        <Footer />
      </div>
    </StoreContextProvider>
  );
}

export default App;

