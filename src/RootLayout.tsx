import { Outlet } from "react-router-dom";
import Header from "./Componentes/Header";

export default function RootLayout () {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}