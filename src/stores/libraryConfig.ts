import { create } from "zustand";
import { IBook } from "../types/types.ts"
import api from "../services/api.ts";

interface IUseBooks {
    allBooks: IBook[],
    loading: boolean,

    requireBooks: () => Promise<void>,
}

const useBooks = create<IUseBooks>((set) => ({
    allBooks: [],
    loading: false,
    
    requireBooks: async () => {
        set({loading: true})
        const response = await api.get("/livros");
        set({ allBooks: response.data, loading: false });
    },
}))

export default useBooks