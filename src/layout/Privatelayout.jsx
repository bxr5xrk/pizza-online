import React from "react";
import PrivateHeader from "./PrivateHeader/PrivateHeader";

const Privatelayout = ({ children }) => {
    return (
        <>
            <PrivateHeader />
            <main className="main">{children}</main>
        </>
    );
};

export default Privatelayout;
