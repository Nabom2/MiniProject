import React from 'react';
import style from './MyPage.module.css';
import withAuth from '../withAuth/withAuth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { logInState } from '../../state/logInState';
import { Link } from 'react-router-dom'
import { userState } from '../../state/userNameState';
import { couponImg ,billImg, documentImg, payImg } from'../../data/headerMenu.js';

function MyPage() {

    const [isLogin, setIsLogin] = useRecoilState(logInState);
    const { name } = useRecoilValue(userState);

    return ( 
        <div>
            <div className={style.header}>
                <h3>마이페이지</h3>
                <nav>
                    <ul>
                        <li><button onClick={()=>setIsLogin(false)}><Link to='/'>로그아웃</Link></button></li>   
                        <li><button><Link to='/seeking-password'>정보수정</Link></button></li>
                    </ul>
                </nav>
            </div>
                <div className={style.customer}>
                    { isLogin ?
                    `${name}님 반갑습니다.`
                    :''}
                </div>
            <div>
                    <nav className={style.icon}>
                        <ul>
                            <li className={style.doc}>
                                <img src={documentImg} alt='detailed purchase list'/>
                                <p style={{ paddingRight: "14px"}}>구매내역</p>
                            </li>
                            <li className={style.bill}>
                                <img src={billImg} alt='e-receipt'/>
                                <p>전자영수증</p>
                            </li>
                            <li className={style.cou}>
                                <img src={couponImg} alt='coupon'/>
                                <p>쿠폰함</p>
                            </li>
                            <li className={style.pay}>
                                <img src={payImg} alt='ssgpay'/>
                                <p>SSGPAY</p>
                            </li>
                        </ul>
                    </nav>
                <div className={style.footer}></div>
            </div>


        </div>
     );
}

export default withAuth(MyPage);