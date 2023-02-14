import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './MainCard.module.css';
import { cartButtonimg } from '../../data/headerMenu';
import { useRecoilState } from 'recoil';
import { logInState } from '../../state/logInState';

function MainCard({product}) {

    const userId = 1;

    const Navigate = useNavigate();
    const [isLogin, setIsLogin] = useRecoilState(logInState);

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
       { isLogin ? <div
            onClick={handleAddCart}
            className={style.cartButton}>
            <img src={cartButtonimg} alt='add cart'/>
            </div> : '' }
            <Link to = {`/product-detail/${product.id}`}>
            <img src={product.thumbnail } alt={product.description}/>
            <p>{product.name}</p>
            </Link>
        </div>
        </>
     );
}

export default MainCard;