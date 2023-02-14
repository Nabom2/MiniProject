import React from 'react';
import { useState, useEffect } from 'react';
import CartListCard from '../ui/CartListCard';
import style from './Cart.module.css';
import withAuth from '../withAuth/withAuth';


function Cart() {

    const userId = 1;
    const [cartDatas, setcartDatas] = useState([]);
    const [delCheck, setdeleteCheck] = useState(false);

    useEffect(() => {
        console.log(delCheck);
        fetch(`http://localhost:3001/carts?userId=${userId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setcartDatas(data)
        });
        },[userId,delCheck]);

    return ( 
        <div className={style.cartListWrap}>
            <h2>카 트</h2>
             {
            cartDatas && cartDatas.map( cartData => (
            <CartListCard 
            key={cartData.id}
            cartData={cartData}
            delCheck={delCheck}
            setdeleteCheck={setdeleteCheck}/>
            ))
            }                  
        </div>
     );
}

export default withAuth(Cart);
