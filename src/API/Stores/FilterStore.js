import create from 'zustand'


const useFilterStore = create(set => ({
    filterStartDate: "",
    filterEndDate: "",

    setFilterStartDate: (filterStartDate_) => set(state => ({ filterStartDate: filterStartDate_ })),
    setFilterEndDate: (filterEndDate_) => set(state => ({ filterEndDate: filterEndDate_ })),
}))


export default useFilterStore;
