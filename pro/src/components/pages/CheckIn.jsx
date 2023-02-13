import React from 'react';
import withAuth from '../withAuth/withAuth';
import style from './CheckIn.module.css';
import QRcode from 'qrcode';
import { useState } from 'react';
import { loginImg } from '../../data/headerMenu';


function CheckIn() {

    const [src, setSrc] = useState('')

    const generate = () => {
        QRcode.toDataURL('https://kdt.spharosacademy.com/lpe/lpeLogin.do')
        .then(setSrc)
    }

    return (

    <div> 
        
        <div className={style.fontTop}>
            <p>매장 입장 시 QR코드를 스캔해주세요.</p>
        </div>
                <div className={style.logInWrap}>

                    <div className={style.loginPic}>
                        <img src={loginImg} alt='login image'/>
                    </div>

                    <div>
                    {src ? 
                        <img className={style.QR} src={src} alt='QRcode' />
                        : 
                        <button className={style.QRbutton} onClick={generate}>QR코드 발급</button>}
                    </div>
                </div> 
        <div className={style.fontBottom}>
            <p>매장에서 쇼핑 후 퇴장시 자동결제됩니다.</p>
        </div>
    </div>
     );
}

export default withAuth(CheckIn);