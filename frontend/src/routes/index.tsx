import { BrowserRouter } from "react-router-dom"
import AppRouter from "./app.routes"
export default function Routes (){
    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}