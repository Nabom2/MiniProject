import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { logInState } from "../../state/logInState";

const withAuth = ( WrappedComponent ) => {

    return ( props ) => {
        const navigate = useNavigate();
        const isLogin = useRecoilValue(logInState);
        if(!isLogin) {
            useEffect( () => {
                console.log('123');
                navigate('/login');
                alert('로그인이 필요한 서비스입니다.')
            },[])
            return null;
        }

        return <WrappedComponent {...props} />
    }
}

export default withAuth;