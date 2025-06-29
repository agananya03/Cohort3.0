import { atom, selector } from "recoil";
export const counteratom = atom({
    key: "counter",
    default: 0
})

export const evenselector = selector({
    key: "isEvenSelector",
    get: function({get}) {
        const currentcount = get(counteratom);
        const isEven = (currentcount % 2 == 0);
        return isEven;
    }
})