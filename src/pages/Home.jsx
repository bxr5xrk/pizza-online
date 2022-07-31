import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    document.title = "Pizza online";

    return (
        <main className="main">
            <section className="home">
                <h1>PIZZA ONLINE</h1>
                <Link to="/login">
                    <button>Увійти в особистий кабінет</button>
                </Link>
            </section>
        </main>
    );
};

export default Home;
