import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { getAuthValues } from "../../api/PizzaService";
import { setAuth } from "../../store/slices/authSlice";
import st from "./LoginPage.module.scss";

const LoginPage = () => {
    const [authValues, setAuthValues] = useState();
    const [wrongData, setWrongData] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: Yup.object({
            login: Yup.string().required("Логін обов'язковий"),
            password: Yup.string().required("Пароль обов'язковий"),
        }),
        onSubmit: (values) => {
            values.login === authValues.login &&
            values.password === authValues.password
                ? dispatch(setAuth(true))
                : setWrongData(true);
        },
    });

    useEffect(() => {
        getAuthValues(setAuthValues);
    }, []);

    return (
        <div className="main">
            <form
                onSubmit={formik.handleSubmit}
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    id="login"
                    type="text"
                    placeholder="Логін"
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.login && formik.errors.login && (
                    <p>{formik.errors.login}</p>
                )}
                <input
                    id="password"
                    type="string"
                    placeholder="Пароль"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <p>{formik.errors.password}</p>
                )}
                {wrongData && <p>Неправильні дані</p>}
                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default LoginPage;
