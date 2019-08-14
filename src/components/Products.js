import React from 'react';
import { connect } from 'react-redux';

const Products = props => {

  const { products } = props;

  return (
    <div className="products">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-info">
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price}</span>
          </div>
          <button>ADD TO CART</button>
        </div>
      ))}
    </div>
  )
}

const mapStatetoProps = ({ products=[] }, props) => {
  return {
    products,
    ...props
  };
}

export default connect(mapStatetoProps)(Products);

