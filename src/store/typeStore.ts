import { IItems } from "@/service/type"



export interface IStoreGlobal {
    pages: number
    page: number
    items: IItems[]
    setPage?: (value: number) => void
    setItems?: (value: IItems[]) => void
}