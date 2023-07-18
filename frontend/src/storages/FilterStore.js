import create from 'zustand'


const useFilterStore = create(set => ({
    filterStartDate: "",
    filterEndDate: "",
    updateKey: "",
    facultyUpdateKey: "",

    setFilterStartDate: (filterStartDate_) => set(state => ({ filterStartDate: filterStartDate_ })),
    setFilterEndDate: (filterEndDate_) => set(state => ({ filterEndDate: filterEndDate_ })),
    setUpdateKey: (updateKey_) => set(state => ({ updateKey: updateKey_ })),
    setFacultyUpdateKey: (facultyUpdateKey_) => set(state => ({ facultyUpdateKey: facultyUpdateKey_ })),

}))


export default useFilterStore;
