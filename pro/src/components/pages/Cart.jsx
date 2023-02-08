import React from 'react';
import { useState, useEffect } from 'react';
import CartListCard from '../ui/CartListCard';
import style from './Cart.module.css';

function Cart() {

    const userId = 1;
    const [cartDatas, setcartDatas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/carts?userId=${userId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setcartDatas(data)
        });
        },[userId]);

    return ( 
        <div className={style.cartListWrap}>
             {
            cartDatas && cartDatas.map( cartData => (
            <CartListCard 
            key={cartData.id}
            cartData={cartData}/>
            ))
            }                  
        </div>
     );
}

export default Cart;
