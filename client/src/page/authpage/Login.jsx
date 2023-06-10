import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";

const Login = () => {
    // Formik initialValues
    const initialValues = {
        email: "",
        password: ""
    };


    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Geçerli bir email adresi girin").required("Email alanı zorunludur"),
        password: Yup.string().required("Şifre alanı zorunludur")
    });


    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post("http://localhost:5001/auth/login", values);
            const token = response.data.token;

            console.log("Token:", token);
            localStorage.setItem("token", JSON.stringify(token));
            resetForm();
        } catch (error) {
            console.error("Giriş hatası:", error);

        }
    };

    return (
        <div className="login__page py-40 flex justify-center items-center">
            <div className="login-container">
                <h2>Login</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="login-form">
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="password">Şifre</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <button type="submit">Giriş Yap</button>
                    </Form>
                </Formik>
            </div>
        </div>

    );
};

export default Login;
