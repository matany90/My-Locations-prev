import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import keys from '../config/keys';
import { withStyles } from '@material-ui/core/styles';

class LocationListItem extends Component {
    render() {
        return (
            <div>
            <Map
                google={this.props.google}
                style={{width: '50%', height:'100%'}}
                zoom={14}
                initialCenter={{
                    lat: 32.085300,
                    lng: 34.781769
                }}
            >    
            <Marker onMouseover={this.onMouseoverMarker}
          name={'Current location'} draggable
          position={{lat: 32.085300, lng: 34.781769}}
          />
          </Map>
          <h2>ddd</h2>
          </div>
        );
    }
}

const style = theme => ({
    width: '100%',
    height: '100%'
  })

const mapStateToProps = ({locations}, ownProps) => {
    console.log(locations.locations[ownProps.match.params.id]);
    return { location: locations.locations[ownProps.match.params.id] }
}

const WrappedLocationListItem =  GoogleApiWrapper({
    apiKey: keys.GOOGLE_API_KEY
  })(LocationListItem);

export default connect(mapStateToProps)(withStyles(style)(WrappedLocationListItem));

