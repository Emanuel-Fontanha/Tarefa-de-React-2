import styles from "./styles.module.css"
import { IBook } from "../../types/types";
import { useNavigate } from "react-router-dom";

export default function Cardlivro({autor, capa, id, preco, titulo}: IBook) {
    
    const navigate = useNavigate()
    
    return (
        <div className={styles.container}>
            <img 
                className={styles.cover} 
                src={capa} 
                alt="Capa do Livro" 
                onClick={() => navigate(`/detalhes/${id}`)}/>
            <div className={styles.description}>
                <span className={styles.title}>{titulo}</span>
                <div className={styles.authorPrice}>
                    <span className={styles.author}>{autor}</span>
                    <p className={styles.priceTag}>R$ {preco.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}