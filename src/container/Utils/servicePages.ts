import api from "@/service/apiRickAndMorty";
import { IPages } from "@/service/type";

export const fetchPageData = async (page: string): Promise<IPages> => {
    const data = await api.page.getPage(page)
    return data
}