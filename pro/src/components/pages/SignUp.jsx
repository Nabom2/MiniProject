import React from 'react';
import { useState } from 'react';
import style from  './SignUp.module.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const Navigate = useNavigate();
    const [signUp, setSignUp] = useState({});

    const [signUpData, setSignUpData] = useState({
        id: 0,
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
        isDuplicateCheck: false
    });

    const handleChange= (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value
        })
    }

   
    const handleSignUp = (e) => {
        e.preventDefault();

        // if(!signUpData.isDuplicateCheck) {
        //     alert('이메일 중복체크를 해주세요.')
        //     return;
        // } 

        if(signUpData.password === '' || signUpData.passwordCheck === '') {
            alert('비밀번호를 입력해주세요.')
            return;
        } else if (signUpData.password !== signUpData.passwordCheck) {
            alert('비밀번호가 일치하지 않습니다.')
            return;
        }
    
        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify({
            name : signUpData.name,
            email : signUpData.email,
            password : signUpData.password
          })
        }).then(res => {
          console.log(res);
          alert("회원가입이 완료되었습니다.")
          Navigate('/login');
        })
        .then(data => setSignUp(data))
        .catch(err => console.log(err));
    }

    return ( 

    <div>
        <div className={style.SingUPWrap}>
            <div className={style.top}>
                <p>회 원 가 입</p>
            </div>

            <form onSubmit={handleSignUp}>
            <div className={style.info}>
                <div style={{ marginBottom: "40px"}}>
                    <input className={style.input}
                        type='text'
                        placeholder=' 이름 입력'
                        name ='name'
                        value={signUpData.name}
                        onChange={handleChange}/>
                </div>

                <div  style={{ marginBottom: "40px"}}>
                    <input className={style.input} 
                    type='text'
                    placeholder=' 이메일 입력'
                    name ='email'
                    value={signUpData.email}
                    onChange={handleChange}/>                   
                </div>

                {/* <div  style={{ marginBottom: "40px"}}>
                    <button className={style.check} 
                    name ='isDuplicateCheck'
                    value={signUpData.isDuplicateCheck}
                    onChange={handleChange}/>                   
                </div> */}

                <div style={{ marginBottom: "40px"}}>
                    <input className={style.inputPass} 
                    type='password'
                    placeholder=' 비밀번호 입력'
                    name ='password'
                    value={signUpData.password}
                    onChange={handleChange}/> 
                </div>

                <div>
                    <input className={style.inputPass}
                    type='password'
                    placeholder=' 비밀번호 재입력'
                    name ='passwordCheck'
                    value={signUpData.passwordCheck}
                    onChange={handleChange}/>
                </div>

            </div>

            <div>
                <button type="submit" className={style.bottom}>가입하기</button>
            </div>
            </form>

            <div className={style.under}>
                <p></p>
            </div>
        </div>
    </div>
     );
}

export default SignUp;