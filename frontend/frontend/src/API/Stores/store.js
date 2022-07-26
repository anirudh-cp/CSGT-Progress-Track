import create from 'zustand'
import { persist } from 'zustand/middleware'

// const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
// const setLocalStorage = (key, value) =>
//   window.localStorage.setItem(key, JSON.stringify(value));

const useStore = create(set => ({
    email: '',
    password: '',
    errors: false,
    loading: true,

    filterStartDate: "",
    filterEndDate: "",

    group: '',
    name: '',
    empID: 0,
    token: "",

    setEmail: (email_) => set(state => ({ email: email_ })),
    setPassword: (pass_) => set(state => ({ password: pass_ })),
    setErrors: (errors_) => set(state => ({ errors: errors_ })),
    setLoading: (load_) => set(state => ({ loading: load_ })),

    setFilterStartDate: (filterStartDate_) => set(state => ({ filterStartDate: filterStartDate_ })),
    setFilterEndDate: (filterEndDate_) => set(state => ({ filterEndDate: filterEndDate_ })),

    setGroup: (group_) => set(state => ({ group: group_ })),
    setName: (name_) => set(state => ({ name: name_ })),
    setEmpID: (empID_) => set(state => ({ empID: empID_ })),
    setToken: (token_) => set(state => ({ token: token_ })),

}))


export default useStore;
