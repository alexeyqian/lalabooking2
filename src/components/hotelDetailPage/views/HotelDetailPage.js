import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
//import * as ajaxStatusActions from '../../../actions/ajaxStatusActions';
//import hotelApi from '../../../api/mockHotelApi';

import RoomTypeList from './RoomTypeList';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

class HotelDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentWillMount() {
    this.props.actions.loadHotelById(this.props.id);
    /*ajaxStatusActions.beginAjaxCall();
    hotelApi.getHotelById(this.props.id)
      .then(h => {
        ajaxStatusActions.ajaxCallSuccess();
        this.setState({hotel: h});
      }).catch(error => {
        ajaxStatusActions.ajaxCallError();
        throw(error);
      });*/
  }

  render() {
    const {hotel} = this.props;
    return (
      <div>
        {hotel && hotel.id.length > 0 &&
        <div className="row">

          <div className="col-md-3">
            <div className="side-search-panel bg-light">

            </div>
            <br/>
          </div>

          <div className="col-md-9">
            <h1>Hotel: {hotel.name}</h1>
            <span>{hotel.id} - {hotel.category}</span>
            <div className="hotel-image-gallery">
              <ImageGallery items={hotel.photos}/>
            </div>
            <div>{hotel.description}</div>
            <RoomTypeList roomTypes={hotel.roomTypes}/>
          </div>

        </div>

        }
      </div>

    );
  }
}

HotelDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  hotel: PropTypes.object,
  actions: PropTypes.object.isRequired,
  //match: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.match.params.id,
    hotel: state.hotel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetailPage);
