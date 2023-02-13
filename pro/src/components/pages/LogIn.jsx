import React, { useState } from 'react';
// style
import style from './LogIn.module.css';
// libray
import { Link, useNavigate } from 'react-router-dom';
// golbal state
import { useRecoilState } from 'recoil';
import { logInState } from '../../state/logInState';
// static data
import { loginImg } from '../../data/headerMenu';

function LogIn() {

    const Navigate = useNavigate();

    const [isLogin, setIsLogin] = useRecoilState(logInState);

    const [userData, setUserData] = useState({
        email: '',
        pass: ''
    });


    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/users?email=${userData.email}&password=${userData.pass}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setEmail(data)
            // setPass(data)
            setIsLogin(true);
            if(data[0].password === userData.pass) {
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
            <form onSubmit={handleLogIn}>
                <div className={style.logInWrap}>
                    <div className={style.loginPic}><img src={loginImg} alt='login image'/></div>
                    <div style={{ marginBottom: "10px"}} className={style.inputWrap}>
                        <input
                            type='text'
                            className={style.input} 
                            placeholder='emart24@shinsegae.com'
                            name='email'
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div
                        style={{ marginBottom: "10px"}} className={style.inputWrap}
                    >
                        <input 
                            type='password'
                            className={style.input} 
                            name='pass'
                            value={userData.pass}
                            onChange={handleChange}
                        />
                    </div>  
                    <div>
                        <button type="submit" className={style.loginButton}>로그인</button> 
                    </div>
                </div>
            </form>
            <div className={style.relativeLink}>
                {/* <div className={style.seekPass}>비밀번호를 잊어버리셨나요? <Link to='/seeking-password'><span>비밀번호찾기</span></Link></div> */}
                <div className={style.signUp}>계정이 없으신가요? <Link to='/sign-up'><span>가입하기</span></Link></div>
            </div>
        </div>
     );
}

export default LogIn;