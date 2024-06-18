import React, { useState } from 'react';
import "./Home.css";
import Product from "./Product";
import Header from './Header';
function Home({addtobasket}) {
  // const [productlist,setProductList]=useState([
  //   {title:'Best Sellers in Sports, Fitness & Outdoors',price:29.99,image:"https://m.media-amazon.com/images/I/51+b9IWWbjL._AC_SY400_.jpg",rating:5},
  //   {title:'The lean startup',price:29.99,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_19/PC_CC_758x608-1._SY608_CB558452765_.jpg",rating:5},
  //   {title:'Bestsellers in Women Indian clothes',price:9.19,image:"https://m.media-amazon.com/images/I/61nCJ7mqXFL._AC_SY340_.jpg",rating:5},
  //   {title:'Customers Most-Loved Fashion for you',price:29.99,image:"https://m.media-amazon.com/images/I/614ZnW6FAiL._AC_SY290_.jpg",rating:5},
  //   {title:'The lean startup',price:199.99,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_19/PC_CC_758x608-1._SY608_CB558452765_.jpg",rating:5},
  //   {title:'Amazon Fresh | Great prices | Fruits & vegetables',price:150.99,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Dec23/F2V/PC2/AllSubcat_RC_PC2x_03._SY232_CB570748347_.jpg",rating:5}

  // ]);

  return (
    <>
    <Header/>
    <div className='home'>
        <div className='home__container'>
        <img 
        className="home__image" src="https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg"
        />
        <div className='home__row'>
            <Product title='Best Sellers in Sports, Fitness & Outdoors' price={29.99} image="https://m.media-amazon.com/images/I/51+b9IWWbjL._AC_SY400_.jpg"
            rating={5}
            addtobasket={addtobasket}/>
            <Product title='The lean startup' price={29.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_19/PC_CC_758x608-1._SY608_CB558452765_.jpg"
            rating={5}
            addtobasket={addtobasket}/>
            
        </div>
        <div className='home__row'>
        <Product title='Bestsellers in Women Indian clothes' price={9.19} image="https://m.media-amazon.com/images/I/61nCJ7mqXFL._AC_SY340_.jpg"
            rating={5}
            addtobasket={addtobasket}/>
            <Product title='Customers Most-Loved Fashion for you' price={29.99} image="https://m.media-amazon.com/images/I/614ZnW6FAiL._AC_SY290_.jpg"
            rating={5}
            addtobasket={addtobasket}/>
            <Product title='The lean startup' price={199.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_19/PC_CC_758x608-1._SY608_CB558452765_.jpg"
            rating={5}
            addtobasket={addtobasket}/>

        </div>
        <div className='home__row'>
        <Product title='Amazon Fresh | Great prices | Fruits & vegetables' price={150.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Dec23/F2V/PC2/AllSubcat_RC_PC2x_03._SY232_CB570748347_.jpg"
            rating={5}
            addtobasket={addtobasket}/>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Home