import { Link } from 'react-router-dom'

export const Shop = () => {

    return (
        <section className="catalog">


            <div className="cards">

                <article className="card card--1">

                    <div className="card__img"></div>
                    <Link to="/shop/pomp" className="card_link">
                        <div className="card__img--hover"></div>
                    </Link>
                    <div className="card__info">

                        <h3 className="card__title">Warmtepomp Installatie</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">John Doe</a></span>
                    </div>
                </article>


                <article className="card card--2">

                    <div className="card__img"></div>
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    <div className="card__info">
                       
                        <h3 className="card__title">Discover the sea</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">John Doe</a></span>
                    </div>
                </article>


                <article className="card card--3">

                    <div className="card__img"></div>
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    <div className="card__info">
                      
                        <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">Celeste Mills</a></span>
                    </div>
                </article>

            </div>
            <div className="cards">

                <article className="card card--4">

                    <div className="card__img"></div>
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    <div className="card__info">
                        
                        <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">Celeste Mills</a></span>
                    </div>
                </article>


                <article className="card card--5">

                    <div className="card__img"></div>
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    <div className="card__info">
                       
                        <h3 className="card__title">Discover the sea</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">John Doe</a></span>
                    </div>
                </article>
                <article className="card card--6">

                    <div className="card__img"></div>
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    <div className="card__info">
                      
                        <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">Celeste Mills</a></span>
                    </div>
                </article>

            </div>

        </section>
    )
}