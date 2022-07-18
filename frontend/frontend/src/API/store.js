import create from 'zustand'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const useStore = create(set => ({
  email: '',
  password: '',
  errors: false,
  loading: true,
  group: '',
  name: '',
  empID: 0,

  token: getLocalStorage("token") || "",

  setEmail: (email_) => set(state => ({ email: email_})),
  setPassword: (pass_) => set(state => ({ password: pass_})),
  setErrors: (errors_) => set(state => ({ errors: errors_})),
  setLoading: (load_) => set(state => ({ loading: load_})),
  setGroup: (group_) => set(state => ({ group: group_})),
  setName: (name_) => set(state => ({ name: name_})),
  setEmpID: (empID_) => set(state => ({ empID: empID_})),

   setToken: (token) =>
    set((state) => {
      setLocalStorage("token", token);
      return { token };
    }),

}))

export default useStore;