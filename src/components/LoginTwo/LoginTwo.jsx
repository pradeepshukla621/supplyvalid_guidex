import React, { useEffect, useState } from "react";
import "./LoginTwo.css"
import FacebookLogo from "../../assets/icons/facebook-fill.svg"
import TwitterLogo from "../../assets/icons/twitter-fill.svg"
import GoogleLogo from "../../assets/icons/google-fill.svg"
import LinkedinLogo from "../../assets/icons/linkedin-fill.svg"

import SupplyValid from "../../assets/icons/SV-Logo.svg"
import { useNavigate } from 'react-router-dom';
import Dashboard from "../Dashboard";

// import validator from "validator";



function LoginTwo() {

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();




    const generateCaptcha = () => {
        const randomCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
        setCaptcha(randomCaptcha);
        console.log(setCaptcha)

    };

    useEffect(() => {
        generateCaptcha()
    }, []);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

    };



    const handleSubmit = (e) => {
        e.preventDefault()

        if (mobile[0] != '6' && mobile[0] != '7' && mobile[0] != '8' && mobile[0] != '9') {
            // e.preventDefault();
            setErrorMessage('Mobile no. must start with 7,8,or 9');
            return
        }

        if (password.length <= 8) {
            alert("Please validate password!!")
            return
        }

        // if (validator.isStrongPassword (value , {
        //     minLength: 8, minLowercase: 1, 
        // 	minUppercase: 1, minNumbers: 1, minSymbols: 1 
        // })) { 
        // 	setErrorMessage('Is Strong Password') 
        // } else { 
        // 	setErrorMessage('Is Not Strong Password') 
        // } 


        if (captcha === captchaInput) {
            setErrorMessage('');
            alert('Login successful!');
            navigate('/dashboard');
            // Continue with the login process (e.g., API call)
        } else {
            setErrorMessage('Incorrect CAPTCHA. Please try again.');
            generateCaptcha(); // Generate new CAPTCHA if incorrect
            setCaptchaInput('');
        };
        e.prevent.default();
    }




    return (
        <>


            <div className="login-wrapper">
                <div className="loginTwo-bg"></div>


                <div className="row login-cust-container">
                    <div className="col-lg-6 left-section">
                        <div className="" style={{ textAlign: "left" }}>
                            <h1>w e l c o m e <span style={{ color: "red" }}> t o </span> S u p p l y V a l i d</h1>
                            <p>
                                At SupplyValid, we understand the challenges that farmers and businesses face in managing their
                                day-to-day processes. That’s why we started this company, to provide an all-in-one platform
                                that streamlines operations and makes business processes easier.
                            </p>

                            {/* 
                            <div className="social-icon">
                                <span><img className="social-img" src={FacebookLogo} /></span>
                                <span><img className="social-img" src={TwitterLogo} /></span>
                                <span><img className="social-img" src={GoogleLogo} /></span>
                                <span><img className="social-img" src={LinkedinLogo} /></span>
                            </div> 
                            */}

                        </div>
                    </div>
                    <div className="col-lg-6 right-section">
                        <img style={{ width: "40%", paddingBottom: "10px" }} src={SupplyValid} />
                        {/* <h1>SupplyValid</h1> */}
                        <p>Sign Into Your Account </p>
                        <p>Jai mata di</p>

                        <div className="form-wrapper">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="input-form">
                                    <div className="user-input ">
                                        <input type="tel"
                                            id="mobile"
                                            name="mobile"
                                            onChange={(e) => setMobile(e.target.value)}
                                            value={mobile}
                                            placeholder="Mobile Number"
                                            required />
                                    </div>

                                    <div className="user-input ">
                                        <input type="password" id="password" name="password" onChange={handlePasswordChange} value={password} placeholder="Password" required />
                                    </div>

                                    <div className="user-input ">
                                        <div>
                                            <label htmlFor="captcha" style={{ userSelect: "none"}} >Captcha:
                                                <span className="captcha-text">{captcha}</span>
                                            </label>
                                        </div>

                                        <input
                                            type="text"
                                            id="captcha"
                                            value={captchaInput}
                                            onChange={(e) => setCaptchaInput(e.target.value)}
                                            required
                                        />
                                        <div>
                                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                        </div>
                                    </div>



                                </div>

                                <div className="checkbox-field">
                                    <div className="d-flex align-item-center mb-4">
                                        <span>
                                            <input type="checkbox" />
                                        </span>
                                        <span className="px-2">RememberMe</span>
                                    </div>

                                    <div className="">Forget Password</div>
                                </div>

                                <button className="submit-button" type="submit">LOGIN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default LoginTwo;