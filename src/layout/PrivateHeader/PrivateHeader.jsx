import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { setAuth } from "../../store/slices/authSlice";
import st from "./PrivateHeader.module.scss";

const PrivateHeader = () => {
    const dispatch = useDispatch();
    const items = [
        { name: "Головна", pathname: "/" },
        { name: "Замовлення", pathname: "/orders" },
        { name: "Статистика", pathname: "/statistics" },
    ];
    const { pathname } = useLocation();
    const [showModal, setShowModal] = useState(false);

    return (
        <header className={st.header}>
            <div className={st.menu}>
                <svg
                    onClick={() => setShowModal(!showModal)}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384.97 384.97"
                    width={30}
                    height={30}
                >
                    <path
                        d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
                    />
                    <path
                        d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
                    />
                    <path
                        d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
			c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
                    />
                </svg>

                {showModal && (
                    <div className={st.menu__list}>
                        {items.map((i, count) => (
                            <Link
                                to={i.pathname}
                                className={`${st.list__item} ${
                                    pathname === i.pathname ? st.active : ""
                                }`}
                                key={count}
                                onClick={() => setShowModal(false)}
                            >
                                {i.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className={st.nav}>
                {items.map((i, count) => (
                    <Link
                        to={i.pathname}
                        className={`${st.item} ${
                            pathname === i.pathname ? st.active : ""
                        }`}
                        key={count}
                    >
                        {i.name}
                    </Link>
                ))}
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
