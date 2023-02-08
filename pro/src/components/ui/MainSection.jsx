import MainCard from './MainCard';
import { useState, useEffect } from 'react';
import style from './MainSection.module.css';

function MainSection() {
    
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProductData(data.products)
        })
    .catch(err => {
        console.error(err);
    })
},[]);

    return ( 
        <section className={style.MainSection}>
            {
                productData && productData.map( product => (
                <MainCard
                key={product.id}
                product={product}/>
                ))
            }
        </section>
     );
}

export default MainSection;