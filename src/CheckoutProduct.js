import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating}) {
  const [, dispatch] = useStateValue();

  console.log()

  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p>
          <small>GHC</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p></p>
          ))
          }
        </div>

        <button onClick={RemoveFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;