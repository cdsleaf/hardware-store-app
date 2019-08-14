import React from 'react';
import { connect } from 'react-redux';

const Carts = props => {

  const { cartsArray, CartsSummary } = props;

  return (
    <div className="carts">
      <p>Shopping Cart</p>
      <hr />
      {cartsArray.length === 0 ? (
        <div>
          <p>No items saved</p>
        </div>
      ) : cartsArray.map((cart, index) => (
        <div key={index} className="cart-card">
          <div className="cart-info">
            <span className="cart-name">{cart.name}</span>
            <span className="cart-quantity">{cart.quantity}</span>
            <span className="cart-price">${cart.price}</span>
            <span className="cart-subTotal">${cart.quantity * cart.price}</span>
          </div>
          <button>Delete</button>
        </div>
      ))}
      <hr />
      <div>
        <p>Total ({CartsSummary.totalQuantity} item) : NZD ${CartsSummary.totalAmount}</p>
      </div>
    </div>
  )
}

const mapStatetoProps = ({ carts }, props) => {
  const cartsArray = Object.values(carts);
  return {
    cartsArray,
    CartsSummary: cartsArray.reduce((summary, cart) => {
      return {
        totalQuantity: summary.totalQuantity + cart.quantity,
        totalAmount: summary.totalAmount + (cart.quantity * cart.price),
      };
    }, {
      totalQuantity: 0,
      totalAmount: 0,
    }),
    ...props
  };
}

export default connect(mapStatetoProps)(Carts);

