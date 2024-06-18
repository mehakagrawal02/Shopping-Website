import React, { useEffect, useState } from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';

function Subtotal({cart}) {
  const [sum,setSum]=useState(0);
  
  useEffect(()=>
  {
    let total=0
    for (let i = 0; i < cart.length; i++) {
       total+= cart[i].price;
    }
    setSum(total);

  },[cart])
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
            <>
            <p>
                Subtotal({cart.length} items):<strong> {sum} </strong>

            </p>
            <small className='subtotal__gift'>
                <input type='checkbox'/>
                This order contains a gift
            </small>
            </>
            
  )}    
            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
        
        />
        <button>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal


