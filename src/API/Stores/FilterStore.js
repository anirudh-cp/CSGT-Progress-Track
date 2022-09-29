import create from 'zustand'


const useFilterStore = create(set => ({
    filterStartDate: "",
    filterEndDate: "",
    updateKey: "",

    setFilterStartDate: (filterStartDate_) => set(state => ({ filterStartDate: filterStartDate_ })),
    setFilterEndDate: (filterEndDate_) => set(state => ({ filterEndDate: filterEndDate_ })),
    setUpdateKey: (updateKey_) => set(state => ({ updateKey: updateKey_ })),
}))


export default useFilterStore;
