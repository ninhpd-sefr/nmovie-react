import React from 'react';
import {Link} from 'react-router-dom';
import './login.css'

function LoginPage(props) {
    return (
        <div className="container">
            <div className="container--login">
                <div className="container--login__tiltle">
                    <h1>LOGIN</h1>
                    <div className="container--login-input">
                        <div className="login--input">
                            <input type="text" required />
                            <div className="underline" />
                            <label htmlFor>Name</label>
                        </div>
                        <div className="login--input login--input_mgbnone">
                            <input type="text" required />
                            <label htmlFor>Password</label>
                            <div className="underline" />
                        </div>
                        <div className="login--input login--input__list">
                            <Link to='/' style={{ borderRight: '1px solid rgb(156, 147, 147)', height: '18px', paddingRight: '15px' }}>Back to Home</Link>
                            <a href>Signup</a>
                        </div>
                        <div className="login--input_login">
                            <input type="submit" defaultValue="Login" />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;