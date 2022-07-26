import create from 'zustand'


const useAuthStore = create(set => ({
    email: '',
    password: '',
    errors: false,
    loading: true,

    setEmail: (email_) => set(state => ({ email: email_ })),
    setPassword: (pass_) => set(state => ({ password: pass_ })),
    setErrors: (errors_) => set(state => ({ errors: errors_ })),
    setLoading: (load_) => set(state => ({ loading: load_ })),

    
    AuthDeleteEverything: () => set(state => ({ email:"", password:"" })),

}))


export default useAuthStore;
