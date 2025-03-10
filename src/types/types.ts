export interface IBook {
    id: number,
    titulo: string,
    autor: string,
    genero: string,
    preco: number,
    sinopse: string,
    capa: string
}

export interface IGeneroHomeProps {
    books: IBook[],
    genre: string
}