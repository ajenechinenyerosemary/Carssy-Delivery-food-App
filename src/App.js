// import React, { useState } from 'react';
// import { BrowserRouter as  Routes, Route } from 'react-router-dom';
// import StoreContextProvider from './components/Context/StoreContext';
// import Layout from './components/Layout/Layout';
// import Home from './pages/Home';
// import Cart from './pages/Cart/Cart';
// import PlaceOrder from './pages/placeOrder'; 
// import Header from './components/Header';
// import Footer from './components/Footer/Footer';
// import LoginPopup from './components/LoginPopup/LoginPopup';
// import RestaurantList from './components/RestaurantList'; // Make sure to create this component
// import axios from 'axios';

// // Fetch restaurants function
// export const fetchRestaurants = async () => {
//   try {
//     const response = await axios.get('/api/restaurants/');
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching restaurants:", error);
//     throw error;
//   }
// };

// function App() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <StoreContextProvider>
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
//       <div className='app'>
//         <Layout setShowLogin={setShowLogin} />
//         <>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/placeOrder" element={<placeOrder />} /> {/* Corrected component name */}
//             <Route path="/restaurants" element={<RestaurantList />} /> {/* New Route */}
//           </Routes>
//         </>
//       </div>
//       <Footer />
//     </StoreContextProvider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import StoreContextProvider from './components/Context/StoreContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder'; 
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import RestaurantList from './components/RestaurantList'; // Make sure to create this component
import axios from 'axios';

// Fetch restaurants function
export const fetchRestaurants = async () => {
  try {
    const response = await axios.get('/api/restaurants/');
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Layout setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} /> 
          <Route path="/restaurants" element={<RestaurantList />} /> {/* New Route */}
        </Routes>
      </div>
      <Footer />
    </StoreContextProvider>
  );
}

export default App;

