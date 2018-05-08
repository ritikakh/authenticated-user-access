import React, { Component } from 'react';
import Header from './header';
import PropTypes from 'prop-types';

// Component.propTypes = {
//   text: PropTypes.string.isRequired,
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
      </div>
    );
  }
}
