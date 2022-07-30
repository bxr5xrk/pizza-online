import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import st from "./CartModal.module.scss";

const CartModal = ({ setFormData, setShowModal }) => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            phone: "+380",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Ім'я не повинне перевищувати 15 символів")
                .min(3, "Ім'я повинне складатися більш ніж з 3 символів")
                .required("Ім'я обов'язкове"),
            phone: Yup.string()
                .matches(
                    /^\+(\d{12})$/,
                    "Номер телефону не відповідає дійсності"
                )
                .required("Номер телефону обов'язковий"),
        }),
        onSubmit: (values) =>
            setFormData({ ...values, phone: `+380${values.phone}` }),
    });

    return (
        <div className={st.wrapper} onClick={() => setShowModal(false)}>
            <form
                onSubmit={formik.handleSubmit}
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    id="firstName"
                    type="text"
                    placeholder="Введіть ім'я"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
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

                <button type="submit">Підтвердити замовлення</button>
            </form>
        </div>
    );
};

export default CartModal;
