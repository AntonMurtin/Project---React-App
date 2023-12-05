    import {Link} from 'react-router-dom'

export const ProductCard=(data)=>{
    return(
        <div className="product">
                <span className="product__price">{data.price}$</span>
                <div className='syze'><img className="product__image" src={data.image} /></div>
                <div className='syze'><h1 className="product__title">{data.title}</h1></div>
                <div className='syze'><p>{data.description}</p></div>
                <Link to="#" className="buy__btn btn1">Buy Now</Link>
                <Link to="#" className="details__btn btn1">Details</Link>
            </div>
    );
}

