import GeneroHomePage from "../../Componentes/GeneroHomePage"
import Banner from "../../assets/homePageBanner.png"
import useBooks from "../../stores/libraryConfig"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export default function Home() {

    const {allBooks, requireBooks} = useBooks((state) => state)
    const [genres, setGenres] = useState<string[]>([])

    useEffect (() => {
        const auxFunction = async () => {
            await requireBooks()
        }
        auxFunction()
    }, [requireBooks, allBooks])
    
    useEffect(() => {
        setGenres([...new Set(allBooks.map((book) => {return book.genero}))])
    }, [allBooks])

    return (
        <div className={styles.container}>
            <img src={Banner} alt="Banner" />
            <div className={styles.info}>
                {
                    genres.map((genre) => (
                        <GeneroHomePage key={genre}
                            books={allBooks.filter((book) => { 
                                return book.genero === genre
                            })}
                            genre={genre}
                        />
                    ))
                }
            </div>
        </div>
    )
}