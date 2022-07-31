import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setSort } from "../store/slices/filterSlice";
import st from "./SortingTypes/SortingTypes.module.scss";

const PizzaSort = () => {
    const { sorting, selectedSort } = useSelector(selectFilter);
    const dispatch = useDispatch();
    const [openPoUp, setOpenPopUp] = useState(false);
    const sortRef = useRef();

    const onClickPipUpItem = async (obj) => {
        dispatch(setSort(obj));
        setOpenPopUp(false);
    };

    const hidePopUp = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setOpenPopUp(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", hidePopUp);

        return () => document.body.removeEventListener("click", hidePopUp);
    }, []);

    return (
        <div className={st.sort} ref={sortRef}>
            <div
                className={st.sort__label}
                onClick={() => setOpenPopUp(!openPoUp)}
            >
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортувати:</b>
                <span>{selectedSort.name}</span>
            </div>

            {openPoUp && (
                <ul className={st.popup}>
                    {sorting.map((obj, i) => (
                        <li
                            key={i}
                            onClick={() => onClickPipUpItem(obj)}
                            className={
                                selectedSort.sortProp === obj.sortProp
                                    ? `${st.item} ${st.active}`
                                    : `${st.item}`
                            }
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PizzaSort;
