import React from 'react';
import MainSection from '../ui/MainSection';
import styles from './Main.module.css';

function Main() {
    return ( 
        <div className={styles.MainWrap}>
            <MainSection/>
        </div>
     );
}

export default Main;
