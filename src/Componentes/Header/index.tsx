import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import logo from "../../assets/logo.png"
import userLogo from "../../assets/userLogo.png"
import cartLogo from "../../assets/shoppingCart.png"

export default function Header() {
    
    return (
        <header className={styles.header}>

            <Link 
                className={styles.home}
                to="/"> 
                <img src={logo} alt="Logo"/>
            </Link>

            <div className={styles.div}>
                <Link 
                    className={styles.login}   
                    to="/login">
                    <img className={styles.user} src={userLogo} alt="User Logo" />
                </Link>

                <button 
                    className={styles.login}>
                    <img className={styles.cart} src={cartLogo} alt="Cart Logo" />
                </button>
            </div>

        </header>
    )
}