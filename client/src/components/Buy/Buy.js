import { useEffect, useState } from "react";
import { useBuyContext } from "../../context/BuyContext"
import { BuyProduct } from "./BuyProduct/BuyProduct"


export const Buy = () => {

  const {products}=useBuyContext();
  
  const [buy,setBuy]=useState([]);
  useEffect(()=>{
setBuy(products)
  },[products])
  return (

    // <section className="shop-section">
    //   <div className='cart-box'>
    //                   {/* <div className='cart-icon'><i className="fa-solid fa-cart-shopping fa-2x non-empty"></i></div> */}
    //                   <div className='whole-cart-window hide'>
    //                       <h2>Shoping Bag</h2>
    //                       <div className='cart-wrapper'>
    //                           <div className='cart-shop'>
    //                               <img src='\image' alt='' />
    //                               <div className='details'>
    //                                   <p>Ldasdasd safasfgasff asfasfasfasfasf.</p>
    //                                   <span className='quantity'>Quantity: 1</span>
    //                                   <span className='price'>Price: $23.5</span>

    //                               </div>
    //                               <div className='cancel'><i className="fas fa-window-close"></i></div>
    //                           </div>
    //                       </div>
    //                       <div className='subtotal'>Subtotal: $0.0</div>
    //                       <div className='checkout'>Checkout</div>
    //                       <div className='view-cart'>View Cart</div>
    //                   </div>
    //                   </div>

    // </section>


    <section >
      <div className="wrapper">

     
        <h2><svg xmlns="https://rainsystems.eu/wp-content/uploads/Logo_Rain_Systems-mini.png" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="white" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
          Shoping Bag</h2>
       
        <hr />
        <div className='cart-box'>
        <div className='whole-cart-window '>

        {buy.map(x=><BuyProduct key={x._id} {...x}/>)}

        </div>
        </div>
        <hr />
        <div >

          <div className='subtotal'>Subtotal: $0.0</div>

          <button id='buybtn'>BUY</button>
        </div>
      </div>

    </section>
  )
}
