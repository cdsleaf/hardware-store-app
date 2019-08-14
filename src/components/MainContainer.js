import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import { handleInitialData } from './../actions/shared';

class MainContainer extends Component {

  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Products />
        <Footer />
      </Fragment>
    );
  }  
}

const mapStateToProps = ( state, props ) => {
  return {
    ...props
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);