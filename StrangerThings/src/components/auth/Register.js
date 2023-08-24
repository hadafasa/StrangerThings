import { useState } from 'react';
import PropTypes from 'prop-types';


function Register({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            alert('Passwords do not match.');
            return;
        }
        onRegister({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required minLength="4" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required minLength="4" />
            <input type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" required />
            <button type="submit">Register</button>
        </form>
    );
}

Register.propTypes = {
    onRegister: PropTypes.func.isRequired,
};

export default Register;