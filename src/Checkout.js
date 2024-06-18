import React from 'react';
import "./Checkout.css";
import Header from './Header';
import Subtotal from './Subtotal';
function Checkout({cart}) {
  return (
    <>
    <Header/>
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__add' src="https://www.everwallpaper.co.uk/cdn/shop/collections/3D_Wallpaper.jpg?v=1660209305"
            />

            
            <div>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2> 
                {cart.map((item, index) => (
                  <div key={index} className='checkout__product'>
                    <img className='checkout__productImage' src={item.image}/>
                    <div className='checkout__productInfo'>
                      <p className='checkout__productTitle'>{item.title}</p>
                      <p className='checkout__productPrice'>
                        <small>$</small>
                        <strong>{item.price}</strong>
                      </p>
                    </div>
                  </div>
                 ))}
            </div>
  

            </div>
        </div>
       
        <div className='checkout__right'>
           <Subtotal cart={cart}/>

        </div>
    
    
    </>
  ) 
}

export default Checkout