

export const Buy = () => {

    return(
        <section className="buy-page">
        <div className="wrapper">
      
        <div >
        <h2><svg xmlns="https://rainsystems.eu/wp-content/uploads/Logo_Rain_Systems-mini.png" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="white" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                        My Product</h2>
        </div>
        <div id="table" className="bg-white rounded">
          
          <hr />
          <div className="table-responsive">
            <table className="table activitites">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase">
                    Product
                  </th>
                  <th scope="col" className="text-uppercase">
                    Quantity
                  </th>
                  <th scope="col" className="text-uppercase">
                    Price
                  </th>
                  <th scope="col" className="text-uppercase">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td className="item">
                    <td >
                      <img src="https://nqcart.ae/cdn/shop/products/HunterXcoreXC601EIrrigationControlSystem.webp?v=1677234151&width=1000"/>
                    </td>
                      <td ><p>Suspended Heart Candles</p></td>
                  </td >
                  
                  <td className="price"><p> <label htmlFor="price"></label>
                    <input
                        type="number"
                        name='price'
                        placeholder="1"
                        id="price"
                       
                        
                    /></p></td>
                  <td >$21.40</td>
                  <td >
                    $249 
                  </td>
                    <a>x</a>
                </tr>
                <tr>
                  <td className="item">
                    <td >
                      <img src="https://nqcart.ae/cdn/shop/products/HunterXcoreXC601EIrrigationControlSystem.webp?v=1677234151&width=1000"/>
                    </td>
                      <td ><p>Suspended Heart Candles</p></td>
                  </td >
                  
                  <td className="price"><p> <label htmlFor="price"></label>
                    <input
                        type="number"
                        name='price'
                        placeholder="1"
                        id="price"
                       
                        
                    /></p></td>
                  <td className="d-flex flex-column">$21.40</td>
                  <td className="font-weight-bold">
                    $249 
                  </td>
                    <a className="close">x</a>
                </tr>
                <tr>
                  <td className="item">
                    <td >
                      <img src="https://nqcart.ae/cdn/shop/products/HunterXcoreXC601EIrrigationControlSystem.webp?v=1677234151&width=1000"/>
                    </td>
                      <td ><p>Suspended Heart Candles</p></td>
                  </td >
                  
                  <td className="price"><p> <label htmlFor="price"></label>
                    <input
                        type="number"
                        name='price'
                        placeholder="1"
                        id="price"
                       
                        
                    /></p></td>
                  <td className="d-flex flex-column">$21.40</td>
                  <td className="font-weight-bold">
                    $249 
                  </td>
                    <a className="close">x</a>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="items" />
          <div className="table-responsive">
            <table className="table">
             
              <tbody>
                <tr>
                  <td className="item">
                    <div className="d-flex align-items-start">
                     
                    </div>
                  </td>
                  <td className="subtotal"><h2>Subtotal:</h2></td>
                  <td className="total">$249 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button id='buybtn'>BUY</button>
      </div>
      </section>
    )
}
