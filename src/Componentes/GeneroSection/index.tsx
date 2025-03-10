import styles from "./styles.module.css"
import CardLivro from "../CardLivro"
import useBooks from "../../stores/libraryConfig"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IBook } from "../../types/types"

export default function Genero() {
    
    const {allBooks, requireBooks, loading} = useBooks((state) => state)
    const [filteredBooks, setFilteredBooks] = useState<IBook[]>([])
    const [searchTitle, setSearchTitle] = useState<string>("")
    const {genero} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        requireBooks()
    }, [requireBooks])

    useEffect(() => {
        if(Array.isArray(allBooks) && !loading) {
            const filtered = allBooks.filter((book) => book.genero === genero)
            setFilteredBooks(filtered)
        }
    }, [allBooks, loading, genero])

    if (loading) return (
        <span className={styles.error}>Carregando livros do gênero {genero}...</span>
    )

    return (
        <div className={styles.container}>
            <div className={styles.inputDiv}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Pesquisar por título"
                    onChange={(e) => setSearchTitle(e.target.value)}/>
            </div>
            <div>
                <button
                    className={styles.voltarButton}
                    onClick={() => navigate("/")}
                    ><span>{"<  "} {genero}</span>
                </button>
                <div className={styles.cardDiv}>
                    {   
                        filteredBooks
                            .filter(
                                (book) => searchTitle === "" || book.titulo.toLowerCase().includes(searchTitle.toLowerCase())
                            ).map((book: IBook) => (
                                <CardLivro
                                    autor={book.autor}
                                    capa={book.capa}
                                    genero={book.genero}
                                    id={book.id}
                                    preco={book.preco}
                                    sinopse={book.sinopse}
                                    titulo={book.titulo}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}