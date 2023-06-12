import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom"
import designBlob1 from "../../img/blob.svg"
import designBlob2 from "../../img/blob (1).svg"
const Login = () => {
    const [err, setErr] = useState('')
    useEffect(() => {
        setTimeout(() => { setErr("") }, 2000)
    }, [err])

    const navigate = useNavigate()
    const initialValues = {
        email: "",
        password: ""
    };


    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Düzgün bir email adresi daxil edin").required("Email mütləq daxil edilməlidir !"),
        password: Yup.string().required("Şifre mütləq daxil edilməlidir ")
    });


    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post("http://localhost:5001/auth/login", values);
            const token = response.data.token;
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("userid", JSON.stringify(response.data._id))
            setErr("")
            navigate("/")
            resetForm();
        } catch (error) {
            setErr(error.response.data.message);

        }
    };

    return (
        <>
          



            <div className="login__page py-24 flex justify-center items-center">
                <div className="login__container w-[80vw] md:w-[50vw] lg:w-[30vw] flex flex-col justify-center items-center relative">
                   {
                err &&
                <figure className="notification bg-red-500 absolute top-10 w-[80%] p-5 z-20 rounded-lg ">
                    <div className="notification__body text-white text-xl">
                        {err}
                    </div>

                </figure>
            }
                    <h2 className="text-3xl">Login</h2>
                    <div className="design__img1">
                        <img src={designBlob1} alt="" />
                    </div>
                    <div className="design__img2">
                        <img src={designBlob2} alt="" />
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form className="login-form py-10">
                            <div className=" input__group my-5">
                                <label htmlFor="email" className="my-2 block">Email</label>
                                <Field type="email" id="email" name="email" className="py-2 rounded-md" />
                                <ErrorMessage name="email" component="div" className="error-message text-red-400" />
                            </div>
                            <div>
                                <label htmlFor="password" className="my-2 block">Şifre</label>
                                <Field type="password" id="password" name="password" className="py-2 rounded-md" />
                                <ErrorMessage name="password" component="div" className="error-message  text-red-400" />
                            </div>
                            <div className="button__group w-full flex justify-center items-end flex-col">
                                <button type="submit" className="py-3 px-5 my-4 rounded-lg text-white z-10">Daxil ol</button>
                                <Link to="/register" className="mt-5 z-20"><button className="py-2  px-3 rounded-lg text-white ">Qeydiyyatdan keçin</button></Link>

                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>
        </>


    );
};

export default Login;
