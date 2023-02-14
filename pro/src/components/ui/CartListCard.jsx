import React from 'react';
import style from './CartListCard.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteImg, subImg, addImg } from '../../data/headerMenu';

function CartListCard({cartData, deleteCheck, setdeleteCheck}) {

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

    const url = `http://localhost:3001/products/${cartData.productId}`;

    useEffect(() => {

        fetch(url)
        .then(res => res.json())
        .then(data => {
            setcartListData({
                ...cartListData,
                productImg: data.thumbnail,
                productName: data.name,
                productPrice: data.price,         
            })
        })
    },[url])

    const handleQtyPatch = (quantity) => {
        fetch(`http://localhost:3001/carts/${cartListData.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                quantity: quantity
        })
    }).then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err))
    }

    const handleQtyIncre = () => {
        setcartListData({
            ...cartListData,
            quantity: cartListData.quantity + 1
        })
        handleQtyPatch(cartListData.quantity + 1);
    }

    const handleQtyDecre = () => {
        if(cartListData.quantity === 1) 
        return;
        setcartListData({
            ...cartListData,
            quantity: cartListData.quantity - 1
        })
        handleQtyPatch(cartListData.quantity - 1);
    }

    const handleDelete = () => {
        fetch(`http://localhost:3001/carts/${cartListData.id}`, {
            method: 'DELETE',
        }).then(res => {
            console.log(res)
            res.ok ? setdeleteCheck(!deleteCheck) : alert ("fail")
        })
        .catch(err => console.log(err))
    }

    return ( 
        // <>
        <div className={style.cartListCard}>
            <h4>{cartListData.productName}</h4>
            <div className={style.cartListCardInfo}>
                <img src={cartListData.productImg} alt={cartListData.productName}/>
                <div className={style.cartStatus}>
                    
                    
                    <div className={style.qtyHandler}>
                        
                        <div onClick={handleQtyDecre}
                        className={style.subButton}>
                        <img src={subImg} alt='decline qty'/>
                        </div>

                        <p>{cartListData.quantity}</p>
                        
                        <div onClick={handleQtyIncre}
                        className={style.addButton}>
                        <img src={addImg} alt='increase qty'/>
                        </div>

                        <div 
                        onClick={handleDelete}
                        className={style.deleteButton}>
                        <img src={deleteImg} alt='delete products'/>
                        </div>
                    </div>
                        <p>{cartListData.productPrice * cartListData.quantity}원</p>
                    </div>
                    <div>
                        
                    </div>
                    </div>
            </div>
            
     );
}

export default CartListCard;
