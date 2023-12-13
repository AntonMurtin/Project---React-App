import {Link} from 'react-router-dom'

export const ErrorPage = () => {

    return (
        <section className='product-page'>

<div id="home">
            <div className="home-details">

                <h1 className="home-title">Sorry, this page is not available! </h1>

               
                   
                

                <Link to={`/SHOP`} className="buy_details btn1 ">shop</Link>
                

            </div>
           

            <img src='https://media.istockphoto.com/id/519106909/photo/white-3d-man-with-red-404-error-symbol.jpg?s=612x612&w=0&k=20&c=yudQWT4Dw3-t0ekfZxVrAY7p-vGOkuZ6plyhoDvc82Y=' />
            <img src='https://media.istockphoto.com/id/519106909/photo/white-3d-man-with-red-404-error-symbol.jpg?s=612x612&w=0&k=20&c=yudQWT4Dw3-t0ekfZxVrAY7p-vGOkuZ6plyhoDvc82Y=' />
            <img src='https://media.istockphoto.com/id/519106909/photo/white-3d-man-with-red-404-error-symbol.jpg?s=612x612&w=0&k=20&c=yudQWT4Dw3-t0ekfZxVrAY7p-vGOkuZ6plyhoDvc82Y=' />
            {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNafdQxKZEB091ie0cowvIfzMSUxtYHE4w-A&usqp=CAU' /> */}
            {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci9u_yjT5c9NOBNVZ1GfPRlX4Am1gCaqWrA&usqp=CAU' /> */}
           

        </div>

       

        </section >
    )
}