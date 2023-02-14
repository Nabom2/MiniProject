import MainCard from './MainCard';
import { useState, useEffect } from 'react';
import style from './MainSection.module.css';
import { sectionImg } from '../../data/headerMenu'

function MainSection() {
    
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProductData(data);
        })
    .catch(err => {
        console.error(err);
    })
},[]);

    return ( 
        <section className={style.MainSection}>
            <h6>2월의 이벤트상품</h6>
            <div className={style.sectionCard}><img src={sectionImg} alt='section'/></div>

            <div className={style.MainSectionWrap}>
            {
                productData && productData.map( product => (
                <MainCard
                key={product.id}
                product={product}/>
                ))
            }
            </div>
        </section>
     );
}

export default MainSection;