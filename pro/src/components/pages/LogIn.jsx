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
    const [login, setLogin] = useRecoilState(logInState);

    useEffect(() => {
    console.log(login)
    },[email, pass])

    console.log(logInState)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    
    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleLogIn = () => {
        fetch(`http://localhost:3001/users?email=${email}&password=${pass}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setEmail(data)
            // setPass(data)
            setLogin(true)
            if(data[0].password === pass) {
                alert('로그인 성공했습니다.');
                Navigate('/check-in');
            } else {
                alert('등록되지 않은 회원입니다.');
            }
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div>
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
                    <button onClick={handleLogIn} className={style.loginButton}>로그인</button>
                </div>
        </div>
        <div className={style.relativeLink}>

        <div className={style.seekPass}>비밀번호를 잊어버리셨나요?<Link to='/seeking-password'><span>비밀번호찾기</span></Link></div>

        <div className={style.signUp}>계정이 없으신가요?<Link to='/sign-up'><span>가입하기</span></Link></div>
        </div>
        </div>
        // <div className={style.logInWrap}>
           
        //         <input />
        //         <input />
        //         <button onClick={handleLogIn}>로그인</button>
           
        // </div>
     );
}

export default LogIn;