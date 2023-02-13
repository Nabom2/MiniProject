import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './MainCard.module.css';
import { cartButtonimg } from '../../data/headerMenu';

function MainCard({product}) {

    const userId = 1;

    const Navigate = useNavigate();

    const handleAddCart = () => {
        fetch('http://localhost:3001/carts', {
    method: 'POST',//원하는 기능 구현 완료 후 axios를 써보자
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        userId: userId,
        productId: product.id,
        quantity: 1
    })
    })
    .then(res => {
        res.json();
        if(res.ok){
        window.alert('장바구니에 상품이 담겼습니다.');
        Navigate('/cart');
        }
    })
    .catch(err => console.error(err));
    }



    return ( 
        <>
        <div className={style.MainCard}>
            <Link to = {`/product-detail/${product.id}`}>
            <img src={product.thumbnail } alt={product.description}/>
            <div
            onClick={handleAddCart}
            className={style.cartButton}>
            <img src={cartButtonimg} alt='add cart'/>
            </div>
            <p>{product.name}</p>
            {/* <p><span>{product.price}원</span></p> */}
            </Link>
            
        </div>
        </>
     );
}

export default MainCard;