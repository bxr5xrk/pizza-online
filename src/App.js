import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import Page404 from "./pages/Page404/Page404";
import PizzaPage from "./pages/PizzaPage/PizzaPage";
import PizzasPage from "./pages/PizzasPage";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizzas/p=:pageParams" element={<PizzasPage />} />
                <Route path="/pizza/:id" element={<PizzaPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Page404 />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
