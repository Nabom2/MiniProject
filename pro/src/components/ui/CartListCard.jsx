import React from 'react';
import style from './CartListCard.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

function CartListCard() {

    const [cartListData, setcartListData] = useState(
        {
            id: cartData.id,
            userId: cartData.userId,
            productId: cartData.productId,
            productImg: "",
            productName: "",
            productPrice: 0,
            quantity: cartData.quantity,
        }
    )
// Cart에서 mapping시 cartData 선언해줬는데 계속 not define 뜸
    useEffect(() => {
        fetch(`http://localhost:3001/products/${cartListData.id}`)
        .then(res => res.json())
        .then(data => {
            setcartListData({
                ...cartListData,
                productImg: data.thumbnail,
                productName: data.name,
                productPrice: data.price               
            })
        })
    },[cartListData])

    return ( 
        <div className={style.cartListCard}>
                <img src={cartListData.productImg} alt={cartListData.productName}/>
                <div>
                    <h3>{cartListData.productName}</h3>
                    <p>{cartListData.productPrice}</p>
                    <div className={style.qtyHandler}>
                        <button>-</button>
                        <p>{cartListData.quantity}</p>
                        <button>+</button>
                    </div>
                        <p>Total price : {cartListData.productPrice * cartListData.quantity}원</p>
                    </div>
                    <div>
                        <button>삭제</button>
                    </div>
            </div>
     );
}

export default CartListCard;