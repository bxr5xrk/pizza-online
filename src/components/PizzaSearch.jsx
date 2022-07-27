import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchPizza } from "../api/PizzaService";
import { selectFilter, setSearchValue } from "../store/slices/filterSlice";
import { useDebounce } from "../utils/useDebounce";
import st from "./SortingTypes/SortingTypes.module.scss";

const PizzaSearch = () => {
    const [showModal, setShowModal] = useState(false);
    const [pizza, setPizza] = useState([]);
    const { searchValue } = useSelector(selectFilter);
    const [value, setValue] = useState("");
    const delayedSearchValue = useDebounce(value, 500);
    const inputRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (delayedSearchValue.length > 0 && value !== " ") {
            searchPizza(delayedSearchValue, setPizza);
            dispatch(setSearchValue(delayedSearchValue));
        }
        delayedSearchValue === "" && setPizza([]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delayedSearchValue]);

    const onClickWrapper = () => {
        setValue("");
        dispatch(setSearchValue(""));
        setShowModal(false);
    };

    const onChangeSearchValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            {showModal && (
                <div
                    className={st.container}
                    onClick={(e) =>
                        e.target !== inputRef.current && onClickWrapper()
                    }
                >
                    <input
                        autoFocus
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => onChangeSearchValue(e)}
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
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
            >
                <g data-name="Layer 2" id="Layer_2">
                    <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
                </g>
            </svg>
        </>
    );
};

export default PizzaSearch;
