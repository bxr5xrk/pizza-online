import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTotalPizzaCount } from "../../api/PizzaService";
import { setPage } from "../../store/slices/pizzaSlice";
import st from "./Pagination.module.css";

const Pagination = () => {
    const [totalPages, setTotalPages] = useState(1);
    const { limitItems, page } = useSelector((state) => state.pizzaSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pageParams } = useParams();

    useEffect(() => {
        getTotalPizzaCount(setTotalPages);
    }, []);

    useEffect(() => {
        dispatch(setPage(Number(pageParams)));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageParams]);

    const pages = Math.ceil(totalPages / limitItems);

    const changePage = (page, variant) => {
        if (variant === "previous") {
            page > 1 && dispatch(setPage(page - 1));
        } else if (variant === "next") {
            page < pages && dispatch(setPage(page + 1));
        } else {
            dispatch(setPage(page));
        }
        navigate(`../pizzas/p=${page}`);
    };

    return (
        <div className={st.pagination}>
            <span
                className={`${st.page} ${page === 1 ? st.inactive : ""}`}
                onClick={() => changePage(page, "previous")}
            >
                {"<"}
            </span>

            {pages > 1 &&
                [...new Array(pages)].map((_, p) => (
                    <span
                        onClick={() => changePage(p + 1, "var")}
                        className={
                            p + 1 === page
                                ? `${st.page} ${st.page__selected}`
                                : st.page
                        }
                        key={p}
                    >
                        {p + 1}
                    </span>
                ))}

            <span
                className={`${st.page} ${page === pages && st.inactive}`}
                onClick={() => changePage(page, "next")}
            >
                {">"}
            </span>
        </div>
    );
};

export default Pagination;
