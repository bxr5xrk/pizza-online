import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to="/orders">orders </Link>
            <Link to="/statistics">statistics </Link>
        </div>
    );
};

export default HomePage;
