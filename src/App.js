import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/PublicPages/HomePage/HomePage";
import HomePage from "./pages/PrivatePages/HomePage/HomePage";
import OrdersPage from "./pages/PrivatePages/OrdersPage/OrdersPage";
import StatisticsPage from "./pages/PrivatePages/StatisticsPage/StatisticsPage";
import Cart from "./pages/PublicPages/Cart/Cart";
import LoginPage from "./pages/PublicPages/LoginPage/LoginPage";
import Page404 from "./pages/PublicPages/Page404/Page404";
import PizzaPage from "./pages/PublicPages/PizzaPage/PizzaPage";
import PizzasPage from "./pages/PublicPages/PizzasPage";
import { selectAuth } from "./store/slices/authSlice";

function App() {
    const { isAuth } = useSelector(selectAuth);

    useEffect(() => {
        localStorage.setItem("isAuth", isAuth);
    }, [isAuth]);

    return (
        <>
            {isAuth ? (
                <>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/orders" element={<OrdersPage />} />
                        <Route
                            path="/statistics"
                            element={<StatisticsPage />}
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
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
