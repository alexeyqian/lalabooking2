import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';
import RoomTypeList from './RoomTypeList';
import CheckinCheckout from './CheckinCheckout';
import HotelMap from './HotelMap';
import NearByHotelList from './NearByHotelList';
import ImageGallery from 'react-image-gallery';
import HotelApi from '../../../api/mockHotelApi';
import * as ajaxStatusActions from '../../../actions/ajaxStatusActions';

import "react-image-gallery/styles/css/image-gallery.css";

class HotelDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nearByHotels: []
    };

    this.onChangeDates = this.onChangeDates.bind(this);

  }

  componentWillMount() {
    this.props.actions.loadHotelById(this.props.id);
    // loadRoomsById(query);
    // loadNearbyHotels(hotel);
    // loadHotelMap(hotel)
    this.getNearByHotels();
  }

  getNearByHotels(){
    ajaxStatusActions.beginAjaxCall();
    HotelApi.getNearByHotels()
      .then(hotels => {
        ajaxStatusActions.ajaxCallSuccess();
        this.setState({nearByHotels: hotels});
      }).catch(error => {
      ajaxStatusActions.ajaxCallError();
      throw(error);
    });
  }

  onChangeDates(){

    // ...
  }

  render() {
    const {hotel} = this.props;
    if(!hotel || !hotel.id)
      return null;

    const geo = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

    return (

        <div className="row">

          <div className="col-md-8">
            <Link to="/hotels">Back to hotels</Link>

            <h1>Hotel: {hotel.name}</h1>
            <span>{hotel.id} - {hotel.category}</span>
            <div className="hotel-image-gallery">
              <ImageGallery items={hotel.photos}/>
            </div>
            <CheckinCheckout checkin={this.props.query.checkin}
                             checkout={this.props.query.checkout}
                             onChangeDates={this.onChangeDates}/>
            <RoomTypeList roomTypes={hotel.roomTypes}/>

            <div>{hotel.description}</div>
          </div>

          <div className="col-md-4">
            <div className="map-panel bg-light">
              <HotelMap geo={geo}/>
            </div>
            <br/>
            <div className="near-by-panel bg-light">
              <NearByHotelList hotels={this.state.nearByHotels}/>
            </div>
            <br/>
          </div>

        </div>

    );
  }
}

HotelDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  hotel: PropTypes.object,
  query: PropTypes.object,
  actions: PropTypes.object.isRequired,
  //match: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.match.params.id,
    hotel: state.hotel,
    query: state.query
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetailPage);
