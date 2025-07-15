import api from "@/service/apiRickAndMorty";
import { IItems } from "@/service/type";

export const fetchPageData = async (page: string): Promise<IItems[]> => {
    const { results } = await api.page.getPage(page)
    return results
}