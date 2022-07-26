import create from 'zustand'
import { persist } from 'zustand/middleware'


const useUserStore = create(
    persist(
        (set, get) => ({
            group: '',
            name: '',
            empID: 0,
            token: "",

            setGroup: (group_) => set(state => ({ group: group_ })),
            setName: (name_) => set(state => ({ name: name_ })),
            setEmpID: (empID_) => set(state => ({ empID: empID_ })),
            setToken: (token_) => set(state => ({ token: token_ })),

            UserDeleteEverything: () => set(state => ({ name: "", group:"", empID:"", token:"" })),
        }),
        {
            name: 'user-storage',
            getStorage: () => sessionStorage,
        }
    )

);

export default useUserStore;