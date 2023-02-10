import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { logInState } from "../../state/logInState";

const withAuth = ( WrappedComponent ) => {

    return ( props ) => {
        const navigate = useNavigate();
        const isLogin = useRecoilValue(logInState);
        if( !isLogin) {
            alert('로그인이 필요합니다.');
            useEffect( () => {
                navigate('/login');
            },[])
            return null;
        }

        return <WrappedComponent {...props} />
    }
}

export default withAuth;