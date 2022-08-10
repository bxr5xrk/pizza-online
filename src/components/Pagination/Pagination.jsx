import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-scroll";
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
            navigate(`../pizzas/p=${page - 1}`);
        } else if (variant === "next") {
            navigate(`../pizzas/p=${page + 1}`);
        } else {
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
                    <Link
                        className={page !== 1 ? st.page : st.inactive}
                        onClick={() => page > 1 && changePage(page, "previous")}
                        activeClass="active"
                        to="title"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        {"<"}
                    </Link>

                    {[...new Array(pages)].map((_, p) => (
                        <Link
                            onClick={() => changePage(p + 1, "var")}
                            className={
                                p + 1 === page
                                    ? `${st.page} ${st.page__selected}`
                                    : st.page
                            }
                            key={p}
                            activeClass="active"
                            to="title"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            {p + 1}
                        </Link>
                    ))}

                    <Link
                        activeClass="active"
                        to="title"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={page !== pages ? st.page : st.inactive}
                        onClick={() =>
                            page === pages - 1 && changePage(page, "next")
                        }
                    >
                        {">"}
                    </Link>
                </>
            )}
        </div>
    );
};

export default Pagination;
