// import React, { useContext, useState } from 'react';
// import './Layout.css';
// import assets from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../Context/StoreContext';

// const Layout = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount } = useContext(StoreContext);

//   return (
//     <div className="Layout">
//       <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>
//       <div className="layout-center">
//         <ul className="layout-menu">
//           <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
//           <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//           {/* <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>MobileApp</a> */}
//           <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>ContactUs</a>
//           <Link to="/addrestaurant" onClick={() => setMenu("add-restaurant")} className={menu === "add-restaurant" ? "active" : ""}>AddRestaurant</Link>
//         </ul>
//       </div>
//       <div className="layout-right">
//         <img src={assets.search_icon} alt="Search" />
//         <div className="layout-search-icon">
//           <Link to="/cart"><img src={assets.basket_icon} alt="Basket" /></Link>
//           <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//         </div>
//         <button onClick={() => setShowLogin(true)}>Sign in</button>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useContext, useState } from 'react';
import './Layout.css';
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Layout = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="Layout">
      <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <div className="layout-center">
        <ul className="layout-menu">
          <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <Link to="/explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Link>
          {/* <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>MobileApp</a> */}
          <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>ContactUs</a>
          <Link to="/addrestaurant" onClick={() => setMenu("add-restaurant")} className={menu === "add-restaurant" ? "active" : ""}>AddRestaurant</Link>
        </ul>
      </div>
      <div className="layout-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="layout-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Layout;
