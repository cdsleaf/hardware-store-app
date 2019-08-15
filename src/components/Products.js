import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCarts } from './../actions/carts';

class Products extends Component {

  constructor(props){
    super(props);

    this.handleAddCartClick = this.handleAddCartClick.bind(this);
  }

  handleAddCartClick(event){
    event.preventDefault();
    const {products, dispatch} = this.props;
    const selectedProduct = products.filter(product => product.name === event.target.value);
    dispatch(addCarts(selectedProduct[0]));
  }
  

  render () {
    const { products } = this.props;
    return (
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <button value={product.name} onClick={this.handleAddCartClick}>ADD TO CART</button>
          </div>
        ))}
      </div>
    )
  }  
  
}

const mapStatetoProps = ({ products=[] }, props) => {
  return {
    products,
    ...props
  };
}

export default connect(mapStatetoProps)(Products);
