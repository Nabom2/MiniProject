import React from 'react';
import { Link } from 'react-router-dom';
import style from './MainCard.module.css';
import { cartButtonimg } from '../../data/HeaderMenu';

function MainCard({product}) {

    const userId = 1;

    const handleAddCart = () => {
        fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        userId: 1,
        products: [
        {
            id: 1,
            quantity: 1,
        }
        ]
    })
    })
    .then(res => {
        res.json();
        if(res.ok){
        window.alert('장바구니에 상품이 담겼습니다.');
        }
    })
    .catch(err => console.error(err));
    }



    return ( 
        <>
        <div className={style.MainCard}>
            <Link to = {`/product-detail/${product.id}`}>
            <img src={product.thumbnail } alt={product.description}/>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p><span>{product.price}원</span></p>
            </Link>
            <div
            onClick={handleAddCart}
            className={style.cartButton}>
            <img src={cartButtonimg} alt='add cart'/>
            </div>
        </div>
        </>
     );
}

export default MainCard;