import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import st from "./CartModal.module.scss";

const CartModal = ({ setFormData }) => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            phone: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .min(3, "Must be 3 characters or more")
                .required("Required"),
            phone: Yup.string()
                .matches(/^\d{9}$/, "must contains 9 numbers")
                .required("Required"),
        }),
        onSubmit: (values) =>
            setFormData({ ...values, phone: `0${values.phone}` }),
    });

    return (
        <div className={st.wrapper}>
            modal window
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="firstName"
                    type="text"
                    placeholder="enter first name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <p>{formik.errors.firstName}</p>
                )}
                <input
                    id="phone"
                    type="number"
                    placeholder="enter phone number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p>{formik.errors.phone}</p>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CartModal;
