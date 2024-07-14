import React, { useContext, useState } from 'react';
import './Layout.css';
import assets from '../../assets/assets'; 
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Layout = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className='Layout'>
      <Link  to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="layout-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='layout-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className='layout-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Layout;
