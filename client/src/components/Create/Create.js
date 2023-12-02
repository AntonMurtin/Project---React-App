
import { useForm } from '../../hooks/useForm'

export const Create=()=>{

    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    return (
        <section className="create-page">
        <div className='create'>

            <form method='POST' onSubmit={onSubmit}>

                <h3><svg xmlns="https://rainsystems.eu/wp-content/uploads/Logo_Rain_Systems-mini.png" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="white" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                    Create Product</h3>
                    <label >Product Type</label>
                    <select id="platform" name="platform">
                    <option value="">Type</option>
                    <option value="PC">PC</option>
                    <option value="Nintendo">Nintendo</option>
                    <option value="PS4">PS4</option>
                    <option value="PS5">PS5</option>
                    <option value="XBOX">XBOX</option>
                </select>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="User name"
                    id="title"
                    value={values.title}
                    onChange={changeHandler}
                />

                <label htmlFor="url">Url</label>
                <input
                    type="text"
                    name='url'
                    placeholder="url"
                    id="url"
                    value={values.url}
                    onChange={changeHandler}
                />

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name='price'
                    placeholder="price"
                    id="price"
                    value={values.price}
                    onChange={changeHandler}
                />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name='description'
                    placeholder="... "
                    id="description"
                    value={values.description}
                    onChange={changeHandler}
                />

                <button id='btn'>Create</button>

            </form>
        </div>
        </section>
    )
}