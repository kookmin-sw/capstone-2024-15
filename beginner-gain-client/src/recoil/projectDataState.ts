import { atom } from "recoil";
import {IMakeProject} from "@/types/Project";
import {getCookie} from "cookies-next";

export const projectDataState = atom<IMakeProject>({
    key: 'projectDataState',
    default: {
        name: '',
        description: '',
        select: [],
        userId: getCookie('accessId') || '',
    }
});

