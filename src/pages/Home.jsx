import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    document.title = "Pizza online";

    return (
        <main className="main">
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "40px",
                    marginTop: "50px",
                }}
            >
                PIZZA ONLINE
            </h1>
            <Link to="/orders">
                <button>Замовлення</button>
            </Link>
        </main>
    );
};

export default Home;
