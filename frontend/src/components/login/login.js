import React, { useState } from 'react';
import Back from '../background.js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const Submit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }
    try {
        const response = await axios.post('https://post-khhn.onrender.com/login', { email, password });
        if (response.data.message === 'Login successful') {
        console.log(response.data);
        alert("Login Successful");
        nav("/article");
    } else {
        console.log("Invalid credentials");
        alert("Invalid credentials. Please check your email and password.");
    }
    } catch (error) {
    console.error(error);
    alert("An error occurred. Please try again later.");
    }
}



return (
        
    <div className="back">
    <section class="logImage">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
      {/* <div class="card" style="border-radius: 15px;"> */}
            <div class="card-body p-5">
            <h2 class="text-uppercase text-center mb-5">Login</h2>
            <form>
            <div class="form-outline mb-4">
            <input type="email" id="email" class="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label class="form-label" for="form3Example3cg">Your Email</label>
            </div>
            
            <div class="form-outline mb-4">
            <input type="password" id="password" class="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label class="form-label" for="form3Example3cg">Your password</label>
            </div>
            <div class="d-flex justify-content-center">
            <button type="button" onClick={Submit} class="btn btn-light btn-block btn-lg gradient-custom-4 text-body">Login</button><br/>

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

