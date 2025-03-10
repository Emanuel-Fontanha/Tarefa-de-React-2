import { useParams, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { IBook } from "../../types/types"
import api from "../../services/api"

export default function Detalhes() {

    const [book, setBook] = useState<IBook>()
    const navigate = useNavigate()
    const {id} = useParams()
    const price = book?.preco

    // A requisição de apenas 1 livro é mais rápida e mais limpa que usar o estado global do Zustand
    useEffect(() => { 
        if (!id) return;
        api.get(`/livros/${id}`)
        .then(response => setBook(response.data))
        .catch(error => console.log(`Erro ao requerer livros: ${error}`))
    }, [id])


    return (
        <div className={styles.container}>
            <button 
                className={styles.voltarButton} 
                onClick={() => navigate("/")}>
                {"<  "}Detalhes do livro
            </button>
            <div className={styles.mainDiv}>
                <img 
                    className={styles.cover}
                    src={book?.capa} alt="Capa do Livro"
                />
                <div className={styles.description}>
                    <div className={styles.titleAuthorDiv}>
                        <span className={styles.title}>{book?.titulo}</span>
                        <span className={styles.author}>{book?.autor}</span>
                    </div>
                    <div className={styles.sinopseDiv}>
                        <span className={styles.sinopse}>Sinopse</span>
                        <span className={styles.sinopseText}>{book?.sinopse}</span>
                    </div>
                </div>
            </div>
            <button className={styles.buyButton}>
                <span className={styles.priceTag}>R$ {price?.toFixed(2)}</span>
                <span className={styles.addToCart}>Adicionar ao carrinho</span>
            </button>
        </div>
    )
}