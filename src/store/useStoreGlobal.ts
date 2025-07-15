import { create } from 'zustand'
import { IStoreGlobal } from "./typeStore";

const initialState: IStoreGlobal = {
    pages: 42,
    selectCharacters: {
        character1: {
            id: 0,
            name: "",
            status: "",
            species: "",
            type: "",
            gender: "",
            image: "",
            episode: [],
        },
        character2: {
            id: 0,
            name: "",
            status: "",
            species: "",
            type: "",
            gender: "",
            image: "",
            episode: [],
        }
    },
    containerCharacter: {
        character1: {
            page: 1, items: [{
                id: 0,
                name: "",
                status: "",
                species: "",
                type: "",
                gender: "",
                image: "",
                episode: [],
            }]
        },
        character2: {
            page: 1, items: [{
                id: 0,
                name: "",
                status: "",
                species: "",
                type: "",
                gender: "",
                image: "",
                episode: [],
            }]
        }
    },
    episodes: {}
}

export const useStoreGlobal = create<IStoreGlobal>(set => ({
    ...initialState,
    setPageCharacterContainer: (id, value) => set(state => ({ containerCharacter: { ...state.containerCharacter, [id]: { ...state.containerCharacter[id], page: value } } })),
    setCharacterContainer: (id, items) => set(state => ({ containerCharacter: { ...state.containerCharacter, [id]: { ...state.containerCharacter[id], items } } })),
    setSelectCharacter: (id, value) => set(state => ({ selectCharacters: { ...state.selectCharacters, [id]: value } }))
}))