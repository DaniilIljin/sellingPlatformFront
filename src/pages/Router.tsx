import { Route, Routes } from "react-router-dom";
import App from "./shop/App.tsx";
import RegisterUserForm from "./user/RegisterUserForm.tsx";
import LoginUserForm from "./user/LoginUserForm.tsx";
import BasePage from "./base/BasePage.tsx";

function Router() {
    return (
        <>
            <Routes>
                <Route element={<BasePage/>}>
                    <Route path="register" element={<RegisterUserForm />} />
                    <Route path="login" element={<LoginUserForm />} />
                    <Route path="/" element={<App />} />
                </Route>
            </Routes>
        </>
    );
}

export default Router;