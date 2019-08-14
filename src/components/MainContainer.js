import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Header from './Header';
import Products from './Products';
import Carts from './Carts';
import Footer from './Footer';
import { handleInitialData } from './../actions/shared';

class MainContainer extends Component {

  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Carts} />
          </Switch>
          <Footer />
        </BrowserRouter>
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