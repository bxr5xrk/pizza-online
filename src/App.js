import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import PrivateHomePage from "./pages/PrivateHomePage/PrivateHomePage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import Cart from "./pages/Cart/Cart";
import LoginPage from "./pages/LoginPage/LoginPage";
import Page404 from "./pages/Page404/Page404";
import PizzaPage from "./pages/PizzaPage/PizzaPage";
import PizzasPage from "./pages/PizzasPage";
import { selectAuth } from "./store/slices/authSlice";
import Layout from "./layout/Layout";
import Privatelayout from "./layout/Privatelayout";

function App() {
    const { isAuth } = useSelector(selectAuth);

    return (
        <>
            {isAuth ? (
                <Privatelayout>
                    <Routes>
                        <Route path="/" element={<PrivateHomePage />} />
                        <Route path="/orders" element={<OrdersPage />} />
                        <Route
                            path="/statistics"
                            element={<StatisticsPage />}
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Privatelayout>
            ) : (
                <Layout>
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
                </Layout>
            )}
        </>
    );
}

export default App;
