import { Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import RegisterUserForm from "./auth/RegisterUserForm.tsx";
import LoginUserForm from "./auth/LoginUserForm.tsx";

function Router() {
    return (
        <>
            <Routes>
                <Route path="register" element={<RegisterUserForm />} />
                <Route path="login" element={<LoginUserForm />} />
                <Route path="/" element={<App />} />
            </Routes>
        </>
    );
}

export default Router;