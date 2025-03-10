import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import { IGeneroHomeProps } from "../../types/types"

export default function GeneroHomePage({ books, genre }: IGeneroHomeProps) {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            
            <div className={styles.divOne}>
                <p className={styles.genreText}>{genre}</p>
                <Link
                    className={styles.link}
                    to={`/genero/${genre}`}>
                    Ver Mais
                </Link>
            </div>

            <div className={styles.divTwo}>
                {books.slice(0, 4).map((book) => (

                    <div className={styles.subContainer} key={book.id}>
                        <button
                            onClick={() => (navigate(`/detalhes/${book.id}`))}
                                className={styles.detailsButton}>
                            <img className={styles.capa} src={book.capa} alt="Capa do Livro"/>
                        </button>

                        <div className={styles.descriptionText}>
                            <div className={styles.authorTitleDiv}>
                                <p className={styles.titleText}>{book.titulo}</p>
                                <p className={styles.authorText}>{book.autor}</p>
                            </div>
                            <p className={styles.priceTag}>R$ {book.preco.toFixed(2)}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}