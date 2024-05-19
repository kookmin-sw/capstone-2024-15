import { atom } from "recoil";
import {ILoginResponse} from "@/types/User";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom<ILoginResponse>({
    key: 'userState',
    default: {
        id: '',
        email: '',
        name: '',
    },
    effects_UNSTABLE: [persistAtom],
});
