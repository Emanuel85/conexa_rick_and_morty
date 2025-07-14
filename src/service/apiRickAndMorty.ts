import { IPages } from "./type";

const api = {
    page: {
        getPage: (query: string) => fetch(`https://rickandmortyapi.com/api/character/?page=${query}`).then(res => res.json() as Promise<IPages>)
    }
}

export default api