import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Email and Password are required');
            return;
        }

        axios.post('http://localhost:5000/login', { email, password })
            .then(result => {
                toast(result.data.message);

                if (result.data.message === "success") {
                    // Store the isAdmin flag in local storage
                    localStorage.setItem('isAdmin', result.data.isAdmin.toString());
                    navigate(result.data.isAdmin ? '/dashboard' : '/home');
                }
            })
            .catch(err => {
                toast.error('Login failed. Please try again.');
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            autoComplete='on'
                            name="email"
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            autoComplete='on'
                            name="password"
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Login
                    </button>
                </form>
                <p>Don't have an account?</p>
                <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Register
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
