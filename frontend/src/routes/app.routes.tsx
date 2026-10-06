import { Route, Routes } from "react-router-dom";
import AuthPage from "../features/auth/pages";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/login" element={<AuthPage />} />
        </Routes>
    )
}