import React from 'react';
import withAuth from '../withAuth/withAuth';
import style from './CheckIn.module.css';

function CheckIn() {
    return ( 
        <div className={style.checkInWrap}>
        <button>QR코드 발급하기</button>
        </div>
     );
}

export default withAuth(CheckIn);