import create  from 'zustand'
import { Buffer } from 'buffer';

import localforage from "localforage";


const useIdentStore = create(set => ({
    hideUserOptions: true,

    setHideUserOptions: (hideUserOptions_) => set(state => ({ hideUserOptions: hideUserOptions_ })),

    getGroup: async () => {
        try {
            let token = await localforage.getItem('access_token')
            return JSON.parse(Buffer.from(token.split('.')[1], 'base64'))['group']
        } catch (e) { }
        return ""
    },

    getName: async () => {
        try {
            let token = await localforage.getItem('access_token')
            return JSON.parse(Buffer.from(token.split('.')[1], 'base64'))['name']
        } catch (e) { }
        return ""
    },

    getEmpID: async () => {
        try {
            let token = await localforage.getItem('access_token')
            return JSON.parse(Buffer.from(token.split('.')[1], 'base64'))['emp_id']
        } catch (e) { }
        return ""
    },

}))

export default useIdentStore;