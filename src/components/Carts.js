import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCarts, restoreCarts } from './../actions/carts'

class Carts extends Component {

  constructor(props){
    super(props);

    this.handleDeleteCartClick = this.handleDeleteCartClick.bind(this);
  }

  componentDidMount() {

    const { 
      cartsArray, 
      restoreCartsFromStorage 
    } = this.props;

    const storedCarts = sessionStorage.getItem('HARDWARE_STORE_CARTS');

    if((Object.entries(storedCarts).length !== 0 && storedCarts.constructor !== Object) && cartsArray.length === 0){
      restoreCartsFromStorage();
    }
  }

  handleDeleteCartClick(event){
    event.preventDefault();
    this.props.deleteCartClick(event.target.value);
  }

  render () {
    const { cartsArray, CartsSummary } = this.props;
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
              <div className="cart-amount">
                <div>
                  <span className="cart-quantity">Qty: {cart.quantity}</span>
                </div>
                <div>
                  <span className="cart-price">${cart.price}</span>
                </div>
                <div>
                  <span className="cart-subTotal">${cart.quantity * cart.price}</span>
                </div>
              </div>  
            </div>
            <button value={cart.name} onClick={this.handleDeleteCartClick}>Delete</button>
          </div>
        ))}
        <hr />
        <div>
          <p>Total ({CartsSummary.totalQuantity} item) : NZD ${CartsSummary.totalAmount}</p>
        </div>
      </div>
    )
  }
  
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

const mapDispatchToProps = dispatch => {
  const storedCarts = JSON.parse(sessionStorage.getItem('HARDWARE_STORE_CARTS'));
  return {
    restoreCartsFromStorage: () => dispatch(restoreCarts(storedCarts)),
    deleteCartClick: (productName) => dispatch(removeCarts(productName)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Carts);

