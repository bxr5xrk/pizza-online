import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchPizza } from "../../api/PizzaService";
import { setSearchValue } from "../../store/slices/filterSlice";
import { useDebounce } from "../../utils/useDebounce";
import st from "./PizzaSearch.module.css";

const PizzaSearch = () => {
    const [showModal, setShowModal] = useState(false);
    const [pizza, setPizza] = useState([]);
    const { searchValue } = useSelector((state) => state.filterSlice);
    const delayedSearchValue = useDebounce(searchValue, 500);
    const inputRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        // searchValue.length > 0 && searchPizza(delayedSearchValue, setPizza);
        // searchPizza(delayedSearchValue, setPizza);
        // console.log(delayedSearchValue)
        if (searchValue.length > 0) {
            searchPizza(delayedSearchValue, setPizza);
            setSearchValue(delayedSearchValue);
        }
        // delayedSearchValue === "" && setPizza([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delayedSearchValue]);

    return (
        <>
            {showModal && (
                <div
                    className={st.wrapper}
                    onClick={(e) =>
                        e.target !== inputRef.current && setShowModal(false)
                    }
                >
                    <input
                        autoFocus
                        ref={inputRef}
                        placeholder="Enter search value..."
                        type="text"
                        value={searchValue}
                        onChange={(e) =>
                            dispatch(setSearchValue(e.target.value))
                        }
                        className={st.input}
                    />
                    <div className={st.dropdown}>
                        {delayedSearchValue.length > 0 && pizza.length ? (
                            pizza.map((i, count) => (
                                <Link key={i.id} to={`/pizza/${i.id}`}>
                                    <p>
                                        {count + 1}. {i.title}
                                    </p>
                                </Link>
                            ))
                        ) : (
                            <p>
                                {delayedSearchValue !== "" &&
                                    "Нічого не знайдено"}
                            </p>
                        )}
                    </div>
                </div>
            )}
            <svg
                onClick={() => setShowModal(true)}
                className={st.icon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g data-name="Layer 2" id="Layer_2">
                    <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
                </g>
            </svg>
        </>
    );
};

export default PizzaSearch;
