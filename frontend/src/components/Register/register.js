// import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import axios from 'axios'
// const Register=() =>{
//   const nav=useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password,setPassword]=useState('');



  


//     const Submit=async(event)=>
//     {
//         event.preventDefault();
//         try
//         {
//             const response = await axios.post('http://localhost:8000/register',{name,email,password});
//         if(response.data)
//         {
//             console.log(response.data)
//             alert("Successfully Registered");
//             nav("/login")
//         }
//           } catch (error) {
//             if(error.response){

//                 console.log("Email already exists");
//                 // alert("Email already exists. Please use a different email.");
//                 alert("Fill details")
          
//             }
//             else {
//               console.log(error);
//               alert("An error occurred. Please try again later.");
//           }
//       }
//     }





//     return (
        

//         <section class="logImage">
    
//   <div class="mask d-flex align-items-center h-100 gradient-custom-3">
//     <div class="container h-100">
//       <div class="row d-flex justify-content-center align-items-center h-100">
//         <div class="col-12 col-md-9 col-lg-7 col-xl-6">
//           {/* <div class="card" style="border-radius: 15px;"> */}
//             <div class="card-body p-5">
//               <h2 class="text-uppercase text-center mb-5">Create an account</h2>
//               <form>
//                 <div class="form-outline mb-4">
//                   <input type="text" id="name" class="form-control form-control-lg"  value={name} onChange={(e) => setName(e.target.value)} required />
//                   <label class="form-label" for="form3Example1cg">Your Name</label>
//                 </div>
//                 <div class="form-outline mb-4">
//                   <input type="email" id="email" class="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                   <label class="form-label" for="form3Example3cg">Your Email</label>
//                 </div>
//                 <div class="form-outline mb-4">
//                   <input type="password" id="password" class="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                   <label class="form-label" for="form3Example3cg">Your password</label>
//                 </div>
//                 <div class="d-flex justify-content-center">
//                   <button type="button" onClick={Submit}
//                     class="btn btn-light btn-block btn-lg gradient-custom-4 text-body">Register</button>
//                 </div>
//                 <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="login"
//                     class="fw-bold text-body"><u>Login here</u></a></p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   {/* </div> */}
// </section>





//         // <div>
//         //     <label htmlFor="name">Username:</label>
//         //     <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
//         //     <label htmlFor="email">Email:</label>
//         //     <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
//         //     <button onClick={Submit}>Register</button>
//         // </div>
//     );
// }

// export default Register;



// import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';

// import axios from 'axios';

// const Register = () => {
//     const nav = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');



//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     const validateEmail = (email)=>{
//         if(!emailPattern.test(email)){

//         console.log("valid email");
//         return true;
//     } else {
//         console.log("invalid email format");
//         return false;
//     }
// };

//     const Submit = async (event) => {
//         event.preventDefault();
//         try {
//             if(!validateEmail(email)){
//                 alert("Invalid Email Patten");
//                 return;
//             }



//             const response = await axios.post('http://localhost:8000/register', { name, email, password });
            

//             if (response.data) {
//                 console.log(response.data)
//                 alert("Successfully Registered");
//                 nav("/login");
//             }
//         } catch (error) {
//             if (error.response) {
//                 console.log("Email already exists");
//                 alert("Fill details");
//             } else {
//                 console.log(error);
//                 alert("An error occurred. Please try again later.");
//             }
//         }
//     };


    
//     return (
        
//         <div className="back">
//         <section class="logImage">
//         <div class="mask d-flex align-items-center h-100 gradient-custom-3">
//             <div class="container h-100">
//                 <div class="row d-flex justify-content-center align-items-center h-100">
//                 <div class="col-12 col-md-9 col-lg-7 col-xl-6">
//           {/* <div class="card" style="border-radius: 15px;"> */}
//                 <div class="card-body p-5">
//                 <h2 class="text-uppercase text-center mb-5">Register</h2>
//                 <form>
//                 <div class="form-outline mb-4">
//                 <input type="name" id="name" class="form-control form-control-lg" value={name} onChange={(e) => setName(e.target.value)} required />
//                 <label class="form-label" for="form3Example3cg">Your Name</label>
//                 </div>
//                 <div class="form-outline mb-4">
//                 <input type="email" id="email" class="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <label class="form-label" for="form3Example3cg">Your Email</label>
//                 </div>
//                 <div class="form-outline mb-4">
//                 <input type="password" id="password" class="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <label class="form-label" for="form3Example3cg">Your password</label><br/>
//                 <button style={{marginLeft:"32%"}}type="button" onClick={Submit} class="btn btn-light btn-block btn-lg gradient-custom-4 text-body">Register</button>

//                 </div>
//                 <div class="d-flex justify-content-center">
                
//                 <p className="text-center text-muted mt-3 mb-0">Already have an account? <a href="/login" className="fw-bold">Login here</a></p>

//                 </div>
//             </form>
//             </div>
//         </div>
//         </div>
//     </div>
//     </div>
// </section>
//         </div>
        
        
//     );
// }

// export default Register;




























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
                alert("Fill details");
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
