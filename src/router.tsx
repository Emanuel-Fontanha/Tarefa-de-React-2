import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Genero from "./Pages/Genero"
import Detalhes from "./Pages/Detalhes"
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
    {
        path: "/",                                  //--> caminho padrão do site.
        element: <RootLayout/>,                     //--> layout base compartilhado entre páginas definidas no children
        children: [
            {
                index: true,                        //--> evitar a repetição de "path: /"
                element: <Home/>
            },
            {
                path: "/genero/:genero",
                element: (
                    <Genero />
                )
            },
            {
                path: "/detalhes/:id",
                element: <Detalhes />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router