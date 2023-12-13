import {Link} from 'react-router-dom'

export const Home=()=>{

    return(
        <section >
      
      <div id="home">
            <div className="home-details">

                <h1 className="home-title">EVERYTHING YOU NEED IN ONE PLACE </h1>

               
                    <p> .</p>
                

                <Link to={`/SHOP`} className="buy_details btn1 ">shop</Link>
                

            </div>
            {/* <div className="home-image"> */}

            <img src='../images/grudfosPomp.jpg' />
            {/* <img src="../images/RAZ.jpeg"/> */}
            <img src='../images/220210082925warer.jpg' />
            {/* <img src='../images/mashins.jpg '/> */}
            {/* <img src='../images/trubi.jpg' /> */}
            <img src='../../images/tools.jpg' />

            {/* </div> */}
        </div>

     </section>

       


    )
}