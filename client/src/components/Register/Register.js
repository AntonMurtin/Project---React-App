import { useContext } from 'react';

import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../../context/AuthContext'


export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }, onRegisterSubmit);

    return (
        <div className='register'>

            <form method='POST' onSubmit={onSubmit}>

                <h3><svg xmlns="https://rainsystems.eu/wp-content/uploads/Logo_Rain_Systems-mini.png" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="white" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                    Register Here</h3>

                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    name="username"
                    placeholder="User name"
                    id="username"
                    value={values.username}
                    onChange={changeHandler}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name='email'
                    placeholder="Email"
                    id="email"
                    value={values.email}
                    onChange={changeHandler}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    id="password"
                    value={values.password}
                    onChange={changeHandler}
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name='confirmPassword'
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={changeHandler}
                />

                <button id='btn'>Register</button>


            </form>
        </div>
    )
}