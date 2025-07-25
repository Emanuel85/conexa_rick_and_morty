
export interface IItems {
    id?: number
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
    image?: string,
    episode?: string[],
}

export interface IPages {
    results: IItems[]
}