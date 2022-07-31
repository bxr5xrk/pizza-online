import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import Page404 from "./pages/Page404/Page404";
import PizzaPage from "./pages/PizzaPage/PizzaPage";
import PizzasPage from "./pages/PizzasPage";

function App() {
    const { isAuth } = useSelector((state) => state.authSlice);

    useEffect(() => {
        localStorage.setItem("isAuth", isAuth);
    }, [isAuth]);

    return (
        <>
            {isAuth ? (
                <>
                    <Routes>
                        <Route path="/orders" element={<OrdersPage />} />
                        <Route
                            path="*"
                            element={<Navigate to="/orders" replace />}
                        />
                    </Routes>
                </>
            ) : (
                <>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/pizzas/p=:pageParams"
                            element={<PizzasPage />}
                        />
                        <Route path="/pizza/:id" element={<PizzaPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/orders"
                            element={<Navigate to="/" replace />}
                        />
                        <Route path="*" element={<Page404 />} />
                    </Routes>

                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
