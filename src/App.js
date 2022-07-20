import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PizzaItem from "./components/PizzaItem/PizzaItem";
import PizzaList from "./components/PizzaList";
import Home from "./pages/Home";
import Page404 from "./pages/Page404/Page404";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza" element={<PizzaList />} />
                <Route path="/pizza/:id" element={<PizzaItem />} />
                <Route path="*" element={<Page404 />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
