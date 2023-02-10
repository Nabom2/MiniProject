import React, { useReducer } from 'react';
import style from './LogIn.module.css';
import {Link,useNavigate} from 'react-router-dom';
import { loginImg } from '../../data/headerMenu';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { logInState } from '../../state/logInState';
import { useEffect } from 'react';

function LogIn() {

    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass]= useState('');
    const [isLogin, setIsLogin] = useRecoilState(logInState);

    // useEffect(() => {
    // console.log(isLogin)
    // },[email, pass])

    console.log(logInState)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    
    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/users?email=${email}&password=${pass}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setEmail(data)
            // setPass(data)
            setIsLogin(true);
            if(data[0].password === pass) {
                alert('환영합니다 이마트 무인편의점 매장입니다. 입장을 위해 QR코드 발급 부탁드립니다.');
                Navigate('/check-in');
            } else {
                alert('등록되지 않은 회원입니다.');
            }
        })
        .catch(err => console.log(err))
    }

    
    return ( 
        <div>  
            {
             !isLogin ? 
             <>
            <form onSubmit={handleLogIn}>
                <div className={style.logInWrap}>
                    <div className={style.loginPic}><img src={loginImg} alt='login image'/></div>
                    <div style={{ marginBottom: "10px"}} className={style.inputWrap}>
                        <input
                            type='text'
                            className={style.input} 
                            placeholder='emart24@shinsegae.com'
                            value={email}
                            onChange={handleEmail}/>
                    </div>
                    <div
                        type='password'
                        style={{ marginBottom: "10px"}} className={style.inputWrap}>
                        <input className={style.input} 
                        value={pass}
                        onChange={handlePass}/>
                    </div>  
                    <div>
                        <button onSubmit={handleLogIn} onClick={handleLogIn} className={style.loginButton}>로그인</button> 
                    </div>
                </div>
            </form>
            <div className={style.relativeLink}>
                <div className={style.seekPass}>비밀번호를 잊어버리셨나요?<Link to='/seeking-password'><span>비밀번호찾기</span></Link></div>
                <div className={style.signUp}>계정이 없으신가요?<Link to='/sign-up'><span>가입하기</span></Link></div>
            </div>
            </>
            :
            <div style={{height: "300px"}}>
            {/* <button onSubmit={handleLogIn} onClick={handleLogIn} className={style.logoutButton}>로그아웃</button>  */}
            로그아웃
            </div>
            }
        </div>
     );
}

export default LogIn;