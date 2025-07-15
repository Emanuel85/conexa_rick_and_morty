import { create } from 'zustand'
import { IStoreGlobal } from "./typeStore";

const initialState: IStoreGlobal = {
    pages: 42,
    page: 1,
    items: [{
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        image: "",
        episode: [],
    }],
}

export const useStoreGlobal = create<IStoreGlobal>(set => ({
    ...initialState,
    setPage: value => set(state => ({ ...state, page: value })),
    setItems: value => set(state => ({ ...state, items: value }))
}))