import React from "react";

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
        </main>
    );
};

export default Home;
