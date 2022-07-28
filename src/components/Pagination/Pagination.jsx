import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTotalPizzaCount } from "../../api/PizzaService";
import { selectFilter, setPage } from "../../store/slices/filterSlice";
import { selectPizza } from "../../store/slices/pizzaSlice";
import st from "./Pagination.module.scss";

const Pagination = () => {
    const [totalPages, setTotalPages] = useState();
    const { selectedCategory, limitItems, page } = useSelector(selectFilter);
    const { status } = useSelector(selectPizza);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pageParams } = useParams();

    useEffect(() => {
        getTotalPizzaCount(setTotalPages, selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        dispatch(setPage(Number(pageParams)));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageParams]);

    const changePage = (page, variant) => {
        if (variant === "previous") {
            page > 1 && dispatch(setPage(page - 1));
            navigate(`../pizzas/p=${page - 1}`);
        } else if (variant === "next") {
            page < pages && dispatch(setPage(page + 1));
            navigate(`../pizzas/p=${page + 1}`);
        } else {
            dispatch(setPage(page));
            navigate(`../pizzas/p=${page}`);
        }
    };

    const pages = Math.ceil(totalPages / limitItems);

    if (pageParams < 1 || pageParams > pages) {
        return <h1 className={st.wrongPage}>Такої сторінки не існує</h1>;
    }

    return (
        <div className={st.pagination}>
            {status !== "loading" && pages > 1 && (
                <>
                    <span
                        className={page !== 1 ? st.page : st.inactive}
                        onClick={() => page > 1 && changePage(page, "previous")}
                    >
                        {"<"}
                    </span>

                    {[...new Array(pages)].map((_, p) => (
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
                        className={page !== pages ? st.page : st.inactive}
                        onClick={() =>
                            page === pages - 1 && changePage(page, "next")
                        }
                    >
                        {">"}
                    </span>
                </>
            )}
        </div>
    );
};

export default Pagination;
