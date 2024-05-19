import { atom } from "recoil";

export const downloadUrlState = atom<string>({
    key: 'downloadUrlState',
    default: ''
});