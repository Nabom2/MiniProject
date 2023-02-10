import {atom} from'recoil';
import {recoilPersist} from 'recoil-persist';

// const { persistAtom } = recoilPersist()

export const logInState = atom({
    key: 'logInState',
    default: false,
    // effects_UNSTABLE: [persistAtom],
});

// 로그인시에만 QR발급 page에 접근할 수 있도록 제작할 예정