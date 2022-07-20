import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Page404 from "./pages/Page404/Page404";
import PizzaPage from "./pages/PizzaPage";
import PizzasPage from "./pages/PizzasPage";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza" element={<PizzasPage />} />
                <Route path="/pizza/:id" element={<PizzaPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
