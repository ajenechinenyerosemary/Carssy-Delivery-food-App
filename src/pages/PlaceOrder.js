import { StoreContext } from '../components/Context/StoreContext';
import './PlaceOrder.css';
import React, { useContext, useState } from 'react';

const PlaceOrder = () => {
  const { getTotalCartAmount, discount, deliveryFee } = useContext(StoreContext);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted', formData);
  };

  const discountedTotal = getTotalCartAmount() * (1 - discount);

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            type='text'
            name='firstName'
            placeholder='First name'
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last name'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='Email address'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='text'
          name='street'
          placeholder='Street'
          value={formData.street}
          onChange={handleChange}
        />
        <div className='multi-fields'>
          <input
            type='text'
            name='city'
            placeholder='City'
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type='text'
            name='state'
            placeholder='State'
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className='multi-fields'>
          <input
            type='text'
            name='zipCode'
            placeholder='Zip code'
            value={formData.zipCode}
            onChange={handleChange}
          />
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <input
          type='text'
          name='phone'
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
          <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            {discount > 0 && (
              <>
                <hr />
                <div className='cart-total-details'>
                  <p>Discount</p>
                  <p>- ${getTotalCartAmount() * discount}</p>
                </div>
              </>
            )}
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
          </div>
          <button type='button'>PROCEED TO PAYMENT</button>
        </div>
      </div>
      {/* <button type='submit'>Place Order</button> */}
    </form>
  );
};

export default PlaceOrder;

