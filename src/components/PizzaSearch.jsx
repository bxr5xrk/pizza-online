import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchPizza } from "../api/PizzaService";
import { setSearchValue, setSuitablePizza } from "../store/slices/searchSlice";
import { selectSearch } from "../store/slices/searchSlice";
import { useDebounce } from "../utils/useDebounce";
import st from "./SortingTypes/SortingTypes.module.scss";

const PizzaSearch = () => {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState("");
    const delayedSearchValue = useDebounce(value, 500);
    const inputRef = useRef();
    const dispatch = useDispatch();
    const { status, suitablePizza } = useSelector(selectSearch);

    useEffect(() => {
        if (value.match(/^(\S)[\S ]*/g) !== null) {
            dispatch(searchPizza({ delayedSearchValue }));
        } else {
            dispatch(setSuitablePizza([]));
        }
        dispatch(setSearchValue(value));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delayedSearchValue]);

    const onClickWrapper = () => {
        setValue("");
        dispatch(setSearchValue(""));
        setShowModal(false);
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
                        onChange={(e) => setValue(e.target.value)}
                        className={st.input}
                    />
                    {value.length > 0 && (
                        <div className={st.dropdown}>
                            {status === "loading" ? (
                                <p>Завантаження...</p>
                            ) : status === "success" &&
                              delayedSearchValue.length > 1 ? (
                                suitablePizza.length > 0 ? (
                                    suitablePizza.map((i, count) => (
                                        <Link key={i.id} to={`/pizza/${i.id}`}>
                                            <p>
                                                {count + 1}. {i.title}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p>Нічого не знайдено :(</p>
                                )
                            ) : (
                                status === "failed" && <p>failed</p>
                            )}
                        </div>
                    )}
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
