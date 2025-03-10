import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
import loginPic from "../../assets/loginPagePicture.png"
import logo from "../../assets/logo.png" 
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const userSchema = z.object ({
    password: z
        .string()
        .nonempty("-> A senha não pode estar em branco.")
        .min(6, "-> A senha deve conter ao menos 6 caracteres."),
    email: z
        .string()
        .nonempty("-> O email não pode estar em branco.")
        .email("-> O email digitado é inválido.")
})

type User = z.infer<typeof userSchema>

export default function Login() {
    
    const navigate = useNavigate()
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<User>( {
        resolver: zodResolver(userSchema)
    })
    
    async function resetFields() {
        await new Promise(resolve => setTimeout(resolve, 1500))
        reset()
        navigate("/")
    }

    return (
        <div className={styles.container}>
            <img
                className={styles.mainPic}
                src={loginPic}
                alt="Login picture"/>
            <div className={styles.mainDiv}>
                <div className={styles.logoDiv}>
                    <img 
                        className={styles.logoPic}
                        src={logo}
                        alt="Logo"
                    />
                </div>
                <div className={styles.divOne}>
                    <p className={styles.saudacao}> Bem-vindo(a)!</p>
                    <p className={styles.entrada}> Entre na sua conta</p>
                </div>
                <form onSubmit={handleSubmit(resetFields)} className={styles.divTwo}>
                    <div className={styles.subOne}>
                        <label className={styles.emailLabel} htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            className={styles.email}
                            type="email"
                            placeholder="Digite aqui seu email"
                            {...register("email")}/>
                            {errors.email && <span className={styles.errorMessage}> {errors.email.message} </span>}
                    </div>
                    <div className={styles.subTwo}>
                        <label className={styles.passwordLabel} htmlFor="password">Senha</label>
                        <input
                            id="password"
                            className={styles.password}
                            type="password"
                            placeholder="Digite aqui sua senha"
                            {...register("password")}/>
                            {errors.password && <span className={styles.errorMessage}> {errors.password.message} </span>}
                    </div>
                    <div>
                        <button
                            className={`${isSubmitting ? styles.disabledEnterButton : styles.enabledEnterButton}`}
                            type="submit"
                            disabled={isSubmitting}>
                            {isSubmitting ? "Quase lá..." : "Entrar"}
                        </button>
                    </div>
                    <button className={styles.registerButton}>Cadastre-se</button>
                </form>
            </div>
        </div>
    )
}