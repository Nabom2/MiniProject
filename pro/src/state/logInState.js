import {atom} from'recoil';
import {recoilPersist} from 'recoil-persist';

const { persistAtom } = recoilPersist()

export const logInState = atom({
    key: 'logInState',
    default: false,
    effects_UNSTABLE: [persistAtom],
});
