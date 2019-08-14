import React from 'react';
import { connect } from 'react-redux';
import MainContainer from './MainContainer';

const App = () => {
  return (
    <MainContainer className="main-container" />
  );
}

export default connect()(App)