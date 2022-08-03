import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import st from "./CartModal.module.scss";

const CartModal = ({ postItems, setShowModal }) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            phone: "+380",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(
                    /^(\D){3,15}$/,
                    "Ім'я повинне повинне містити від 3 до 15 літер"
                )
                .required("Ім'я обов'язкове"),
            phone: Yup.string()
                .matches(
                    /^\+(\d{12})$/,
                    "Номер телефону не відповідає дійсності"
                )
                .required("Номер телефону обов'язковий"),
        }),
        onSubmit: (values) => {
            setShowSuccessMessage(true);
            postItems(values);
        },
    });

    const onClickClose = () => {
        setShowModal(false);
        navigate("/pizzas/p=1");
    };

    return (
        <div className={st.modal} onClick={() => setShowModal(false)}>
            <form
                className={st.modal__form}
                onSubmit={formik.handleSubmit}
                onClick={(e) => e.stopPropagation()}
            >
                {showSuccessMessage ? (
                    <div className={st.success}>
                        <h3>Ваше замовлення успішно оформлене </h3>
                        <svg
                            onClick={onClickClose}
                            width="30"
                            height="30"
                            viewBox="0 0 10 10"
                            fill="#111"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"></path>
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
                        </svg>
                    </div>
                ) : (
                    <>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Введіть ім'я"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstName &&
                            formik.errors.firstName && (
                                <p>{formik.errors.firstName}</p>
                            )}
                        <input
                            id="phone"
                            type="string"
                            placeholder="Введіть номер телефону"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <p>{formik.errors.phone}</p>
                        )}
                        <Button type="submit" appearance="primary">
                            Підтвердити замовлення
                        </Button>
                    </>
                )}
            </form>
        </div>
    );
};

export default CartModal;
