import React , { useState }from 'react';
import style from  './SeekingPass.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state/userNameState';

function SeekingPass() {
    
    const Navigate = useNavigate();
    const [pass, setPass]= useState('');
    const [changePass, setChangePass] = useState({});

    const userStateData = useRecoilValue(userState);
    
    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleChange = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/users/${userStateData.userId}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                password: pass
            })
        }).then(res => {
          console.log(res);
          alert("비밀번호 변경이 완료되었습니다.")
          Navigate('/mypage');
        })
        .then(data => setChangePass(data))
        .catch(err => console.log(err));
    }

    return ( 

        
        <div className={style.seekingPassWrap}>
            <div className={style.top}>
                <p>비밀번호 변경</p>
            </div>

            <form onSubmit={handleChange}>
                <div style={{ marginBottom: "30px"}}>
                    <input className={style.input} 
                    type='password'
                    placeholder=' 변경할 비밀번호를 입력해주세요.'
                    value={pass}
                    onChange={handlePass}/> 
                </div>

            <div className={style.bottom}>
                <button  type="submit">변경하기</button>
            </div>
            </form>

            <div className={style.under}>
                <p></p>
            </div>
        </div>
     );
}

export default SeekingPass;