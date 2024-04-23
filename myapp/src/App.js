import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

function SignIn({ onSignIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/accounts/sign-in/', { username, password });
            onSignIn(response.data.user);
        } catch (error) {
            alert('Failed to sign in. Please check your username and password.');
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Sign In</button>
                <p>
                    No account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
}

function Register({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match');
            return;
        }
        try {
            await axios.post('http://localhost:8000/accounts/register/', {
                username, password, password2, email, first_name: firstName, last_name: lastName
            });
            alert('Registration successful, please sign in.');
            onRegister();
            navigate('/sign-in')
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                <input type="password" value={password2} onChange={e => setPassword2(e.target.value)} placeholder="Confirm Password" required />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

function App() {
    const [user, setUser] = useState(null);

    const handleSignIn = (username) => {
        setUser(username);
        console.log(username)
    };

    const handleRegister = () => {
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <div>Welcome, {user}!</div> : <Navigate replace to="/sign-in" />} />
                <Route path="/sign-in" element={<SignIn onSignIn={handleSignIn} />} />
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
            </Routes>
        </Router>
    );
}

export default App;
