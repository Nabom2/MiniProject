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
            <h2>{product.name}</h2>
            <p>⭐ {product.rating}</p>
            <p><span>{product.price - (product.price * product.discount)}원</span></p>
            <p>{product.description}</p>
            <p>제조사 : {product.brand}</p>
        </>)}
          </div>
      
    </div>
   );
}

export default ProductDetail;