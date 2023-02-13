import React from 'react';
import style from './MyPage.module.css';
import withAuth from '../withAuth/withAuth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { logInState } from '../../state/logInState';
import { Link } from 'react-router-dom'
import { userNameState } from '../../state/userNameState';

function MyPage() {

    const [isLogin, setIsLogin] = useRecoilState(logInState);
    const userName = useRecoilValue(userNameState);

    return ( 
        <div>
            <div className={style.header}>
                <h3>마이페이지</h3>
                <nav>
                    <ul>
                        <li><button onClick={()=>setIsLogin(false)}><Link to='/'>로그아웃</Link></button></li>   
                        <li><button><Link to='/SeekingPass'>정보수정</Link></button></li>
                    </ul>
                </nav>
            </div>
                <div className={style.customer}>
                    { isLogin ?
                    `${userName}님 반갑습니다.`
                    :''}
                </div>
            <div>
                구매내역
                전자영수증
            </div>


        </div>
     );
}

export default withAuth(MyPage);