import React from 'react'
import products from '../Data/product';
function AppleCard() {

  return (

    <>
      <div className="product">
        {products.map((product) => (
          <div className="apple-card" key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} />
            <p>Price: {product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}

      </div>


    </>
  )
}

export default AppleCard;