import { IItems } from "@/service/type"

export type ContainerID = 'character1' | "character2"
interface ICharacter {
    page: number,
    items: IItems[]
}

export interface IStoreGlobal {
    selectCharacters: {
        character1: IItems,
        character2: IItems
    }
    setSelectCharacter?: (containerID:string, character:IItems) => void
    containerCharacter: { character1: ICharacter, character2: ICharacter }
    setCharacterContainer?: (id: ContainerID, items: IItems[]) => void
    pages: number
    setPageCharacterContainer?: (id: ContainerID, page: number) => void
}