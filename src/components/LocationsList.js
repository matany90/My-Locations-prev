import React, { Component } from 'react'
import { connect } from 'react-redux';

class LocationsList extends Component {
  render() {
    return (
      <div>
        <h1>LocationsList</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    const { locations } = state.locations;

    return { locations };
}

export default connect(mapStateToProps)(LocationsList);