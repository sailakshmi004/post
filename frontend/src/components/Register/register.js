
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Function to validate email
    const validateEmail = (email) => {
        if (emailPattern.test(email)) {
            console.log("Valid email address");
            return true;
        } else {
            console.log("Invalid email  address");
            return false;
        }
    };

    const Submit = async (event) => {
        event.preventDefault();
        try {
            
            if (!validateEmail(email)) {
                alert("Invalid email format address");
                return;
            }

            const response = await axios.post('http://localhost:8000/register', { name, email, password });

            if (response.data) {
                console.log(response.data);
                alert("Successfully Registered");
                nav("/login");
            }
        } catch (error) {
            if (error.response) {
                console.log("Email already exists");
                // alert("Fill details");
            } else {
                console.log(error);
                alert("An error occurred. Please try again later.");
            }
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
                                <h2 className="text-uppercase text-center mb-5">Register</h2>
                                <form autoComplete="off"> {/* Add autoComplete="off" to the form */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="name" className="form-control form-control-lg" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="off" /> {/* Add autoComplete="off" to each input */}
                                        <label className="form-label" htmlFor="name">Your Name</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="off" /> {/* Add autoComplete="off" to each input */}
                                        <label className="form-label" htmlFor="email">Your Email</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="off" /> {/* Add autoComplete="off" to each input */}
                                        <label className="form-label" htmlFor="password">Your Password</label>
                                        <br/>
                                        <button style={{marginLeft:"35%"}} type="button" onClick={Submit} className="btn btn-light btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                    </div>
                                </form>
                                <div className="d-flex justify-content-center">
                                    <p className="text-center text-muted mt-3 mb-0">Already have an account? <a href="/login" className="fw-bold">Login here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    

    );
};

export default Register;
