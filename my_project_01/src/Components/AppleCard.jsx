import React from 'react'
import products from '../Data/product';
function AppleCard() {
  
  return (

    <>
      <div className="product">
        <div className="apple-card">

          <h2>{products[0].name}</h2>
          <img src={products[0].img} alt={products[0].name} />
          <p>Price: {products[0].price}</p>
          <button>Buy Now</button> 


        </div>

 <div className="apple-card">

          <h2>{products[1].name}</h2>
          <img src={products[1].img} alt={products[1].name} />
          <p>Price: {products[1].price}</p>
          <button>Buy Now</button> 


        </div>
<div className="apple-card">

          <h2>{products[2].name}</h2>
          <img src={products[2].img} alt={products[2].name} />
          <p>Price: {products[2].price}</p>
          <button>Buy Now</button> 


        </div>

      </div>


    </>
  )
}

export default AppleCard;