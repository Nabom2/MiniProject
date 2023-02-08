import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './ProductDetail.module.css';

function ProductDetail() {

    const {id} = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(data => {
        console.log(data);
        setProduct(data)
    })
        .catch(err => console.log(err))
},[id]);
// ProductDetail 에러 잡아야함...왜 계속 mapping error 뜨는지 모르겠음
return ( 
    <div>
          <div className={style.productWrap}>
            { product && (
                <>
            <img src={product.thumbnail} alt={product.description}/>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.discount}</p>
            <p>{product.price - (product.price * product.discount)}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.rating}</p>
            <p>{product.brand}</p>
            {
              product.images.map((image, idx) => (
                <img 
                  src={image} 
                  alt={`${product.description}+${idx}`} 
                  key={idx}
                />
              ))
            }
        </>)}
          </div>
      
    </div>
   );
}

export default ProductDetail;