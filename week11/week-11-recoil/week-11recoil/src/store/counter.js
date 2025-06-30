import { atom, selector } from "recoil";
// export const counteratom = atom({
//     key: "counter",
//     default: 0
// })

// export const evenselector = selector({
//     key: "isEvenSelector",
//     get: function({get}) {
//         const currentcount = get(counteratom);
//         const isEven = (currentcount % 2 == 0);
//         return isEven;
//     }
// })

export const networkatom = atom({
    key: "networkatom",
    default: 103
});

export const jobskatom = atom({
    key: "jobsatom",
    default: 0
});

export const notificationsatom = atom({
    key: "notificationsatom",
    default: 12
});

export const messageatom = atom({
    key: "messageatom",
    default: 0
})