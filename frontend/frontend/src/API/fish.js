import create from 'zustand'
import { persist } from 'zustand/middleware'

const useFish = create(
    persist(
        (set, get) => ({
            fishes: 0,
            setFish: (fish) => set({ fishes: get().fishes + fish }),
        }),
        {
            name: 'food-storage',
            getStorage: () => sessionStorage, 
        }
    )

);

export default useFish;