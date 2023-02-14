import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './ProductDetail.module.css';

function ProductDetail() {

    const {id} = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        setProduct(data)
    })
        .catch(err => console.log(err))
},[id]);

return ( 
    <div>
          <div className={style.productWrap}>
            { product && (
                <>
            <p>홈 > {product.category}</p>
            <img src={product.thumbnail} alt={product.description}/>
            <p>⭐ {product.rating}</p>
            <h2>{product.name}</h2>
            <p><span>{product.price.toLocaleString('ko-KR')}원</span></p>
            <p><span>{product.description}</span></p>
            <p><span>제조사 : {product.brand}</span></p>
        </>)}
          </div>
      
    </div>
   );
}

export default ProductDetail;