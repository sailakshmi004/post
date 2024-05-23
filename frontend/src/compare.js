import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Submit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        try {
            const response = await axios.post('${process.env.REACT_APP_server}/login', { email, password });
            if (response.data.message === 'Login successful') {
                console.log(response.data);
                alert("Login Successful");
                nav("/article");
            } else {
                setError("Invalid credentials. Please check your email and password.");
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="back">
            <section className="logImage">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Login</h2>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            <label className="form-label" htmlFor="form3Example3cg">Your password</label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="button" onClick={Submit} className="btn btn-light btn-block btn-lg gradient-custom-4 text-body">Login</button><br />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
