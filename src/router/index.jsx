import { Navigate } from "react-router-dom";
import Cart from "../pages/publicPages/Cart/Cart";
import HomePage from "../pages/publicPages/HomePage/HomePage";
import LoginPage from "../pages/publicPages/LoginPage/LoginPage";
import OrdersPage from "../pages/privatePages/OrdersPage/OrdersPage";
import Page404 from "../pages/publicPages/Page404/Page404";
import PizzaPage from "../pages/publicPages/PizzaPage/PizzaPage";
import PizzasPage from "../pages/publicPages/PizzasPage";
import PrivateHomePage from "../pages/privatePages/PrivateHomePage/PrivateHomePage";
import StatisticsPage from "../pages/privatePages/StatisticsPage/StatisticsPage";

export const publicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/cart", element: <Cart /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/pizzas/p=:pageParams", element: <PizzasPage /> },
    { path: "/pizza/:id", element: <PizzaPage /> },
    { path: "*", element: <Page404 /> },
];

export const privateRoutes = [
    { path: "/", element: <PrivateHomePage /> },
    { path: "/orders", element: <OrdersPage /> },
    { path: "/statistics", element: <StatisticsPage /> },
    { path: "*", element: <Navigate to="/" replace /> },
];
