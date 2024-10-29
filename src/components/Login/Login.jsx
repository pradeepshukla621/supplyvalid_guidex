import React, { useState, useEffect } from 'react';
import "./Login.css"

import LoginBg from "../../assets/Images/loginbg.svg"

function Login() {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState('');
    const [criteria, setCriteria] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });


    // Function to generate a random CAPTCHA
    const generateCaptcha = () => {
        const randomCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
        setCaptcha(randomCaptcha);
    };

    // Generate a new CAPTCHA when the component mounts
    useEffect(() => {
        generateCaptcha();

        const storedData = localStorage.getItem('mobile', mobile);
        if (storedData) {
            setData(storedData);
        }
    }, []);

    // Function to handle input change
    const handleChange = (event) => {
        setData(event.target.value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    const validatePassword = (value) => {
        setCriteria({
            length: value.length > 8,
            uppercase: /[A-Z]/.test(value),
            lowercase: /[a-z]/.test(value),
            number: /[0-9]/.test(value),
            specialChar: /[@$!%*?&#]/.test(value),
        });


        console.log(criteria)
    };

    const allCriteriaMet = Object.values(criteria).every(Boolean);

    const handleSubmit = (e) => {
        // debugger
        e.preventDefault();
        if (mobile[0] != '7' && mobile[0] != '8' && mobile[0] != '9') {
            // e.preventDefault();
            setErrorMessage('The phone number must start with 7, 8, or 9.');
            return
        }
        if (!(password.length > 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[@$!%*?&#]/.test(password))){
            // e.preventDefault();
            alert("Please validate password!!")
            return
        }

            console.log("test", e)


        if (captcha === captchaInput) {
            setErrorMessage('');
            alert('Login successful!');
            // Continue with the login process (e.g., API call)
        } else {
            setErrorMessage('Incorrect CAPTCHA. Please try again.');
            generateCaptcha(); // Generate new CAPTCHA if incorrect
            setCaptchaInput('');
        };


        console.log(mobile)
        localStorage.setItem('myData', data);

        // if (!/^[789]/.test(mobile)) {
        //     setErrorMessage('The phone number must start with 7, 8, or 9.');
        //   } else {
        //     setErrorMessage('');
        //     // Submit form or perform further actions
        //     // alert('Form submitted successfully!');
        //   }

    };

    return (

        <div className="login-wrapper">

            <div className="left-section" style={{ width: "60%", height: "100dvh", backgroundColor: "#152733" }}>
                <img style={{ height: "100dvh" }} src={LoginBg} alt="" />
            </div>

            <div className="right-section">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                                pattern="[0-9]{10}" // Validate 10-digit mobile number
                                placeholder="Enter 10-digit mobile number"
                            />
                        </div>

                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}


                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />

                        </div>

                        <ul>
                            <li style={{ color: criteria.length ? 'green' : 'red' }}>
                                At least 8 characters
                            </li>
                            <li style={{ color: criteria.uppercase ? 'green' : 'red' }}>
                                At least one uppercase letter
                            </li>
                            <li style={{ color: criteria.lowercase ? 'green' : 'red' }}>
                                At least one lowercase letter
                            </li>
                            <li style={{ color: criteria.number ? 'green' : 'red' }}>
                                At least one number
                            </li>
                            <li style={{ color: criteria.specialChar ? 'green' : 'red' }}>
                                At least one special character (@$!%*?&#)
                            </li>
                        </ul>

                        <div className="input-group captcha">
                            <label htmlFor="captcha">Captcha: <span className="captcha-text">{captcha}</span></label>
                            <input
                                type="text"
                                id="captcha"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn">Login</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default Login;
