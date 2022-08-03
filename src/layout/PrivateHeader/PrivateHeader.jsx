import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { setAuth } from "../../store/slices/authSlice";
import st from "./PrivateHeader.module.scss";

const PrivateHeader = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    return (
        <header className={st.header}>
            <div>
                <Link
                    to="/"
                    className={`${st.item} ${pathname === "/" ? st.active : ""}`}
                >
                    Головна
                </Link>
                <Link
                    to="/orders"
                    className={`${st.item} ${pathname === "/orders" ? st.active : ""}`}
                >
                    Замовлення
                </Link>
                <Link
                    to="/statistics"
                    className={`${st.item} ${pathname === "/statistics" ? st.active : ""}`}
                >
                    Статистика
                </Link>
            </div>

            <Button
                appearance="primary"
                onClick={() => dispatch(setAuth(false))}
            >
                Вийти
            </Button>
        </header>
    );
};

export default PrivateHeader;
