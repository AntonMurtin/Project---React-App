import { useEffect, useState } from "react"
import { productsServiceFactory } from "../../services/productsService";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useProductContext } from "../../context/ProductContext";


export const Edit = () => {
    const productsService = productsServiceFactory();

    const { type, productId } = useParams();

    const { onEditProduct } = useProductContext()

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        type: '',
        title: '',
        image: '',
        price: '',
        description: ''
    }, onEditProduct)

    useEffect(() => {
        productsService.getBiId(type, productId)
            .then(result => {
                changeValues(result)
            })
    }, [productId])

    return (
        <section className="create-page">
            <div className='create'>

                <form method='POST' onSubmit={onSubmit}>

                    <h3><svg xmlns="https://rainsystems.eu/wp-content/uploads/Logo_Rain_Systems-mini.png" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="white" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                        Edit Product</h3>
                    <label >Product Type</label>
                    <select id="platform" name="type" value={values.type} onChange={changeHandler}>
                        <option value="">-------------</option>
                        <option value="waterpomps">WATERPOMPS</option>
                        <option value="systems">IRRIGATION SYSTEMS</option>
                        <option value="parts">PARTS</option>
                        <option value="machines">POWER MACHINES</option>
                        <option value="pipes">PIPES</option>
                        <option value="tools">TOOLS</option>
                    </select>

                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        id="title"
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name='image'
                        placeholder="Image"
                        id="image"
                        value={values.image}
                        onChange={changeHandler}
                    />

                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name='price'
                        placeholder="Price"
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

                    <button className="btn-log-reg">Edit</button>

                </form>
            </div>
        </section>
    )
}