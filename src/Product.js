import React from 'react'; 
import "./Product.css";

function Product({title,image,price,rating, addtobasket}) {
    
    const newitem={title,image,price,rating};
    const handleAddToBasket = () => {
        if (typeof addtobasket === 'function') {
            addtobasket(newitem);
            
        } else {
            console.error('addtobasket is not a function');
        }
    };
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>
                    $ 
                </small>
                <strong>
                    {price}
                </strong>

            </p>
            <div className='product__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_,i)=> (
                        <p>⭐️</p>
                    ))
                }
                
            </div>
            

        </div>
        <img src={image} >
        </img>
        <button onClick={handleAddToBasket}>
            Add to Basket
        </button>
    </div>
  )
}

export default Product;