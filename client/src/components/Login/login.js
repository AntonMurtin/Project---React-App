import { useAuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm'


export const Login = () => {

    const { onLoginSubmit } = useAuthContext();
    const { values, onSubmit, changeHandler } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit)
    return (
        <section className='product-page'>
            <div className='login'>

                <form method='POST' onSubmit={onSubmit}>
                    <h3><svg xmlns="../images/Logo_Rain_Systems-mini" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="white" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                        Login Here</h3>

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
                        placeholder="Password"

                        name='password'
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <button className='btn-log-reg'>Log In</button>

                </form>
            </div>
        </section>
    )
}